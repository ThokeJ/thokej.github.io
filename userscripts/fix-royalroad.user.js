// ==UserScript==
// @name         Fix royalroad
// @namespace    https://thokej.github.io/
// @version      2025-05-23
// @description  Fix royalroad, screen reader.
// @author       ThokeJ
// @match        https://www.royalroad.com/fiction/*/chapter/*
// @icon         https://icons.duckduckgo.com/ip2/royalroad.com.ico
// @require      https://thokej.github.io/userscripts/common/common.js
// @grant        none
// ==/UserScript==
/** @import * from "./common/common.js" */
/* global ThoJak */

(function () {
    'use strict';
    ThoJak.TtsIgnore.CustomPageDecorations();
    ThoJak.TtsIgnore.NonChapterContent('.chapter-content');
})();