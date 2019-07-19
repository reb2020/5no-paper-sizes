"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var decbin_1 = tslib_1.__importDefault(require("./decbin"));
var bindec_1 = tslib_1.__importDefault(require("./bindec"));
exports.default = (function (str, keys) {
    var bstr = decbin_1.default(Number(str));
    var size = bstr.length;
    var p = Math.ceil(size / 5);
    var rez = [];
    bstr = bstr.padStart(p * 5, '0');
    for (var i = 0; i < p; i++) {
        rez.push(keys[bindec_1.default(bstr.substr(i * 5, 5))]);
    }
    return rez.join('');
});
//# sourceMappingURL=encode.js.map