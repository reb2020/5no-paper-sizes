const chai = require('chai')

const PaperSizes = require('../compiled')
const iso = require('../compiled/iso').default

const expect = chai.expect

describe('PaperSizes', () => {
  beforeEach(() => {
  })

  afterEach(() => {
  })

  it('validate', () => {
    Object.keys(iso).forEach((key) => {
      let one = PaperSizes(key)
      let two = PaperSizes(null, {
        dpi: 300,
        type: 'mm',
        width: iso[key]['mm'][0],
        height: iso[key]['mm'][1],
      })

      console.info(key)
      expect(one.widthToMillimeters()).to.eql(two.widthToMillimeters())
      expect(one.heightToMillimeters()).to.eql(two.heightToMillimeters())
      expect(one.widthToInches()).to.eql(two.widthToInches())
      expect(one.heightToInches()).to.eql(two.heightToInches())
      expect(one.widthToPoints()).to.eql(two.widthToPoints())
      expect(one.heightToPoints()).to.eql(two.heightToPoints())
    })
  })

  it('validate convert to pixels', () => {
    let one = PaperSizes('A4')
    expect(one.widthToPixels()).to.eql(2480)
    expect(one.heightToPixels()).to.eql(3508)
  })

  it('validate convert pixels to millimeters', () => {
    let one = PaperSizes(null, {
      dpi: 300,
      type: 'px',
      width: 2480,
      height: 3508,
    })

    expect(one.widthToMillimeters()).to.eql(210)
    expect(one.heightToMillimeters()).to.eql(297)
  })
})
