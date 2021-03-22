# scuta

![scuta badge](https://img.shields.io/badge/-scuta-F25C54?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDQwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI%2BCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzI1IDUwSDc1QzYxLjE5MjkgNTAgNTAgNjEuMTkyOSA1MCA3NVY0OTZDNTAgNTA5LjgwNyA2MS4xOTI5IDUyMSA3NSA1MjFIMzUwVjc1QzM1MCA2MS4xOTI5IDMzOC44MDcgNTAgMzI1IDUwWk03NSAwQzMzLjU3ODYgMCAwIDMzLjU3ODYgMCA3NVY0OTZWNTcxVjcyNC41NzFDMCA3NjUuOTkzIDMzLjU3ODYgNzk5LjU3MSA3NSA3OTkuNTcxSDMyNUMzNjYuNDIxIDc5OS41NzEgNDAwIDc2NS45OTMgNDAwIDcyNC41NzFWNTcxVjc1QzQwMCAzMy41Nzg2IDM2Ni40MjEgMCAzMjUgMEg3NVoiIGZpbGw9IndoaXRlIi8%2BCjwvc3ZnPgo%3D)

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
- `node ./cli.js scuta "#F25C54" assets/scuta-logo.svg -o markdown`.
