// ==UserScript==
// @name         Fix AO3
// @namespace    https://thokej.github.io/
// @version      2025-12-18
// @description  Fix archiveofourown, screen reader.
// @author       ThokeJ
// @match        https://archiveofourown.org/works/*/chapters/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=archiveofourown.org
// @require      https://thokej.github.io/userscripts/common/common.js
// @grant        none
// ==/UserScript==
/** @import * from "./common/common.js" */
/* global ThoJak */

(function () {
    'use strict';
    ThoJak.Edit.FixPunctuation();
    ThoJak.TtsIgnore.CustomPageDecorations();
    ThoJak.TtsIgnore.NonChapterContent('div.userstuff');
    ThoJak.TtsIgnore.HTMLelement('div.userstuff :is(a,h3.landmark)');
})();