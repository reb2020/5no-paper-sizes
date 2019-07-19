import iso from './iso'
import PaperSizesInterface from './interface'

const defaultParameters: PaperSizesInterface.Options = { dpi: 300, type: 'mm', width: 0, height: 0 }

class PaperSizes {

    private convert: PaperSizesInterface.Convert = {
      MillimetersToPoints: 2.83465,
      MillimetersToInches: 0.0393701,
      PointsToMillimeters: 0.352778,
      InchesToMillimeters: 25.4,
    }

    private info: PaperSizesInterface.Info

    constructor(isoCode: string | null, options: PaperSizesInterface.Options) {
      if (isoCode === null) {
        if (!options.width || options.width < 0) {
          throw new Error('Parameter width must be more than 0')
        }
        
        if (!options.height || options.height < 0) {
          throw new Error('Parameter height must be more than 0')
        }
      } else if (!Object.keys(iso).includes(isoCode)) {
        throw new Error(`isoCode "${isoCode}" does not exists`)
      }

      let width: number = options.width
      let height: number = options.height

      if (options.type === 'px' && isoCode !== null) {
        width = this.converter(iso[isoCode]['mm'][0], 'mm', 'px', options.dpi)
        height = this.converter(iso[isoCode]['mm'][1], 'mm', 'px', options.dpi)
      } else if (options.type !== 'px' && isoCode !== null) {
        width = iso[isoCode][options.type][0]
        height = iso[isoCode][options.type][1]
      }

      this.info = {
        dpi: options.dpi || 300,
        code: isoCode === null ? 'Custom' : isoCode,
        type: options.type,
        width: width,
        height: height,
      }
    }

    private converter (size: number, from: PaperSizesInterface.TypeOfMeasure, to: PaperSizesInterface.TypeOfMeasure, dpi: number): number {
      if (from === to) {
        return size
      }

      switch (`${from}_${to}`) {
        case 'mm_px': 
          return Number(Math.round((size * dpi) / 25.4)) 
        case 'px_mm': 
          return Number(Math.round((size * 25.4) / dpi))
        case 'in_px': 
          return Number(Math.round((size * dpi))) 
        case 'px_in': 
          return Number(Number(size / dpi).toFixed(2))
        case 'pt_px': 
          return Number(Math.round((size * dpi) / 73)) 
        case 'px_pt': 
          return Number(Math.round((size * 73) / dpi))  
        case 'mm_in': 
          return Number(Number(size * this.convert.MillimetersToInches).toFixed(2))
        case 'in_mm': 
          return Number(Number(size * this.convert.InchesToMillimeters).toFixed(2))
        case 'mm_pt': 
          return Number(Math.round(size * this.convert.MillimetersToPoints)) 
        case 'pt_mm': 
          return Number(Math.round(size * this.convert.PointsToMillimeters))
        default: 
          throw new Error(`converter from "${from}" to "${to}" does not exists`)
      }
    }
    
    public widthToInches(): number {
      if (this.info.code !== 'Custom') {
        return iso[this.info.code]['in'][0]
      }
      return this.converter(this.info.width, this.info.type, 'in', this.info.dpi)
    }
    
    public widthToPoints(): number {
      if (this.info.code !== 'Custom') {
        return iso[this.info.code]['pt'][0]
      }
      return this.converter(this.info.width, this.info.type, 'pt', this.info.dpi)
    }
    
    public widthToMillimeters(): number {
      if (this.info.code !== 'Custom') {
        return iso[this.info.code]['mm'][0]
      }
      return this.converter(this.info.width, this.info.type, 'mm', this.info.dpi)
    }

    public widthToPixels(): number {
      return this.converter(this.info.width, this.info.type, 'px', this.info.dpi)
    }

    public heightToInches(): number {
      if (this.info.code !== 'Custom') {
        return iso[this.info.code]['in'][1]
      }
      return this.converter(this.info.height, this.info.type, 'in', this.info.dpi)
    }
    
    public heightToPoints(): number {
      if (this.info.code !== 'Custom') {
        return iso[this.info.code]['pt'][1]
      }
      return this.converter(this.info.height, this.info.type, 'pt', this.info.dpi)
    }
    
    public heightToMillimeters(): number {
      if (this.info.code !== 'Custom') {
        return iso[this.info.code]['mm'][1]
      }
      return this.converter(this.info.height, this.info.type, 'mm', this.info.dpi)
    }

    public heightToPixels(): number {
      return this.converter(this.info.height, this.info.type, 'px', this.info.dpi)
    }
}

module.exports = (isoCode: string | null, options: PaperSizesInterface.Options = defaultParameters) => new PaperSizes(isoCode, options)
