class ThoJak {
    static TtsIgnore = class TtsIgnore {
        static CustomPageDecorations() {
            let q = /(?<ma>(?:-(?:0-){2,})|(?:\*(?: \*){2,})|(?:_{2,})|(?:(?:\*|#)+))/gm;
            document.querySelectorAll(':is(p,div,span):not([aria-hidden="true"]):not(:has(> :not(br,hr,em)))').forEach((el) => {
                if (el.innerHTML.match(q)) el.innerHTML = el.innerHTML.replace(q, "<span aria-hidden=\"true\">$<ma></span>");
            });
        }
        static NonChapterContent(chapterContent) {
            document.body.querySelectorAll(`:not(:has(${chapterContent}), ${chapterContent}, ${chapterContent} *, option)`).forEach((el) => {
                el.setAttribute("aria-hidden", "true");
            });
        }
    }
    static test(path, func) {
        if (window.location.pathname == path) {
            func();
        }
    }
}