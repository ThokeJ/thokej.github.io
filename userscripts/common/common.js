class ThoJak {
    /** @type {console|null} */
    static #Console = null;
    /** @type {HTMLIFrameElement|null} */
    static #iframe;

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
        static cleanup() {

        }
    }

    static test(path, func) {
        if (window.location.pathname == path) {
            func();
        }
    }

    static get MyConsole() {
        if (this.#Console == null) {
            // Create an iframe for start a new console session
            this.#iframe = document.createElement('iframe');
            // Hide iframe
            this.#iframe.style.display = 'none';
            // Inject iframe on body document
            document.body.appendChild(this.#iframe);
            // Don't remove the iframe or console session will be closed
            this.#Console = this.#iframe.contentWindow.console;
        }
        return this.#Console;
    }

    static cleanup() {
        this.TtsIgnore.cleanup();
        this.#Console = null;
        this.#iframe?.remove();
        this.#iframe = null;
    }
}