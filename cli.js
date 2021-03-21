#!/usr/bin/env node
"use strict";

const fs = require("fs");
const meow = require("meow");
// const { fromString } = require("css-color-converter");

// Constants
// https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
const BASE_URL = "https://img.shields.io/badge/";
const DEFAULT_LABEL = "";
const DEFAULT_STYLE = "flat-square";
// const BRIGHTNESS_THRESHOLD = 0.69;

// More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
const SVG_MIME_TYPE = "image/svg+xml";
const BASE_SVG_DATA_URL = `data:${SVG_MIME_TYPE};base64,`;

// Color
const HEX_COLOR_PREFIX_RE = /^#([\da-f]{3}){1,2}$/i;

function isHexColorPrefix(color) {
	return HEX_COLOR_PREFIX_RE.test(color);
}

// Source: https://github.com/badges/shields/blob/master/badge-maker/lib/color.js
// function getBrightness(color) {
// 	if (color) {
// 		const cssColor = fromString(color);

// 		if (cssColor) {
// 			const rgb = cssColor.toRgbaArray();

// 			// Formula: https://www.w3.org/TR/AERT/#color-contrast
// 			return +((rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 255000).toFixed(
// 				2
// 			);
// 		}
// 	}

// 	return 0;
// }

// Source: https://github.com/badges/shields/blob/master/badge-maker/lib/badge-renderers.js
// function getLogoColor(color) {
// 	console.log(getBrightness(color));
// 	if (getBrightness(color) <= BRIGHTNESS_THRESHOLD) {
// 		return "#fff";
// 	} else {
// 		return "#333";
// 	}
// }

// CLI
// More info: https://github.com/sindresorhus/terminal-link-cli/blob/main/cli.js
const cli = meow(`
	Usage
	  $ scuta <message> <bg-color> <svg-path>

	Example
	  $ scuta Vega 325 logo.svg
	  $ scuta Vega '#325' logo.svg
`);

// CLI Parameters
let [message, bgColor, svgPath] = cli.input;
// const logoColor = getLogoColor(bgColor);
bgColor = isHexColorPrefix(bgColor) ? bgColor.substr(1) : bgColor;

// SVG
const svg = fs.readFileSync(svgPath, "utf8");

const buff = Buffer.from(svg, "utf-8");
const svgData = buff.toString("base64");
const svgDataUrl = encodeURIComponent(`${BASE_SVG_DATA_URL}${svgData}`);

// Badge URL
const badge = `${BASE_URL}${DEFAULT_LABEL}-${message}-${bgColor}`;
const styleParam = `style=${DEFAULT_STYLE}`;
const logoParam = `logo=${svgDataUrl}`;

// Note: it is not supported for custom logos
// const logoColorParam = `logoColor=${logoColor}`;

const badgeUrl = `${badge}?${styleParam}&${logoParam}`;

console.log(badgeUrl);
