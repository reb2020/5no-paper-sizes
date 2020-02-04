# <a href='https://5no.io'><img src='https://5no.io/img/5no-small-logo.png' height='100' alt='5no Logo' aria-label='5no.io' /></a>Paper Sizes

Tool for get the paper dimensions in millimetres, inches, points, pixels

The dimensions of the A, B series paper sizes are defined by the ISO 216 international paper size standard
The dimensions of the C series sizes are defined by the ISO 269 paper size standard

## Install

@5no/paper-sizes requires Node version 8 or a bove.

```sh
npm install --save @5no/paper-sizes
```

## Doc

```js

let options = { 
    dpi: 300, // Dots Per Inch - by default 300
    type: 'mm', // type of measurement 'mm' | 'in' | 'pt' | 'px'
    width: 0, // custom width
    height: 0 // custom height
}

type isoCode = string | null // if you want to make the manual resolution this parameter will be pass null

let data = PaperSizes(isoCode, options)


// convert the width measurement to Millimeters, Inches, Points, Pixels
data.widthToMillimeters() 
data.widthToInches()
data.widthToPoints()
data.widthToPixels()


// convert the height measurement to Millimeters, Inches, Points, Pixels
data.heightToMillimeters()
data.heightToInches()
data.heightToPoints()
data.heightToPixels()


```

## Examples

```js
const PaperSizes = require('5no-paper-sizes')

let data = PaperSizes('A4')

console.log(data.widthToMillimeters(), data.heightToMillimeters())

//210, 297

let one = PaperSizes(null, {
    dpi: 300,
    type: 'px',
    width: 2480,
    height: 3508,
})

console.log(data.widthToMillimeters(), data.heightToMillimeters())

//210, 297

```

## License

MIT Licensed, Copyright (c) 2019 Aleksandr Sokol