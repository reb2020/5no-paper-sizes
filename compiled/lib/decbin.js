"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (num) {
    if (num < 0) {
        num = 0xFFFFFFFF + num + 1;
    }
    return Number(num).toString(2);
});
//# sourceMappingURL=decbin.js.map