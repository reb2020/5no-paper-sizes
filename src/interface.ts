namespace PaperSizesInterface {
    export interface Convert {
      [key: string]: number;
    }

    export type TypeOfMeasure = 'mm' | 'in' | 'pt' | 'px'

    export interface Options {
      dpi: number;
      type: TypeOfMeasure;
      width: number;
      height: number;
    }

    export interface Info {
      dpi: number;
      code: string;
      type: TypeOfMeasure;
      width: number;
      height: number;
    }
}

export default PaperSizesInterface
