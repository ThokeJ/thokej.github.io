// ==UserScript==
// @name         Fix AO3
// @namespace    https://thokej.github.io/
// @version      2025-05-02
// @description  Fix archiveofourown, screen reader.
// @author       ThokeJ
// @match        https://archiveofourown.org/works/*/chapters/*
// @icon         https://icons.duckduckgo.com/ip2/archiveofourown.org.ico
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let q = /(?<ma>(?:-(?:0-){2,})|(?:\*(?: \*){2,})|(?:_{2,})|^(?:<[^>]+>)*(?:(?:\*|#)+)(?:<\/[^>]+>)*$)/gm;
    document.querySelectorAll(':is(p,div,span:not([aria-hidden="true"])):not(:has(> *))').forEach((t) => { if (t.innerHTML.match(q)) t.innerHTML = t.innerHTML.replace(q, "<span aria-hidden=\"true\">$<ma></span>") });
})();