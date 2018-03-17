# Mirai Gadget Lab

![Travis](https://img.shields.io/travis/alessandrojean/mirai-gadget-lab.svg?style=flat-square)

An attempt to rebuild the website of Mirai Gadget Lab from Steins;Gate using Vue.js.

> This website was created originally as part of the marketing campaing for the
> anime adaptation of Steins;Gate. The page was written by Okabe Rintarou and
> Itaru Hashida, and is notably poorly constructed resembling a 90's website.
> It is also worth noting that in therms of canon, this website would have been
> made shortly before the events of the beginning of the story.
> 
> Adapted from http://steins-gate.wikia.com/wiki/Future_Gadgets_Lab_(Web_Site)

This version it's available online [here](https://alessandrojean.github.io/mirai-gadget-lab/).

## Differences

- The original website uses frames in their construction. I adapted those to 
Vue.js components, so the behavior of this version it's not exactly like the
original;
- The *top* and the *about site* pages contains some additional phrases to
mention this repository, as so the license and copyright notices;
- This version contains i18n too, so I added a language selector in the
ending of the menu bar;
- The blinking algorithm is broken in the original version, so I
fixed using CSS animations.

## Build Setup

``` bash
# Install dependencies
npm install

# Serve with hot reload at localhost:8080
npm run dev

# Build for production with minification
npm run build

# Build for production and view the bundle analyzer report
npm run build --report
```

## License

    The MIT License (MIT)

    Copyright (c) 2018 Alessandro Jean

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Disclaimer

The author it's not filliated with any of the brands, characters and series related
to this repository. All copyright of those go direct to the owners.