/*
 * @Date         : 2022-03-29 09:43:24
 * @Description  : 注释
 * @LastEditTime : 2022-06-22 11:49:43
 * @LastEditors  : chen wei
 * @Version      : 1.0
 */

var g_supense = true;
//var g_discard = false;

function IMGAnalysis2To1({ buffer, width, height, isRGB }) {
    //TODO:IMGAnalysis2是有灰度rgba4色组成，老的解析是只有2色
    //TODO:IMGAnalysis2是有RGB图rgba4色组成，老的解析是只有3色
    let isIMGAnalysis2 = (width * height * 4 / buffer.byteLength) == 1
    if (isIMGAnalysis2 && !isRGB) {
        let bufferToArray = [...(new Uint8Array(buffer))].filter((v, i) => (i % 4 == 0) || i % 4 == 3)
        buffer = new Uint8Array(bufferToArray).buffer;
    }
    return { buffer, isIMGAnalysis2 }
}
/**
 * 解析PNG
 */
var PNG = function () { /*zlib*/
    var DecodeStream = (function () {
        function constructor() {
            this.pos = 0;
            this.bufferLength = 0;
            this.eof = false;
            this.buffer = null;
        }

        constructor.prototype = {
            ensureBuffer: function decodestream_ensureBuffer(requested) {
                var buffer = this.buffer;
                var current = buffer ? buffer.byteLength : 0;
                if (requested < current)
                    return buffer;
                var size = 512;
                while (size < requested)
                    size <<= 1;
                var buffer2 = new Uint8Array(size);
                for (var i = 0; i < current; ++i)
                    buffer2[i] = buffer[i];
                return this.buffer = buffer2;
            },
            getByte: function decodestream_getByte() {
                var pos = this.pos;
                while (this.bufferLength <= pos) {
                    if (this.eof)
                        return null;
                    this.readBlock();
                }
                return this.buffer[this.pos++];
            },
            getBytes: function decodestream_getBytes(length) {
                var pos = this.pos;

                if (length) {
                    this.ensureBuffer(pos + length);
                    var end = pos + length;

                    while (!this.eof && this.bufferLength < end)
                        this.readBlock();

                    var bufEnd = this.bufferLength;
                    if (end > bufEnd)
                        end = bufEnd;
                } else {
                    while (!this.eof)
                        this.readBlock();

                    var end = this.bufferLength;
                }

                this.pos = end;
                return this.buffer.subarray(pos, end);
            },
            lookChar: function decodestream_lookChar() {
                var pos = this.pos;
                while (this.bufferLength <= pos) {
                    if (this.eof)
                        return null;
                    this.readBlock();
                }
                return String.fromCharCode(this.buffer[this.pos]);
            },
            getChar: function decodestream_getChar() {
                var pos = this.pos;
                while (this.bufferLength <= pos) {
                    if (this.eof)
                        return null;
                    this.readBlock();
                }
                return String.fromCharCode(this.buffer[this.pos++]);
            },
            makeSubStream: function decodestream_makeSubstream(start, length, dict) {
                var end = start + length;
                while (this.bufferLength <= end && !this.eof)
                    this.readBlock();
                return new Stream(this.buffer, start, length, dict);
            },
            skip: function decodestream_skip(n) {
                if (!n)
                    n = 1;
                this.pos += n;
            },
            reset: function decodestream_reset() {
                this.pos = 0;
            }
        };

        return constructor;
    })();
    var FlateStream = (function () {
        var codeLenCodeMap = new Uint32Array([
            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15
        ]);

        var lengthDecode = new Uint32Array([
            0x00003, 0x00004, 0x00005, 0x00006, 0x00007, 0x00008, 0x00009, 0x0000a,
            0x1000b, 0x1000d, 0x1000f, 0x10011, 0x20013, 0x20017, 0x2001b, 0x2001f,
            0x30023, 0x3002b, 0x30033, 0x3003b, 0x40043, 0x40053, 0x40063, 0x40073,
            0x50083, 0x500a3, 0x500c3, 0x500e3, 0x00102, 0x00102, 0x00102
        ]);

        var distDecode = new Uint32Array([
            0x00001, 0x00002, 0x00003, 0x00004, 0x10005, 0x10007, 0x20009, 0x2000d,
            0x30011, 0x30019, 0x40021, 0x40031, 0x50041, 0x50061, 0x60081, 0x600c1,
            0x70101, 0x70181, 0x80201, 0x80301, 0x90401, 0x90601, 0xa0801, 0xa0c01,
            0xb1001, 0xb1801, 0xc2001, 0xc3001, 0xd4001, 0xd6001
        ]);

        var fixedLitCodeTab = [new Uint32Array([
            0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c0,
            0x70108, 0x80060, 0x80020, 0x900a0, 0x80000, 0x80080, 0x80040, 0x900e0,
            0x70104, 0x80058, 0x80018, 0x90090, 0x70114, 0x80078, 0x80038, 0x900d0,
            0x7010c, 0x80068, 0x80028, 0x900b0, 0x80008, 0x80088, 0x80048, 0x900f0,
            0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c8,
            0x7010a, 0x80064, 0x80024, 0x900a8, 0x80004, 0x80084, 0x80044, 0x900e8,
            0x70106, 0x8005c, 0x8001c, 0x90098, 0x70116, 0x8007c, 0x8003c, 0x900d8,
            0x7010e, 0x8006c, 0x8002c, 0x900b8, 0x8000c, 0x8008c, 0x8004c, 0x900f8,
            0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c4,
            0x70109, 0x80062, 0x80022, 0x900a4, 0x80002, 0x80082, 0x80042, 0x900e4,
            0x70105, 0x8005a, 0x8001a, 0x90094, 0x70115, 0x8007a, 0x8003a, 0x900d4,
            0x7010d, 0x8006a, 0x8002a, 0x900b4, 0x8000a, 0x8008a, 0x8004a, 0x900f4,
            0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cc,
            0x7010b, 0x80066, 0x80026, 0x900ac, 0x80006, 0x80086, 0x80046, 0x900ec,
            0x70107, 0x8005e, 0x8001e, 0x9009c, 0x70117, 0x8007e, 0x8003e, 0x900dc,
            0x7010f, 0x8006e, 0x8002e, 0x900bc, 0x8000e, 0x8008e, 0x8004e, 0x900fc,
            0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c2,
            0x70108, 0x80061, 0x80021, 0x900a2, 0x80001, 0x80081, 0x80041, 0x900e2,
            0x70104, 0x80059, 0x80019, 0x90092, 0x70114, 0x80079, 0x80039, 0x900d2,
            0x7010c, 0x80069, 0x80029, 0x900b2, 0x80009, 0x80089, 0x80049, 0x900f2,
            0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900ca,
            0x7010a, 0x80065, 0x80025, 0x900aa, 0x80005, 0x80085, 0x80045, 0x900ea,
            0x70106, 0x8005d, 0x8001d, 0x9009a, 0x70116, 0x8007d, 0x8003d, 0x900da,
            0x7010e, 0x8006d, 0x8002d, 0x900ba, 0x8000d, 0x8008d, 0x8004d, 0x900fa,
            0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c6,
            0x70109, 0x80063, 0x80023, 0x900a6, 0x80003, 0x80083, 0x80043, 0x900e6,
            0x70105, 0x8005b, 0x8001b, 0x90096, 0x70115, 0x8007b, 0x8003b, 0x900d6,
            0x7010d, 0x8006b, 0x8002b, 0x900b6, 0x8000b, 0x8008b, 0x8004b, 0x900f6,
            0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900ce,
            0x7010b, 0x80067, 0x80027, 0x900ae, 0x80007, 0x80087, 0x80047, 0x900ee,
            0x70107, 0x8005f, 0x8001f, 0x9009e, 0x70117, 0x8007f, 0x8003f, 0x900de,
            0x7010f, 0x8006f, 0x8002f, 0x900be, 0x8000f, 0x8008f, 0x8004f, 0x900fe,
            0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c1,
            0x70108, 0x80060, 0x80020, 0x900a1, 0x80000, 0x80080, 0x80040, 0x900e1,
            0x70104, 0x80058, 0x80018, 0x90091, 0x70114, 0x80078, 0x80038, 0x900d1,
            0x7010c, 0x80068, 0x80028, 0x900b1, 0x80008, 0x80088, 0x80048, 0x900f1,
            0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c9,
            0x7010a, 0x80064, 0x80024, 0x900a9, 0x80004, 0x80084, 0x80044, 0x900e9,
            0x70106, 0x8005c, 0x8001c, 0x90099, 0x70116, 0x8007c, 0x8003c, 0x900d9,
            0x7010e, 0x8006c, 0x8002c, 0x900b9, 0x8000c, 0x8008c, 0x8004c, 0x900f9,
            0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c5,
            0x70109, 0x80062, 0x80022, 0x900a5, 0x80002, 0x80082, 0x80042, 0x900e5,
            0x70105, 0x8005a, 0x8001a, 0x90095, 0x70115, 0x8007a, 0x8003a, 0x900d5,
            0x7010d, 0x8006a, 0x8002a, 0x900b5, 0x8000a, 0x8008a, 0x8004a, 0x900f5,
            0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cd,
            0x7010b, 0x80066, 0x80026, 0x900ad, 0x80006, 0x80086, 0x80046, 0x900ed,
            0x70107, 0x8005e, 0x8001e, 0x9009d, 0x70117, 0x8007e, 0x8003e, 0x900dd,
            0x7010f, 0x8006e, 0x8002e, 0x900bd, 0x8000e, 0x8008e, 0x8004e, 0x900fd,
            0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c3,
            0x70108, 0x80061, 0x80021, 0x900a3, 0x80001, 0x80081, 0x80041, 0x900e3,
            0x70104, 0x80059, 0x80019, 0x90093, 0x70114, 0x80079, 0x80039, 0x900d3,
            0x7010c, 0x80069, 0x80029, 0x900b3, 0x80009, 0x80089, 0x80049, 0x900f3,
            0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900cb,
            0x7010a, 0x80065, 0x80025, 0x900ab, 0x80005, 0x80085, 0x80045, 0x900eb,
            0x70106, 0x8005d, 0x8001d, 0x9009b, 0x70116, 0x8007d, 0x8003d, 0x900db,
            0x7010e, 0x8006d, 0x8002d, 0x900bb, 0x8000d, 0x8008d, 0x8004d, 0x900fb,
            0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c7,
            0x70109, 0x80063, 0x80023, 0x900a7, 0x80003, 0x80083, 0x80043, 0x900e7,
            0x70105, 0x8005b, 0x8001b, 0x90097, 0x70115, 0x8007b, 0x8003b, 0x900d7,
            0x7010d, 0x8006b, 0x8002b, 0x900b7, 0x8000b, 0x8008b, 0x8004b, 0x900f7,
            0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900cf,
            0x7010b, 0x80067, 0x80027, 0x900af, 0x80007, 0x80087, 0x80047, 0x900ef,
            0x70107, 0x8005f, 0x8001f, 0x9009f, 0x70117, 0x8007f, 0x8003f, 0x900df,
            0x7010f, 0x8006f, 0x8002f, 0x900bf, 0x8000f, 0x8008f, 0x8004f, 0x900ff
        ]), 9];

        var fixedDistCodeTab = [new Uint32Array([
            0x50000, 0x50010, 0x50008, 0x50018, 0x50004, 0x50014, 0x5000c, 0x5001c,
            0x50002, 0x50012, 0x5000a, 0x5001a, 0x50006, 0x50016, 0x5000e, 0x00000,
            0x50001, 0x50011, 0x50009, 0x50019, 0x50005, 0x50015, 0x5000d, 0x5001d,
            0x50003, 0x50013, 0x5000b, 0x5001b, 0x50007, 0x50017, 0x5000f, 0x00000
        ]), 5];

        function error(e) {
            throw new Error(e)
        }

        function constructor(bytes) {
            //var bytes = stream.getBytes();
            var bytesPos = 0;

            var cmf = bytes[bytesPos++];
            var flg = bytes[bytesPos++];
            if (cmf == -1 || flg == -1)
                error('Invalid header in flate stream');
            if ((cmf & 0x0f) != 0x08)
                error('Unknown compression method in flate stream');
            if ((((cmf << 8) + flg) % 31) != 0)
                error('Bad FCHECK in flate stream');
            if (flg & 0x20)
                error('FDICT bit set in flate stream');

            this.bytes = bytes;
            this.bytesPos = bytesPos;

            this.codeSize = 0;
            this.codeBuf = 0;

            DecodeStream.call(this);
        }

        constructor.prototype = Object.create(DecodeStream.prototype);

        constructor.prototype.getBits = function (bits) {
            var codeSize = this.codeSize;
            var codeBuf = this.codeBuf;
            var bytes = this.bytes;
            var bytesPos = this.bytesPos;

            var b;
            while (codeSize < bits) {
                if (typeof (b = bytes[bytesPos++]) == 'undefined')
                    error('Bad encoding in flate stream');
                codeBuf |= b << codeSize;
                codeSize += 8;
            }
            b = codeBuf & ((1 << bits) - 1);
            this.codeBuf = codeBuf >> bits;
            this.codeSize = codeSize -= bits;
            this.bytesPos = bytesPos;
            return b;
        };

        constructor.prototype.getCode = function (table) {
            var codes = table[0];
            var maxLen = table[1];
            var codeSize = this.codeSize;
            var codeBuf = this.codeBuf;
            var bytes = this.bytes;
            var bytesPos = this.bytesPos;

            while (codeSize < maxLen) {
                var b;
                if (typeof (b = bytes[bytesPos++]) == 'undefined')
                    error('Bad encoding in flate stream');
                codeBuf |= (b << codeSize);
                codeSize += 8;
            }
            var code = codes[codeBuf & ((1 << maxLen) - 1)];
            var codeLen = code >> 16;
            var codeVal = code & 0xffff;
            if (codeSize == 0 || codeSize < codeLen || codeLen == 0)
                error('Bad encoding in flate stream');
            this.codeBuf = (codeBuf >> codeLen);
            this.codeSize = (codeSize - codeLen);
            this.bytesPos = bytesPos;
            return codeVal;
        };

        constructor.prototype.generateHuffmanTable = function (lengths) {
            var n = lengths.length;

            // find max code length
            var maxLen = 0;
            for (var i = 0; i < n; ++i) {
                if (lengths[i] > maxLen)
                    maxLen = lengths[i];
            }

            // build the table
            var size = 1 << maxLen;
            var codes = new Uint32Array(size);
            for (var len = 1, code = 0, skip = 2;
                len <= maxLen;
                ++len, code <<= 1, skip <<= 1) {
                for (var val = 0; val < n; ++val) {
                    if (lengths[val] == len) {
                        // bit-reverse the code
                        var code2 = 0;
                        var t = code;
                        for (var i = 0; i < len; ++i) {
                            code2 = (code2 << 1) | (t & 1);
                            t >>= 1;
                        }

                        // fill the table entries
                        for (var i = code2; i < size; i += skip)
                            codes[i] = (len << 16) | val;

                        ++code;
                    }
                }
            }

            return [codes, maxLen];
        };

        constructor.prototype.readBlock = function () {
            function repeat(stream, array, len, offset, what) {
                var repeat = stream.getBits(len) + offset;
                while (repeat-- > 0)
                    array[i++] = what;
            }

            // read block header
            var hdr = this.getBits(3);
            if (hdr & 1)
                this.eof = true;
            hdr >>= 1;

            if (hdr == 0) { // uncompressed block
                var bytes = this.bytes;
                var bytesPos = this.bytesPos;
                var b;

                if (typeof (b = bytes[bytesPos++]) == 'undefined')
                    error('Bad block header in flate stream');
                var blockLen = b;
                if (typeof (b = bytes[bytesPos++]) == 'undefined')
                    error('Bad block header in flate stream');
                blockLen |= (b << 8);
                if (typeof (b = bytes[bytesPos++]) == 'undefined')
                    error('Bad block header in flate stream');
                var check = b;
                if (typeof (b = bytes[bytesPos++]) == 'undefined')
                    error('Bad block header in flate stream');
                check |= (b << 8);
                if (check != (~blockLen & 0xffff))
                    error('Bad uncompressed block length in flate stream');

                this.codeBuf = 0;
                this.codeSize = 0;

                var bufferLength = this.bufferLength;
                var buffer = this.ensureBuffer(bufferLength + blockLen);
                var end = bufferLength + blockLen;
                this.bufferLength = end;
                for (var n = bufferLength; n < end; ++n) {
                    if (typeof (b = bytes[bytesPos++]) == 'undefined') {
                        this.eof = true;
                        break;
                    }
                    buffer[n] = b;
                }
                this.bytesPos = bytesPos;
                return;
            }

            var litCodeTable;
            var distCodeTable;
            if (hdr == 1) { // compressed block, fixed codes
                litCodeTable = fixedLitCodeTab;
                distCodeTable = fixedDistCodeTab;
            } else if (hdr == 2) { // compressed block, dynamic codes
                var numLitCodes = this.getBits(5) + 257;
                var numDistCodes = this.getBits(5) + 1;
                var numCodeLenCodes = this.getBits(4) + 4;

                // build the code lengths code table
                var codeLenCodeLengths = Array(codeLenCodeMap.length);
                var i = 0;
                while (i < numCodeLenCodes)
                    codeLenCodeLengths[codeLenCodeMap[i++]] = this.getBits(3);
                var codeLenCodeTab = this.generateHuffmanTable(codeLenCodeLengths);

                // build the literal and distance code tables
                var len = 0;
                var i = 0;
                var codes = numLitCodes + numDistCodes;
                var codeLengths = new Array(codes);
                while (i < codes) {
                    var code = this.getCode(codeLenCodeTab);
                    if (code == 16) {
                        repeat(this, codeLengths, 2, 3, len);
                    } else if (code == 17) {
                        repeat(this, codeLengths, 3, 3, len = 0);
                    } else if (code == 18) {
                        repeat(this, codeLengths, 7, 11, len = 0);
                    } else {
                        codeLengths[i++] = len = code;
                    }
                }

                litCodeTable =
                    this.generateHuffmanTable(codeLengths.slice(0, numLitCodes));
                distCodeTable =
                    this.generateHuffmanTable(codeLengths.slice(numLitCodes, codes));
            } else {
                error('Unknown block type in flate stream');
            }

            var buffer = this.buffer;
            var limit = buffer ? buffer.length : 0;
            var pos = this.bufferLength;
            while (true) {
                var code1 = this.getCode(litCodeTable);
                if (code1 < 256) {
                    if (pos + 1 >= limit) {
                        buffer = this.ensureBuffer(pos + 1);
                        limit = buffer.length;
                    }
                    buffer[pos++] = code1;
                    continue;
                }
                if (code1 == 256) {
                    this.bufferLength = pos;
                    return;
                }
                code1 -= 257;
                code1 = lengthDecode[code1];
                var code2 = code1 >> 16;
                if (code2 > 0)
                    code2 = this.getBits(code2);
                var len = (code1 & 0xffff) + code2;
                code1 = this.getCode(distCodeTable);
                code1 = distDecode[code1];
                code2 = code1 >> 16;
                if (code2 > 0)
                    code2 = this.getBits(code2);
                var dist = (code1 & 0xffff) + code2;
                if (pos + len >= limit) {
                    buffer = this.ensureBuffer(pos + len);
                    limit = buffer.length;
                }
                for (var k = 0; k < len; ++k, ++pos)
                    buffer[pos] = buffer[pos - dist];
            }
        };

        return constructor;
    })();
    /*png*/
    var PNG = (function () {
        function PNG() { }
        PNG.prototype.Load = function (data) {
            var chunkSize, colors, delayDen, delayNum, frame, i, index, key, section, short, text, _i, _j, _ref;
            this.bPng = true;
            this.pos = 8;
            this.palette = [];
            this.imgData = [];
            this.transparency = {};
            this.animation = null;
            this.text = {};
            frame = null;
            this.data = data;
            while (true) {
                chunkSize = this.readUInt32();
                section = ((function () {
                    var _i, _results;
                    _results = [];
                    for (i = _i = 0; _i < 4; i = ++_i) {
                        _results.push(String.fromCharCode(this.data[this.pos++]));
                    }
                    return _results;
                }).call(this)).join('');
                switch (section) {
                    case 'IHDR':
                        this.width = this.readUInt32();
                        this.height = this.readUInt32();
                        this.bits = this.data[this.pos++];
                        this.colorType = this.data[this.pos++];
                        this.compressionMethod = this.data[this.pos++];
                        this.filterMethod = this.data[this.pos++];
                        this.interlaceMethod = this.data[this.pos++];
                        break;
                    case 'acTL':
                        this.animation = {
                            numFrames: this.readUInt32(),
                            numPlays: this.readUInt32() || Infinity,
                            frames: []
                        };
                        break;
                    case 'PLTE':
                        this.palette = this.read(chunkSize);
                        break;
                    case 'fcTL':
                        if (frame) {
                            this.animation.frames.push(frame);
                        }
                        this.pos += 4;
                        frame = {
                            width: this.readUInt32(),
                            height: this.readUInt32(),
                            xOffset: this.readUInt32(),
                            yOffset: this.readUInt32()
                        };
                        delayNum = this.readUInt16();
                        delayDen = this.readUInt16() || 100;
                        frame.delay = 1000 * delayNum / delayDen;
                        frame.disposeOp = this.data[this.pos++];
                        frame.blendOp = this.data[this.pos++];
                        frame.data = [];
                        break;
                    case 'IDAT':
                    case 'fdAT':

                        if (section === 'fdAT') {
                            this.pos += 4;
                            chunkSize -= 4;
                        }
                        data = (frame != null ? frame.data : void 0) || this.imgData;
                        for (i = _i = 0; 0 <= chunkSize ? _i < chunkSize : _i > chunkSize; i = 0 <= chunkSize ? ++_i : --_i) {
                            data.push(this.data[this.pos++]);
                        }
                        break;
                    case 'tRNS':
                        this.transparency = {};
                        switch (this.colorType) {
                            case 3:
                                this.transparency.indexed = this.read(chunkSize);
                                short = 255 - this.transparency.indexed.length;
                                if (short > 0) {
                                    for (i = _j = 0; 0 <= short ? _j < short : _j > short; i = 0 <= short ? ++_j : --_j) {
                                        this.transparency.indexed.push(255);
                                    }
                                }
                                break;
                            case 0:
                                this.transparency.grayscale = this.read(chunkSize)[0];
                                break;
                            case 2:
                                this.transparency.rgb = this.read(chunkSize);
                        }
                        break;
                    case 'tEXt':
                        text = this.read(chunkSize);
                        index = text.indexOf(0);
                        key = String.fromCharCode.apply(String, text.slice(0, index));
                        this.text[key] = String.fromCharCode.apply(String, text.slice(index + 1));
                        break;
                    case 'IEND':
                        if (frame) {
                            this.animation.frames.push(frame);
                        }
                        this.colors = (function () {
                            switch (this.colorType) {
                                case 0:
                                case 3:
                                case 4:
                                    return 1;
                                case 2:
                                case 6:
                                    return 3;
                            }
                        }).call(this);
                        this.hasAlphaChannel = (_ref = this.colorType) === 4 || _ref === 6;
                        colors = this.colors + (this.hasAlphaChannel ? 1 : 0);
                        this.pixelBitlength = this.bits * colors;
                        this.colorSpace = (function () {
                            switch (this.colors) {
                                case 1:
                                    return 'DeviceGray';
                                case 3:
                                    return 'DeviceRGB';
                            }
                        }).call(this);
                        this.imgData = new Uint8Array(this.imgData);
                        return;
                    default:
                        this.pos += chunkSize;
                }
                this.pos += 4;
                if (this.pos > this.data.length) {/*非png*/
                    this.bPng = false;
                    return;
                    //throw new Error("Incomplete or corrupt PNG file");
                }
            }
        };
        PNG.prototype.read = function (bytes) {
            var i, _i, _results;
            _results = [];
            for (i = _i = 0; 0 <= bytes ? _i < bytes : _i > bytes; i = 0 <= bytes ? ++_i : --_i) {
                _results.push(this.data[this.pos++]);
            }
            return _results;
        };
        PNG.prototype.readUInt32 = function () {
            var b1, b2, b3, b4;
            b1 = this.data[this.pos++] << 24;
            b2 = this.data[this.pos++] << 16;
            b3 = this.data[this.pos++] << 8;
            b4 = this.data[this.pos++];
            return b1 | b2 | b3 | b4;
        };
        PNG.prototype.readUInt16 = function () {
            var b1, b2;
            b1 = this.data[this.pos++] << 8;
            b2 = this.data[this.pos++];
            return b1 | b2;
        };
        PNG.prototype.decodePixels = function (data) {
            var byte, c, col, i, left, length, p, pa, paeth, pb, pc, pixelBytes, pixels, pos, row, scanlineLength, upper, upperLeft, _i, _j, _k, _l, _m;
            if (data == null || data == undefined) {
                data = this.imgData;
            }
            if (data.length === 0) {
                return new Uint8Array(0);
            }
            data = new FlateStream(data);
            data = data.getBytes();
            pixelBytes = this.pixelBitlength / 8;
            scanlineLength = pixelBytes * this.width;
            pixels = new Uint8Array(scanlineLength * this.height);
            length = data.length;
            row = 0;
            pos = 0;
            c = 0;
            while (pos < length) {
                var index = data[pos++];
                switch (index) {
                    case 0:
                        for (i = _i = 0; _i < scanlineLength; i = _i += 1) {
                            pixels[c++] = data[pos++];
                        }
                        break;
                    case 1:
                        for (i = _j = 0; _j < scanlineLength; i = _j += 1) {
                            byte = data[pos++];
                            left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
                            pixels[c++] = (byte + left) % 256;
                        }
                        break;
                    case 2:
                        for (i = _k = 0; _k < scanlineLength; i = _k += 1) {
                            byte = data[pos++];
                            col = (i - (i % pixelBytes)) / pixelBytes;
                            upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
                            pixels[c++] = (upper + byte) % 256;
                        }
                        break;
                    case 3:
                        for (i = _l = 0; _l < scanlineLength; i = _l += 1) {
                            byte = data[pos++];
                            col = (i - (i % pixelBytes)) / pixelBytes;
                            left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
                            upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
                            pixels[c++] = (byte + Math.floor((left + upper) / 2)) % 256;
                        }
                        break;
                    case 4:
                        for (i = _m = 0; _m < scanlineLength; i = _m += 1) {
                            byte = data[pos++];
                            col = (i - (i % pixelBytes)) / pixelBytes;
                            left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
                            if (row === 0) {
                                upper = upperLeft = 0;
                            } else {
                                upper = pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
                                upperLeft = col && pixels[(row - 1) * scanlineLength + (col - 1) * pixelBytes + (i % pixelBytes)];
                            }
                            p = left + upper - upperLeft;
                            pa = Math.abs(p - left);
                            pb = Math.abs(p - upper);
                            pc = Math.abs(p - upperLeft);
                            if (pa <= pb && pa <= pc) {
                                paeth = left;
                            } else if (pb <= pc) {
                                paeth = upper;
                            } else {
                                paeth = upperLeft;
                            }
                            pixels[c++] = (byte + paeth) % 256;
                        }
                        break;
                    default:
                        throw new Error("Invalid filter algorithm: " + data[pos - 1]);
                }
                row++;
            }
            return pixels;
        };
        PNG.prototype.Uint8_Uint16 = function (buff) {
            if (!(buff instanceof Uint8Array)) return;
            var uInt16Buff = new Uint16Array((buff.length >> 1));
            for (var i = 0; i < uInt16Buff.length; i++) {

                var index = i * 2;
                var pix1 = buff[index],
                    pix2 = buff[index + 1];
                uInt16Buff[i] = (pix2 << 8) | pix1;
            }
            return uInt16Buff;
        };
        PNG.prototype.GetDecodeInt16 = function () {
            // console.log(this.decodePixels().buffer.byteLength)
            return new Int16Array(this.decodePixels().buffer);
        };
        PNG.prototype.GetDecodeInt8 = function () {
            return new Int8Array(this.decodePixels().buffer);
        }
        return PNG;

    })();
    return PNG;
}();
/**
 * 请求PNG
 * @constructor
 */
