// ==UserScript==
// @name         Fix AO3
// @namespace    https://thokej.github.io/
// @version      2025-05-22
// @description  Fix archiveofourown, screen reader.
// @author       ThokeJ
// @match        https://archiveofourown.org/works/*/chapters/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=archiveofourown.org
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let q = /(?<ma>(?:-(?:0-){2,})|(?:\*(?: \*){2,})|(?:_{2,})|(?:(?:\*|#)+))/gm;
    document.querySelectorAll(':is(p,div,span):not([aria-hidden="true"]):not(:has(> :not(br,hr,em)))').forEach((t) => { if (t.innerHTML.match(q)) t.innerHTML = t.innerHTML.replace(q, "<span aria-hidden=\"true\">$<ma></span>") });

    document.body.querySelectorAll(':not(:has(.userstuff.module), .userstuff.module, .userstuff.module *, option), [aria-hidden="true"]').forEach((el) => {el.setAttribute("aria-hidden","true")});
})();