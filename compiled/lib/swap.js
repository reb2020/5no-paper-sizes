"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (data) { return Object.keys(data).reduce(function (newData, current) {
    newData[data[current]] = current;
    return newData;
}, {}); });
//# sourceMappingURL=swap.js.map