function RequestPng() {
    var m_arrFirstStack = [];/*优先下载图像栈*/
    var m_arrDlStack = [];/*下载队列*/
    var m_requestAjax = {};/*下载中的ajax*/
    var m_firstIndex = 0;/*统计下载优先级*/
    var m_SeriesImages = {};/*序列里的图像*/

    this.PushSeriesDL = function (arrImages) {
        /*每个序列都维护一个下载数组*/
        arrImages.forEach(function (image) {
            var seriesuid = image.seriesuid;
            if (!m_SeriesImages.hasOwnProperty(seriesuid)) {
                m_SeriesImages[seriesuid] = [];
            }
            m_SeriesImages[seriesuid].push(image);
        });
    };
    this.StartDlSeriesImage = function (success, error) {
        for (var key in m_SeriesImages) {
            var arrImages = m_SeriesImages[key];
            arrImages.forEach(function (item) {
                RequestBinaryData(item, success, error);
            });
            delete m_SeriesImages[key];
            // console.log(m_SeriesImages[key]);
        }
    };
    this.ClearSeriesImage = function (arrImages) {
        /*删除请求队列*/
        arrImages.forEach(function (image) {
            var seriesuid = image.seriesuid;
            if (m_SeriesImages.hasOwnProperty(seriesuid)) {
                m_SeriesImages[seriesuid] = [];
            }
            /*停止浏览器中的队列下载*/
            for (var key in m_requestAjax) {
                var data = m_requestAjax[key];
                var xhr = data.xhr;
                var uid = data.seriesuid;
                if (xhr && uid === seriesuid) {
                    xhr.abort();
                    delete m_requestAjax[key];
                }
            }
        });
    }

    this.PushDL = function (arrItem, bFirst) {/*设置*/
        if (!(arrItem instanceof Array)) return;
        for (var i = 0; i < arrItem.length; i++) {
            if (bFirst) {
                m_arrFirstStack.push(arrItem[i]);
            } else {
                m_arrDlStack.push(arrItem[i]);
            }
        }
    }
    this.Clear = function () {
        m_arrDlStack = [];
        m_arrFirstStack = [];
        /*先停止所有的请求*/
        for (var key in m_requestAjax) {
            var data = m_requestAjax[key];
            var xhr = data.xhr;
            if (xhr) {
                xhr.abort();
                delete m_requestAjax[key];
            }
        }
        //  console.log(Object.keys(m_requestAjax).length);
        m_requestAjax = {};
    };
    this.StartDL = function (success, error) {/*启动下载*/
        var item;
        if (m_arrFirstStack.length > 0) {
            item = m_arrFirstStack[0];
            m_arrFirstStack.shift();
        }
        else if (m_arrDlStack.length > 0) {
            item = m_arrDlStack[0];
            m_arrDlStack.shift();
        } else {
            //   close();/*释然本线程所有的内存*/
            g_supense = true;
            return;
        };

        RequestBinaryData(item, isuccess, ierror);

        var that = this;
        function isuccess(buffer, citem) {
            success(buffer, citem);
            that.StartDL(success, error);
        }
        function ierror(e, citem) {
            error(e, citem);
            that.StartDL(success, error);
        }
    };
    this.DLAll = async function (success, error) {
        /*开始请求优先下载的图像*/
        if (m_arrFirstStack.length > 0) {
            m_firstIndex = 0;
            // m_arrFirstStack.forEach(function (item) {
            //     RequestBinaryData(item, isuccess, error);
            // });
            for (const item of m_arrFirstStack) {
                await RequestBinaryData(item, isuccess, error);
            }
        } else {
            // m_arrDlStack.forEach(function (item) {
            //     RequestBinaryData(item, success, error);
            // });
            for (const item of m_arrDlStack) {
                await RequestBinaryData(item, success, error);
            }
            m_arrDlStack = [];
        }


        function isuccess(response, item) {
            success(response, item);

            m_firstIndex++;
            if (m_firstIndex === m_arrFirstStack.length) {
                m_arrDlStack.forEach(function (item) {
                    RequestBinaryData(item, success, error);
                });
                m_arrFirstStack = [];
                m_arrDlStack = [];
            }

        }
    }
    var queue = new Queue(100)
    var RequestBinaryData = function (item, success, error) {
        return new Promise(async (resolve) => {
            if (!(item instanceof Object)) return;
            var xhr = new XMLHttpRequest();
            xhr.open("GET", item.url, true);
            xhr.responseType = "arraybuffer";
            await queue.pending(resolve)
            xhr.send();
            xhr.onreadystatechange = function () {
                if ((xhr.readyState === xhr.DONE || xhr.readyState === 2) && xhr.status === 200 && xhr.response) {
                    if (success instanceof Function) success(xhr.response, item);
                    queue.resolve(resolve)
                } else if (xhr.readyState === xhr.DONE && xhr.status !== 200) {
                    if (error instanceof Function) error({}, item);
                    queue.resolve(resolve)
                }
                /*删除xhr对象*/
                DelXhr(item.id);
            }
            xhr.onerror = function (e) {
                if (error instanceof Function) error(e, item);
                queue.resolve(resolve)
                /*删除xhr对象*/
                DelXhr(item.id);
            }

            m_requestAjax[item.id] = { seriesuid: item.seriesuid, xhr: xhr };/*保存该对象以便用于终止操作*/
        })
    };
    var DelXhr = function (id) {
        delete m_requestAjax[id];
    };
}

