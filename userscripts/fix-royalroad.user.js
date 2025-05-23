// ==UserScript==
// @name         Fix royalroad
// @namespace    https://thokej.github.io/
// @version      2025-05-24
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
    document.querySelectorAll('.chapter-content span[class]:not(:has(> :not(br,hr,em)))').forEach((el) => {
        ThoJak.MyConsole.groupCollapsed("Found a <span>");
        ThoJak.MyConsole.log("%o", el.outerHTML);
        el.remove()
        ThoJak.MyConsole.log("<span> removed");
        ThoJak.MyConsole.groupEnd();
    });
    ThoJak.cleanup();

    ThoJak.TtsIgnore.CustomPageDecorations();
    ThoJak.TtsIgnore.NonChapterContent('.chapter-content');
})();