// ==UserScript==
// @name         Fix scribblehub
// @namespace    https://thokej.github.io/
// @version      2025-12-12
// @description  Fix scribblehub, screen reader.
// @author       ThokeJ
// @match        https://www.scribblehub.com/read/*/chapter/*/
// @icon         https://icons.duckduckgo.com/ip2/scribblehub.com.ico
// @require      https://thokej.github.io/userscripts/common/common.js
// @grant        none
// ==/UserScript==
/** @import * from "./common/common.js" */
/* global ThoJak */

(function () {
    'use strict';
    ThoJak.TtsIgnore.CustomPageDecorations();
    ThoJak.TtsIgnore.NonChapterContent('div.chp_raw');
    ThoJak.TtsIgnore.HTMLelement('blockquote');
})();