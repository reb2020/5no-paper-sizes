declare namespace PaperSizesInterface {
    interface Convert {
      [key: string]: number;
    }

    type TypeOfMeasure = 'mm' | 'in' | 'pt' | 'px'

    interface Options {
      dpi: number;
      type: TypeOfMeasure;
      width: number;
      height: number;
    }

    interface Info {
      dpi: number;
      code: string;
      type: TypeOfMeasure;
      width: number;
      height: number;
    }

    interface PaperSizesConstructor {
      new (isoCode: string | null, options: Options): PaperSizesClassMethods;
    }

    interface PaperSizesClassMethods {
      widthToInches(): number;
      widthToPoints(): number;
      widthToMillimeters(): number;
      widthToPixels(): number;
      heightToInches(): number;
      heightToPoints(): number;
      heightToMillimeters(): number;
      heightToPixels(): number;
    }
}
