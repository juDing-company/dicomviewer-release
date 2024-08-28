/** @prettier  */
importScripts('./opencv.min.js');

let opencvConfig;

function initialize(config) {
  opencvConfig = config;
}

function sharpen(cv, mat, sigma) {
  sigma = sigma + (sigma % 2 ? 0 : 1);
  let sharpenMat = new cv.Mat();
  cv.GaussianBlur(mat, sharpenMat, new cv.Size(0), sigma);
  cv.addWeighted(mat, 1.5, sharpenMat, -0.5, 0, sharpenMat);
  return sharpenMat;
}

function blur(cv, mat, sigma) {
  sigma = sigma + (sigma % 2 ? 0 : 1);
  let blurMat = new cv.Mat();
  let ksize = new cv.Size(sigma, sigma);
  cv.GaussianBlur(mat, blurMat, ksize, 0);
  return blurMat;
}

function matToImageData(cv, mat) {
  const { cols, rows } = mat;
  let img = new cv.Mat();
  let depth = mat.type() % 8;
  let scale = depth <= cv.CV_8S ? 1 : depth <= cv.CV_32S ? 1 / 256 : 255;
  let shift = depth === cv.CV_8S || depth === cv.CV_16S ? 128 : 0;
  mat.convertTo(img, cv.CV_8U, scale, shift);
  switch (img.type()) {
    case cv.CV_8UC1:
      cv.cvtColor(img, img, cv.COLOR_GRAY2RGBA);
      break;
    case cv.CV_8UC3:
      cv.cvtColor(img, img, cv.COLOR_RGB2RGBA);
      break;
    case cv.CV_8UC4:
      break;
    default:
      throw new Error('Bad number of channels (Source image must have 1, 3 or 4 channels)');
  }
  const imageData = new ImageData(new Uint8ClampedArray(img.data), cols, rows);
  img.delete();
  mat.delete();
  cv = undefined;
  return imageData;
}

async function handler(data, doneCallback) {
  const imageData = data.data.imageData;
  const { sigma, kernelType } = data.data.info;
  const opencv = await self.cv;
  const mat = opencv.matFromImageData(imageData);
  let newMat;
  switch (kernelType) {
    case 'blur':
      newMat = blur(opencv, mat, sigma);
      break;
    case 'sharpen':
      newMat = sharpen(opencv, mat, sigma);
      break;
    default:
      throw new Error('kernelType is undefined');
  }

  const newImageData = matToImageData(opencv, newMat);

  doneCallback?.(newImageData, [newImageData.data.buffer]);

  return {
    result: newImageData,
    transferList: [newImageData.data.buffer],
  };
}

self.registerTaskHandler({
  taskType: 'opencvDecode',
  handler,
  initialize,
});