function Queue(limit) {
    this.limit = limit || 5
    this.count = 0
    this.resolveFunc = () => { }
}

Queue.prototype.pending = function (_resolve) {
    return new Promise((resolve) => {
        if (this.count < this.limit) {
            resolve()
            _resolve()
        } else {
            this.resolveFunc = resolve
        }
        // console.log(this.count, 'img')
        this.count += 1
    })
}

Queue.prototype.resolve = function (_resolve) {
    this.count -= 1
    this.resolveFunc()
    _resolve()
    // console.count('resolveImg')
}

/**
 * 图像请求，解码，合并
 */
!function () {
    new ImageTransfer();
}();

//var decondNumber = 0;

/**
 * 图像请求，解码，合并
 * @constructor
 */
function ImageTransfer() {
    //var that = self;
    //var self = this;
    var m_Png = new PNG();/*Png解码器*/
    var m_Dl = new RequestPng();/*下载器*/
    var m_arrStack = {};/*解码文件信息保存*/

    var MergeGrayData = function (mergeBuff, dcmWidth, buffer, buffWidth, buffHeight, index, row, col) {
        // console.log(buffWidth,buffHeight);
        if (mergeBuff == undefined || (typeof index != 'number')) return;
        var yScale = parseInt(index / col);
        var xScale = index % row;
        for (var y = 0; y < buffHeight; y++) {/*合并到总图像*/
            for (var x = 0; x < buffWidth; x++) {
                var idx = y * buffWidth + x;
                var pix = buffer[idx];
                var pos = dcmWidth * (y * col + yScale) + x * row + xScale;
                mergeBuff[pos] = pix;
            }
        }
        return mergeBuff;
    };
    var MergeRgbData = function (mergeBuff, dcmWidth, buffer, buffWidth, buffHeight, index, row, col) {
        for (var y = 0; y < buffHeight; y++) {/*合并到总图像*/
            for (var x = 0; x < buffWidth; x++) {
                var idx = (y * buffWidth + x) * 3;
                var pix0 = buffer[idx];
                var pix1 = buffer[idx + 1];
                var pix2 = buffer[idx + 2];
                var pos = (dcmWidth * (y * col + parseInt(index / col)) + x * row + (index % row)) * 3;
                mergeBuff[pos] = pix0;
                mergeBuff[pos + 1] = pix1;
                mergeBuff[pos + 2] = pix2;
            }
        }
    };
    var CreateOriginal = function (disw, dish, bRGB) {
        var destBuf;
        if (bRGB) {
            destBuf = new Uint8Array(disw * dish * 3);
        } else {
            destBuf = new Int16Array(disw * dish);
        }
        return destBuf;
    };
    var StartDlPng = function () {
        //if (g_supense) {
        //    g_supense = false;
        //m_Dl.StartDL(PngDlSuccess, function (e, item) {
        //    console.error('发现有一张图像下载异常!  ImageId:' + item.id);
        //});           
        // }

        m_Dl.DLAll(PngDlSuccess, function (e, item) {
            console.error('发现有一张图像下载异常!  ImageId:' + item.id);
        });
    };
    var StartDlSeriesPng = function () {
        m_Dl.StartDlSeriesImage(PngDlSuccess, function (e, item) {
            console.error('发现有一张图像下载异常!  ImageId:' + item.id);
        });
    };
    var PngDlSuccess = function (buffer, item) {
        // console.time('decode');
        if (item instanceof Object) {
            var undecode;
            var grayBuffer;
            const { dicomInfo: { isRGB }, id, dcmWidth, dcmHeight, bseries, bsave, brgb } = item
            if (bseries) {/*序列图像*/
                if (bsave) {/*需要解码保存到回去使用*/
                    //   console.log(++decondNumber);
                    undecode = new Uint8Array(buffer);
                    m_Png.Load(undecode);
                    if (brgb) {/*rgb*/
                        if (m_Png.bPng) {/*是png*/
                            grayBuffer = m_Png.decodePixels();
                        } else {
                            grayBuffer = undecode;
                        }

                    } else {/*其他序列*/
                        if (m_Png.bPng) {/*是png*/
                            grayBuffer = m_Png.GetDecodeInt16();
                        } else {
                            grayBuffer = new Int16Array(buffer);
                        }
                    }
                    const { width, height } = m_Png
                    const { buffer: _buffer, isIMGAnalysis2 } = IMGAnalysis2To1({
                        buffer: grayBuffer.buffer,
                        isRGB,
                        width,
                        height,
                    })
                    /*传真实数据回去*/
                    self.postMessage({
                        id,
                        buffer: _buffer,
                        width,
                        height,
                        bseries,
                        isRGB,
                        isIMGAnalysis2
                    }, [_buffer]);

                } else {
                    //console.log('未保存');
                    const { width, height } = m_Png
                    self.postMessage({
                        id,
                        width,
                        height,
                        bseries,
                        isRGB
                    });
                }

            } else {/*非序列*/
                var index = item.index;/*图像片序*/
                var ratio = item.ratio;/*放缩比率*/
                var isEightBits;
                undecode = new Uint8Array(buffer);
                m_Png.Load(undecode);
                if (8 == parseInt(item.bits)) {
                    grayBuffer = m_Png.GetDecodeInt8();
                    isEightBits = true;
                }
                else {
                    grayBuffer = m_Png.GetDecodeInt16();
                    isEightBits = false;
                }

                if (index == 0) {
                    var record = {};
                    record.id = id;
                    record.complete = 1;
                    record.total = ratio * ratio;
                    record.width = dcmWidth;
                    record.height = dcmHeight;
                    const { width, height } = m_Png
                    const { buffer: _buffer, isIMGAnalysis2 } = IMGAnalysis2To1({
                        buffer: grayBuffer.buffer,
                        isRGB,
                        width,
                        height,
                    })
                    self.postMessage({
                        id,
                        buffer: _buffer,
                        width,
                        height,
                        bseries,
                        isRGB,
                        isIMGAnalysis2
                    }, [_buffer]);

                    var mergeBuff = CreateOriginal(dcmWidth, dcmHeight, isEightBits);
                    record.mergebuffer = mergeBuff;
                    var decodebuffer = isEightBits ? m_Png.GetDecodeInt8() : m_Png.GetDecodeInt16();

                    MergeGrayData(record.mergebuffer, dcmWidth, decodebuffer, m_Png.width, m_Png.height, index, ratio, ratio);
                    m_arrStack[record.id] = record;/*保存*/

                } else {
                    var record = m_arrStack[id];
                    if (record != undefined || record != null) {
                        MergeGrayData(record.mergebuffer, record.width, grayBuffer, m_Png.width, m_Png.height, index, ratio, ratio);
                        record.complete++;
                        if (record.complete > (record.total - 1)) {/*发送合并完成的图像*/
                            const { width, height } = record
                            const { buffer: _buffer, isIMGAnalysis2 } = IMGAnalysis2To1({
                                buffer: record.mergebuffer.buffer,
                                isRGB,
                                width,
                                height,
                            })
                            self.postMessage({
                                id,
                                buffer: _buffer,
                                width,
                                height,
                                bseries,
                                isRGB,
                                isIMGAnalysis2
                                /*, progress: parseInt(record.complete / record.total * 100)*/
                            }, [_buffer]);

                            /*释放资源*/
                            delete m_arrStack[id];

                        } else {/*发送进度*/
                            // self.postMessage({
                            //     id,
                            //     buffer: null,
                            //     width: m_Png.width,
                            //     height: m_Png.height,
                            //     bseries,
                            //     isRGB,
                            //     progress: parseInt(record.complete / record.total * 100)
                            // });
                        }
                    }
                }
            }
        }
        // console.timeEnd('decode');
    };

    /*Main msg pro*/
    self.onmessage = function (e) {
        if (!(e instanceof Object)) return;
        var data = e.data;
        var type = data.type;
        // console.log(data);
        switch (type) {
            case 0: {/*在队列里加入新的下载图像*/
                var arrPriority = data.arrpriority;/*优先下载的图像*/
                var arrNormal = data.arrnormal;/*正常下载的图像*/
                m_Dl.PushDL(arrPriority, true);
                m_Dl.PushDL(arrNormal, false);
                StartDlPng();
            } break;
            case 1: {/*取消全部 重新下载新的任务*/
                //   decondNumber = 0;
                m_Dl.Clear();/*结束之前所有的下载任务*/
                var arrPriority = data.arrpriority;/*优先下载的图像*/
                var arrNormal = data.arrnormal;/*正常下载的图像*/
                m_Dl.PushDL(arrPriority, true);
                m_Dl.PushDL(arrNormal, false);
                StartDlPng();
            } break;
            case 2: {/*取消当前序列的下载图像，重新下载序列里的新图像*/
                var arrPriority = data.arrpriority;/*优先下载的图像*/
                m_Dl.ClearSeriesImage(arrPriority);
                m_Dl.PushSeriesDL(arrPriority);
                StartDlSeriesPng();
            } break;
            case 0: { } break;
            case 0: { } break;
            case 0: { } break;
            case 0: { } break;
            case 0: { } break;
            case 0: { } break;
            case 0: { } break;
            default: break;
        }
    };
}