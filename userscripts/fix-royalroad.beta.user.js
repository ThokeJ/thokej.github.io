// ==UserScript==
// @name         Fix royalroad (Beta)
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
    // function getStyleSheet() {
    //     for (const sheet of document.styleSheets) {
    //         if (sheet.href == null && sheet.cssRules.length === 1 && sheet.cssRules[0].style[sheet.cssRules[0].style[0]] == "none") {
    //             document.querySelectorAll(sheet.cssRules[0].selectorText).forEach((el) => { el.remove() });
    //             return true;
    //         }
    //     }
    //     return false;
    // }
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

    // let q = /(?<ma>(?:-(?:0-){2,})|(?:\*(?: \*){2,})|(?:_{2,})|(?:(?:\*|#)+))/gm;
    // document.querySelectorAll(':is(p,div,span):not([aria-hidden="true"]):not(:has(> :not(br,hr,em)))').forEach((t) => { if (t.innerHTML.match(q)) t.innerHTML = t.innerHTML.replace(q, "<span aria-hidden=\"true\">$<ma></span>") });

    // document.body.querySelectorAll(':not(:has(.chapter-content), .chapter-content, .chapter-content *, option), [aria-hidden="true"]').forEach((el) => {el.setAttribute("aria-hidden","true")});
})();