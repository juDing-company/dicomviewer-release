!function(t){function e(i){if(r[i])return r[i].exports;var s=r[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s="R8wP")}({C9uT:function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},R8wP:function(t,e,r){"use strict";function i(t){var e=t.buffer,r=t.width,i=t.height,s=t.isRGB,n=r*i*4/e.byteLength==1;if(n&&!s){var a=f()(new Uint8Array(e)).filter(function(t,e){return e%4==0||e%4==3});e=new Uint8Array(a).buffer}return{buffer:e,isIMGAnalysis2:n}}Object.defineProperty(e,"__esModule",{value:!0});var s=r("Z60a"),n=r.n(s),a=r("C9uT"),o=r.n(a),h=r("rzQm"),f=r.n(h),u={};self.onmessage=function(t){var e=t.data,r=e.buffer,s=e.item,n=s.dicomWidth,a=s.dicomHeight,o=s.id,h=s.index,f=s.dcIndex,c=s.isRGB,p=s.currentPicIndex,b=s.isSeries,y=s.isSave,v=s.ratio,m=s.bits,w=s.dicomInfo.isRGB,x=null,B=null,I=new g;if(x=new Uint8Array(r),I.loadPNG(x),b)if(y){B=c?I.isPNG?I.decodePixels():x:I.isPNG?I.getDecodeInt16():new Int16Array(M);var k=I.width,A=I.height,P=i({buffer:B.buffer,width:k,height:A,isRGB:w}),M=P.buffer,S=P.isIMGAnalysis2;self.postMessage({id:o,buffer:M,width:k,height:A,isSeries:b,isRGB:w,index:h,dcIndex:f,currentPicIndex:p,isIMGAnalysis2:S},[M])}else self.postMessage({id:o,width:width,height:height,isSeries:b,isRGB:w});else{var U=!1;if(8===parseInt(m)?(B=I.getDecodeInt8(),U=!0):B=I.getDecodeInt16(),u[o]){var G=u[o],C=I.width,_=I.height;if((void 0!=G||null!=G)&&(d(G.mergeBuffer,G.width,B,C,_,h,v,v),++G.complete>G.total-1)){var D=i({buffer:G.mergeBuffer.buffer,width:C,height:_,isRGB:w}),T=D.buffer,R=D.isIMGAnalysis2;self.postMessage({id:o,buffer:T,width:G.width,height:G.height,isSeries:b,isRGB:w,index:1,isIMGAnalysis2:R},[T]),delete u[o]}}else{var L={};L.id=o,L.complete=1,L.total=v*v,L.width=n,L.height=a;var O=I.width,j=I.height,N=i({buffer:B.buffer,width:O,height:j,isRGB:w}),z=N.buffer,E=N.isIMGAnalysis2;self.postMessage({id:o,buffer:z,width:O,height:j,isSeries:b,isRGB:w,index:0,dcIndex:f,currentPicIndex:p,isIMGAnalysis2:E},[z]);var H=l(n,a,U);L.mergeBuffer=H;var F=U?I.getDecodeInt8():I.getDecodeInt16();d(L.mergeBuffer,n,F,O,j,h,v,v),u[o]=L}}};var d=function(t,e,r,i,s,n,a,o){if(void 0!=t&&"number"==typeof n){for(var h=parseInt(n/o),f=n%a,u=0;u<s;u++)for(var d=0;d<i;d++){var l=u*i+d,c=r[l],p=e*(u*o+h)+d*a+f;t[p]=c}return t}},l=function(t,e,r){return r?new Uint8Array(t*e*3):new Int16Array(t*e)},c=function(){function t(){this.pos=0,this.bufferLength=0,this.eof=!1,this.buffer=null}return t.prototype={ensureBuffer:function(t){var e=this.buffer,r=e?e.byteLength:0;if(t<r)return e;for(var i=512;i<t;)i<<=1;for(var s=new Uint8Array(i),n=0;n<r;++n)s[n]=e[n];return this.buffer=s},getByte:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return this.buffer[this.pos++]},getBytes:function(t){var e=this.pos;if(t){this.ensureBuffer(e+t);for(var r=e+t;!this.eof&&this.bufferLength<r;)this.readBlock();var i=this.bufferLength;r>i&&(r=i)}else{for(;!this.eof;)this.readBlock();var r=this.bufferLength}return this.pos=r,this.buffer.subarray(e,r)},lookChar:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos])},getChar:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos++])},makeSubStream:function(t,e,r){for(var i=t+e;this.bufferLength<=i&&!this.eof;)this.readBlock();return new Stream(this.buffer,t,e,r)},skip:function(t){t||(t=1),this.pos+=t},reset:function(){this.pos=0}},t}(),p=function(){function t(t){throw new Error(t)}function e(e){var r=0,i=e[r++],s=e[r++];-1!=i&&-1!=s||t("Invalid header in flate stream"),8!=(15&i)&&t("Unknown compression method in flate stream"),((i<<8)+s)%31!=0&&t("Bad FCHECK in flate stream"),32&s&&t("FDICT bit set in flate stream"),this.bytes=e,this.bytesPos=r,this.codeSize=0,this.codeBuf=0,c.call(this)}var r=new Uint32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),i=new Uint32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),s=new Uint32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]),n=[new Uint32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59e4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],a=[new Uint32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5];return e.prototype=Object.create(c.prototype),e.prototype.getBits=function(e){for(var r,i=this.codeSize,s=this.codeBuf,n=this.bytes,a=this.bytesPos;i<e;)void 0===(r=n[a++])&&t("Bad encoding in flate stream"),s|=r<<i,i+=8;return r=s&(1<<e)-1,this.codeBuf=s>>e,this.codeSize=i-=e,this.bytesPos=a,r},e.prototype.getCode=function(e){for(var r=e[0],i=e[1],s=this.codeSize,n=this.codeBuf,a=this.bytes,o=this.bytesPos;s<i;){var h;void 0===(h=a[o++])&&t("Bad encoding in flate stream"),n|=h<<s,s+=8}var f=r[n&(1<<i)-1],u=f>>16,d=65535&f;return(0==s||s<u||0==u)&&t("Bad encoding in flate stream"),this.codeBuf=n>>u,this.codeSize=s-u,this.bytesPos=o,d},e.prototype.generateHuffmanTable=function(t){for(var e=t.length,r=0,i=0;i<e;++i)t[i]>r&&(r=t[i]);for(var s=1<<r,n=new Uint32Array(s),a=1,o=0,h=2;a<=r;++a,o<<=1,h<<=1)for(var f=0;f<e;++f)if(t[f]==a){for(var u=0,d=o,i=0;i<a;++i)u=u<<1|1&d,d>>=1;for(var i=u;i<s;i+=h)n[i]=a<<16|f;++o}return[n,r]},e.prototype.readBlock=function(){function e(t,e,r,i,s){for(var n=t.getBits(r)+i;n-- >0;)e[I++]=s}var o=this.getBits(3);if(1&o&&(this.eof=!0),0==(o>>=1)){var h,f=this.bytes,u=this.bytesPos;void 0===(h=f[u++])&&t("Bad block header in flate stream");var d=h;void 0===(h=f[u++])&&t("Bad block header in flate stream"),d|=h<<8,void 0===(h=f[u++])&&t("Bad block header in flate stream");var l=h;void 0===(h=f[u++])&&t("Bad block header in flate stream"),l|=h<<8,l!=(65535&~d)&&t("Bad uncompressed block length in flate stream"),this.codeBuf=0,this.codeSize=0;var c=this.bufferLength,p=this.ensureBuffer(c+d),g=c+d;this.bufferLength=g;for(var b=c;b<g;++b){if(void 0===(h=f[u++])){this.eof=!0;break}p[b]=h}return void(this.bytesPos=u)}var y,v;if(1==o)y=n,v=a;else if(2==o){for(var m=this.getBits(5)+257,w=this.getBits(5)+1,x=this.getBits(4)+4,B=Array(r.length),I=0;I<x;)B[r[I++]]=this.getBits(3);for(var k=this.generateHuffmanTable(B),A=0,I=0,P=m+w,M=new Array(P);I<P;){var S=this.getCode(k);16==S?e(this,M,2,3,A):17==S?e(this,M,3,3,A=0):18==S?e(this,M,7,11,A=0):M[I++]=A=S}y=this.generateHuffmanTable(M.slice(0,m)),v=this.generateHuffmanTable(M.slice(m,P))}else t("Unknown block type in flate stream");for(var p=this.buffer,U=p?p.length:0,G=this.bufferLength;;){var C=this.getCode(y);if(C<256)G+1>=U&&(p=this.ensureBuffer(G+1),U=p.length),p[G++]=C;else{if(256==C)return void(this.bufferLength=G);C-=257,C=i[C];var _=C>>16;_>0&&(_=this.getBits(_));var A=(65535&C)+_;C=this.getCode(v),C=s[C],_=C>>16,_>0&&(_=this.getBits(_));var D=(65535&C)+_;G+A>=U&&(p=this.ensureBuffer(G+A),U=p.length);for(var T=0;T<A;++T,++G)p[G]=p[G-D]}}},e}(),g=function(){function t(){n()(this,t),this.isPNG=!0,this.pos=8,this.palette=[],this.imageData=[],this.transparency={},this.animation=null,this.text={}}return o()(t,[{key:"loadPNG",value:function(t){var e,r,i,s,n,a,o,h,f,u,d,l,c,p;for(this.isPNG=!0,this.pos=8,this.palette=[],this.imgData=[],this.transparency={},this.animation=null,this.text={},n=null,this.data=t;;){switch(e=this.readUInt32(),f=function(){var t,e;for(e=[],a=t=0;t<4;a=++t)e.push(String.fromCharCode(this.data[this.pos++]));return e}.call(this).join("")){case"IHDR":this.width=this.readUInt32(),this.height=this.readUInt32(),this.bits=this.data[this.pos++],this.colorType=this.data[this.pos++],this.compressionMethod=this.data[this.pos++],this.filterMethod=this.data[this.pos++],this.interlaceMethod=this.data[this.pos++];break;case"acTL":this.animation={numFrames:this.readUInt32(),numPlays:this.readUInt32()||1/0,frames:[]};break;case"PLTE":this.palette=this.read(e);break;case"fcTL":n&&this.animation.frames.push(n),this.pos+=4,n={width:this.readUInt32(),height:this.readUInt32(),xOffset:this.readUInt32(),yOffset:this.readUInt32()},s=this.readUInt16(),i=this.readUInt16()||100,n.delay=1e3*s/i,n.disposeOp=this.data[this.pos++],n.blendOp=this.data[this.pos++],n.data=[];break;case"IDAT":case"fdAT":for("fdAT"===f&&(this.pos+=4,e-=4),t=(null!=n?n.data:void 0)||this.imgData,a=l=0;0<=e?l<e:l>e;a=0<=e?++l:--l)t.push(this.data[this.pos++]);break;case"tRNS":switch(this.transparency={},this.colorType){case 3:if(this.transparency.indexed=this.read(e),(u=255-this.transparency.indexed.length)>0)for(a=c=0;0<=u?c<u:c>u;a=0<=u?++c:--c)this.transparency.indexed.push(255);break;case 0:this.transparency.grayscale=this.read(e)[0];break;case 2:this.transparency.rgb=this.read(e)}break;case"tEXt":d=this.read(e),o=d.indexOf(0),h=String.fromCharCode.apply(String,d.slice(0,o)),this.text[h]=String.fromCharCode.apply(String,d.slice(o+1));break;case"IEND":return n&&this.animation.frames.push(n),this.colors=function(){switch(this.colorType){case 0:case 3:case 4:return 1;case 2:case 6:return 3}}.call(this),this.hasAlphaChannel=4===(p=this.colorType)||6===p,r=this.colors+(this.hasAlphaChannel?1:0),this.pixelBitlength=this.bits*r,this.colorSpace=function(){switch(this.colors){case 1:return"DeviceGray";case 3:return"DeviceRGB"}}.call(this),void(this.imgData=new Uint8Array(this.imgData));default:this.pos+=e}if(this.pos+=4,this.pos>this.data.length)return void(this.isPNG=!1)}}},{key:"readUInt32",value:function(){var t,e,r,i;return t=this.data[this.pos++]<<24,e=this.data[this.pos++]<<16,r=this.data[this.pos++]<<8,i=this.data[this.pos++],t|e|r|i}},{key:"decodePixels",value:function(t){var e,r,i,s,n,a,o,h,f,u,d,l,c,g,b,y,v,m,w,x,B,I,k;if(null!=t&&void 0!=t||(t=this.imgData),0===t.length)return new Uint8Array(0);for(t=new p(t),t=t.getBytes(),l=this.pixelBitlength/8,y=l*this.width,c=new Uint8Array(y*this.height),a=t.length,b=0,g=0,r=0;g<a;){switch(t[g++]){case 0:for(s=w=0;w<y;s=w+=1)c[r++]=t[g++];break;case 1:for(s=x=0;x<y;s=x+=1)e=t[g++],n=s<l?0:c[r-l],c[r++]=(e+n)%256;break;case 2:for(s=B=0;B<y;s=B+=1)e=t[g++],i=(s-s%l)/l,v=b&&c[(b-1)*y+i*l+s%l],c[r++]=(v+e)%256;break;case 3:for(s=I=0;I<y;s=I+=1)e=t[g++],i=(s-s%l)/l,n=s<l?0:c[r-l],v=b&&c[(b-1)*y+i*l+s%l],c[r++]=(e+Math.floor((n+v)/2))%256;break;case 4:for(s=k=0;k<y;s=k+=1)e=t[g++],i=(s-s%l)/l,n=s<l?0:c[r-l],0===b?v=m=0:(v=c[(b-1)*y+i*l+s%l],m=i&&c[(b-1)*y+(i-1)*l+s%l]),o=n+v-m,h=Math.abs(o-n),u=Math.abs(o-v),d=Math.abs(o-m),f=h<=u&&h<=d?n:u<=d?v:m,c[r++]=(e+f)%256;break;default:throw new Error("Invalid filter algorithm: "+t[g-1])}b++}return c}},{key:"getDecodeInt16",value:function(){return new Int16Array(this.decodePixels().buffer)}},{key:"getDecodeInt8",value:function(){return new Int8Array(this.decodePixels().buffer)}}]),t}()},Y4K9:function(t,e,r){function i(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}var s=r("ZFR3");t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},Z60a:function(t,e){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},ZFR3:function(t,e){function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},kAgk:function(t,e){function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},pwgQ:function(t,e,r){function i(t){if(Array.isArray(t))return s(t)}var s=r("ZFR3");t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},rzQm:function(t,e,r){function i(t){return s(t)||n(t)||a(t)||o()}var s=r("pwgQ"),n=r("uJO0"),a=r("Y4K9"),o=r("kAgk");t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},uJO0:function(t,e){function r(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports}});