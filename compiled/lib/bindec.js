"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (binaryString) {
    binaryString = (binaryString + '').replace(/[^01]/gi, '');
    return parseInt(binaryString, 2);
});
//# sourceMappingURL=bindec.js.map