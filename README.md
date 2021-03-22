# scuta

> Generate URLs for Shields.io badges with custom SVG logo images.

## Install

```sh
npm install --global scuta
```

## Usage

```sh
$ scuta --help

  Generate URLs for Shields.io badges with custom SVG logo images.

  Usage
    $ scuta <message> <bg-color> <svg-path>

  Options
    --output, -o  Output format [url|markdown] (Default: url)

  Example
    $ scuta Vega 325 logo.svg
    $ scuta Vega '#325' logo.svg
    $ scuta Vega 325 logo.svg --output markdown
```

## References

- [node-cli-boilerplate](https://github.com/sindresorhus/node-cli-boilerplate).
- Atta's [Base64 Encoding and Decoding in Node.js](https://attacomsian.com/blog/nodejs-base64-encode-decode) blog post.
- [thmsgbrt](https://github.com/thmsgbrt/thmsgbrt) repo.

## Notes

- `--version` and `--help`.
- [css-color-converter](https://www.npmjs.com/package/css-color-converter) (`npm i css-color-converter`).
- Default colors:
  - `#fff` (white).
  - `#333` (black).
