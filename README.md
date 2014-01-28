# leet.js

Convert regular and boring text into 1337 text with this lightweight node.js module.

![Example](http://i.imgur.com/BTuE3Sp.gif)

It converts the usual suspects into 4W350M3 1337 73X7ZORZ, but with the following caveats:

* Uppercase characters will "bypass" the conversion (`HELLO hello` becomes `HELLO H3110`)
* Any `cks` are replaced by `x` for 100% true 1337N355
* It will add `ZORZ` or `XOR` to the end of the end of the text

***

## Installation

### Via NPM

To install leet.js simply do:

    sudo npm install leet

Add `-g` to install globally.

If you don't have npm, you can download and install it with this line:

    curl http://npmjs.org/install.sh | sh

That's it! [Dance!](http://www.youtube.com/watch?v=8grzRgQ_AWY)

### From GitHub

You can also do it the old-fashioned way:

    git clone git@github.com:mathiasnovas/leet.js.git leet

***

## Usage

Using `leet.js` couldn't be easier! Feed it text and it will spit out 1337 73X7ZORZ!

### As a standalone script

Run the `leet.js` file directly with whatever text you want to convert:

    ./leet.js 'i want to eat snacks and be leet!'

The result:

    I W4N7 70 347 5N4X 4ND B3 1337ZORZ!

### As a node.js module

`require` the module into your script and use the `convert` function to convert your text to 4W350M3 1337ZORZ!

```javascript
leet = require('leet');
text = leet.convert('do you know where i left my cheese?');
console.log(text); // D0 Y0U KN0W WH3R3 I 13F7 MY CH3353ZORZ?
```

### As a part of a healthy breakfast

![what?](http://i.imgur.com/YzqetHc.jpg)

***

## License

I D0N7 C4R3! D0 WH473V3R Y0U W4N7ZORZ.
