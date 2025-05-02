// ==UserScript==
// @name         Fix royalroad
// @namespace    https://thokej.github.io/
// @version      2024-08-13.v2
// @description  Fix royalroad, screen reader.
// @author       ThokeJ
// @match        https://www.royalroad.com/fiction/*/chapter/*
// @icon         https://icons.duckduckgo.com/ip2/royalroad.com.ico
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let q = /(?<ma>(?:-(?:0-){2,})|(?:\*(?: \*){2,})|(?:_{2,})|^(?:<[^>]+>)*(?:(?:\*|#)+)(?:<\/[^>]+>)*$)/gm;
    document.querySelectorAll(':is(p,div,span:not([aria-hidden="true"])):not(:has(> *))').forEach((t) => { if (t.innerHTML.match(q)) t.innerHTML = t.innerHTML.replace(q, "<span aria-hidden=\"true\">$<ma></span>") });
})();