"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var decbin_1 = tslib_1.__importDefault(require("./decbin"));
var bindec_1 = tslib_1.__importDefault(require("./bindec"));
exports.default = (function (str, keys) {
    var decText = str.split('').map(function (t) { return decbin_1.default(Number(keys[t])).padStart(5, '0'); }).join('');
    return bindec_1.default(decText).toString();
});
//# sourceMappingURL=decode.js.map