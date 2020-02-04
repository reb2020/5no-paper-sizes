"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var iso_1 = tslib_1.__importDefault(require("./iso"));
var defaultParameters = { dpi: 300, type: 'mm', width: 0, height: 0 };
var PaperSizes = /** @class */ (function () {
    function PaperSizes(isoCode, options) {
        this.convert = {
            MillimetersToPoints: 2.83465,
            MillimetersToInches: 0.0393701,
            PointsToMillimeters: 0.352778,
            InchesToMillimeters: 25.4,
        };
        if (isoCode === null) {
            if (!options.width || options.width < 0) {
                throw new Error('Parameter width must be more than 0');
            }
            if (!options.height || options.height < 0) {
                throw new Error('Parameter height must be more than 0');
            }
        }
        else if (!Object.keys(iso_1.default).includes(isoCode)) {
            throw new Error("isoCode \"" + isoCode + "\" does not exists");
        }
        var width = options.width;
        var height = options.height;
        if (options.type === 'px' && isoCode !== null) {
            width = this.converter(iso_1.default[isoCode]['mm'][0], 'mm', 'px', options.dpi);
            height = this.converter(iso_1.default[isoCode]['mm'][1], 'mm', 'px', options.dpi);
        }
        else if (options.type !== 'px' && isoCode !== null) {
            width = iso_1.default[isoCode][options.type][0];
            height = iso_1.default[isoCode][options.type][1];
        }
        this.info = {
            dpi: options.dpi || 300,
            code: isoCode === null ? 'Custom' : isoCode,
            type: options.type,
            width: width,
            height: height,
        };
    }
    PaperSizes.prototype.converter = function (size, from, to, dpi) {
        if (from === to) {
            return size;
        }
        switch (from + "_" + to) {
            case 'mm_px':
                return Number(Math.round((size * dpi) / 25.4));
            case 'px_mm':
                return Number(Math.round((size * 25.4) / dpi));
            case 'in_px':
                return Number(Math.round((size * dpi)));
            case 'px_in':
                return Number(Number(size / dpi).toFixed(2));
            case 'pt_px':
                return Number(Math.round((size * dpi) / 73));
            case 'px_pt':
                return Number(Math.round((size * 73) / dpi));
            case 'mm_in':
                return Number(Number(size * this.convert.MillimetersToInches).toFixed(2));
            case 'in_mm':
                return Number(Number(size * this.convert.InchesToMillimeters).toFixed(2));
            case 'mm_pt':
                return Number(Math.round(size * this.convert.MillimetersToPoints));
            case 'pt_mm':
                return Number(Math.round(size * this.convert.PointsToMillimeters));
            default:
                throw new Error("converter from \"" + from + "\" to \"" + to + "\" does not exists");
        }
    };
    PaperSizes.prototype.widthToInches = function () {
        if (this.info.code !== 'Custom') {
            return iso_1.default[this.info.code]['in'][0];
        }
        return this.converter(this.info.width, this.info.type, 'in', this.info.dpi);
    };
    PaperSizes.prototype.widthToPoints = function () {
        if (this.info.code !== 'Custom') {
            return iso_1.default[this.info.code]['pt'][0];
        }
        return this.converter(this.info.width, this.info.type, 'pt', this.info.dpi);
    };
    PaperSizes.prototype.widthToMillimeters = function () {
        if (this.info.code !== 'Custom') {
            return iso_1.default[this.info.code]['mm'][0];
        }
        return this.converter(this.info.width, this.info.type, 'mm', this.info.dpi);
    };
    PaperSizes.prototype.widthToPixels = function () {
        return this.converter(this.info.width, this.info.type, 'px', this.info.dpi);
    };
    PaperSizes.prototype.heightToInches = function () {
        if (this.info.code !== 'Custom') {
            return iso_1.default[this.info.code]['in'][1];
        }
        return this.converter(this.info.height, this.info.type, 'in', this.info.dpi);
    };
    PaperSizes.prototype.heightToPoints = function () {
        if (this.info.code !== 'Custom') {
            return iso_1.default[this.info.code]['pt'][1];
        }
        return this.converter(this.info.height, this.info.type, 'pt', this.info.dpi);
    };
    PaperSizes.prototype.heightToMillimeters = function () {
        if (this.info.code !== 'Custom') {
            return iso_1.default[this.info.code]['mm'][1];
        }
        return this.converter(this.info.height, this.info.type, 'mm', this.info.dpi);
    };
    PaperSizes.prototype.heightToPixels = function () {
        return this.converter(this.info.height, this.info.type, 'px', this.info.dpi);
    };
    return PaperSizes;
}());
module.exports = function (isoCode, options) {
    if (options === void 0) { options = defaultParameters; }
    return new PaperSizes(isoCode, options);
};
