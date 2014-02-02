# SetCursorLine jQuery Plugin

`:set cursorline` (underline) for textarea

* Use CSS3 linear-gradient
* Keydown and click event support

![set-cursor-line](https://raw.github.com/grauwoelfchen/set-cursor-line/master/img/set-cursor-line-js.png)


## Requirements

* [jQuery](https://github.com/jquery/jquery)
* [set-number](https://github.com/grauwoelfchen/set-number) (optional)

## Usage

```
$("#id").setCursorLine({
  defaultLineHeight: 16
, cursorLineColor:   "black"
});
```

```
// with set-number
$("#id")
  .setNumber({
    ...
  })
  .setCursorLine({
  , cursorLineColor: "red"
  });
```

see also `example/index.html`


## Development

```
% npm install grunt

# uglify
% grunt uglify #=> dist/set-cursor-line.min.js will be generated

# test
% grunt qunit # or see `test/set-cursor-line.html` via browser
```


## Todo

* Add more CorsorLine style support (without underline).
* Fix `normal` line-height problem in Google Chrome.
* Add zoom support of browser.
* Add CSS3 image fallback ?


## Histroy

* 20140203 Initial Release (0.0.1)


## Lincense

MIT License (see `LICENSE`)