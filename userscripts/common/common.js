class ThoJak {
    /** @type {console|null} */
    static #Console = null;
    /** @type {HTMLIFrameElement|null} */
    static #iframe;

    static TtsIgnore = class TtsIgnore {
        static CustomPageDecorations() {
            let q = /(?<ma>(?:-(?:0-){2,})|(?:\*(?: \*){2,})|(?:_{2,})|(?:(?<=>|\s|^)(?:\*|#)+(?=<|\s|$))|(?:(?=\b)\*|\*(?=\b)))/gm;
            document.querySelectorAll(':is(p,div,span):not([aria-hidden="true"]):not(:has(> :not(br,hr,em,strong)))').forEach((el) => {
                if (el.innerHTML.match(q)) el.innerHTML = el.innerHTML.replace(q, "<span aria-hidden=\"true\">$<ma></span>");
            });
        }

        static NonChapterContent(chapterContent) {
            document.body.querySelectorAll(`:not(:has(${chapterContent}), ${chapterContent}, ${chapterContent} *, option)`).forEach((el) => {
                el.setAttribute("aria-hidden", "true");
            });
        }

        static HTMLelement(selector) {
            document.body.querySelectorAll(selector).forEach((el) => {
                el.setAttribute("aria-hidden", "true");
            });
        }
        static cleanup() {

        }
    }

    static Edit = class Edit {
        static RemoveElement(selector) {
            document.body.querySelectorAll(selector).forEach((el) => {
                el.remove();
            });
        }

        /** @param {string} censoredWord  */
        static #toUnCensoredWord(censoredWord) {
            let UnCensorWord = "";
            let UnCensoredWords = ['fuck','fucking','fucker','bitche','bitches','shit','pussy'];
            if (censoredWord.length > 0) {
                let isUpperCase = /^[A-Z]+$/.test(censoredWord.replaceAll('*',''));
                let indexOfUnCensoredWord = UnCensoredWords.findIndex((w)=> (new RegExp("^" + censoredWord.replaceAll("*",".") + "$","i")).test(w));
                if(indexOfUnCensoredWord !== -1){
                    UnCensorWord = censoredWord[0] + (isUpperCase ? UnCensoredWords[indexOfUnCensoredWord].slice(1).toUpperCase() : UnCensoredWords[indexOfUnCensoredWord].slice(1));
                }else{
                    UnCensorWord = censoredWord;
                }
            }
            return UnCensorWord;
        }

        static UnCensorSwearWords() {
            let q = /\w+\*+\w*/g;
            document.body.querySelectorAll('*:not(:has(>:not(br)))').forEach((el) => {
                if (el.innerHTML.match(q))
                    el.innerHTML = el.innerHTML.replace(q, this.#toUnCensoredWord);
            });
        }

        static FixPunctuation() {
            let q = /´(s|t|l|m|d|re|ve)/g;
            document.body.querySelectorAll('*:not(:has(>:not(br)))').forEach((el) => {
                if (el.innerHTML.match(q))
                    el.innerHTML = el.innerHTML.replace(q, "'$1");
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
        this.Edit.cleanup();
        this.#Console = null;
        this.#iframe?.remove();
        this.#iframe = null;
    }
}