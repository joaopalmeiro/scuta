#!/usr/bin/env node
"use strict";

const fs = require("fs");
const meow = require("meow");

// Constants
// https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
const BASE_URL = "https://img.shields.io/badge/";
const DEFAULT_LABEL = "";
const DEFAULT_STYLE = "flat-square";
const DEFAULT_LOGO_COLOR = "white";

// More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
const SVG_MIME_TYPE = "image/svg+xml";
const BASE_SVG_DATA_URL = `data:${SVG_MIME_TYPE};base64,`;

// Color
// Source: https://github.com/badges/shields/blob/master/badge-maker/lib/color.js
// Formula: https://www.w3.org/TR/AERT/#color-contrast
function brightness(color) {
	if (color) {
		const cssColor = fromString(color);
		if (cssColor) {
			const rgb = cssColor.toRgbaArray();
			console.log(rgb);
			return +((rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 255000).toFixed(
				2
			);
		}
	}
	return 0;
}

// CLI
// More info: https://github.com/sindresorhus/terminal-link-cli/blob/main/cli.js
const cli = meow(`
	Usage
	  $ scuta <message> <bg-color> <svg-path>

	Example
	  $ scuta Vega 325 logo.svg
`);

const [message, bgColor, svgPath] = cli.input;

// SVG
const svg = fs.readFileSync(svgPath, "utf8");

const buff = Buffer.from(svg, "utf-8");
const svgData = buff.toString("base64");
const svgDataUrl = encodeURIComponent(`${BASE_SVG_DATA_URL}${svgData}`);

// Badge URL
const badge = `${BASE_URL}${DEFAULT_LABEL}-${message}-${bgColor}`;
const style = `style=${DEFAULT_STYLE}`;
const logo = `logo=${svgDataUrl}`;
const logoColor = `logoColor=${DEFAULT_LOGO_COLOR}`;

const badgeUrl = `${badge}?${style}&${logo}&${logoColor}`;

console.log(badgeUrl);
