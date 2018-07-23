# @mapbox/postcss-concatenator

A very simple [PostCSS] runner that concatenates stylesheets from the file system or URLs.

## Installation

```
npm install @mapbox/postcss-concatenator
```

## API

### concat

```js
const PostcssConcatenator = require('postcss-concatenator');

PostcssConcatenator.concat(options: Object): Promise<void>
```

Concatenate stylesheets! Returns a `Promise` that resolves when the output files are written.

All assets referenced from stylesheet as non-absolute URLs will be hashed and copied into the same directory as the [`output`] CSS file.

#### options.stylesheets

Type: `Array<string>`. **Required.**

An array of filenames or absolute URLs.

#### options.output

Type: `string`. **Required.**

Filename of output CSS. Assets referenced as non-absolute URLs will be copied into the output file's directory.

#### options.plugins

Type: `Array<PostcssPlugin>`. Default: `[]`.

An array of PostCSS plugins for processing your stylesheets. For example:

```js
const autoprefixer = require('autoprefixer');
const simpleVars = require('postcss-simple-vars');
const PostcssConcatenator = require('postcss-concatenator');

PostcssConcatenator.concat({
  stylesheets: ['foo.css', 'bar.css']  ,
  output: 'output.css',
  plugins: [
    autoprefixer(),
    simpleVars()
  ]
});
```

#### options.souceMap

Type: `'inline' | 'file'. Default:`'inline'\`.

If `'file'` is provided, the source map will be written to a `*.map` file alongside the [`output`] CSS.

[postcss]: http://postcss.org/

[`output`]: optionsoutput
