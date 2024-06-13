// ==UserScript==
// @name         Fix royalroad
// @namespace    https://thokej.github.io/
// @version      2024-06-14
// @description  Fix royalroad, screen reader.
// @author       ThokeJ
// @match        https://www.royalroad.com/fiction/*/chapter/*
// @icon         https://icons.duckduckgo.com/ip2/royalroad.com.ico
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    
    let q = /(?<ma>(?:-(?:0-){2,})|(?:_{2,})|^(?:<[^>]+>)?(?:\*+)(?:<\/[^>]+>)?$)/gm;
    document.querySelectorAll('p:not(:has(> [aria-hidden="true"]))').forEach((t) => { if (t.innerHTML.match(q)) t.innerHTML = t.innerHTML.replace(q, "<span aria-hidden=\"true\">$<ma></span>") });
})();