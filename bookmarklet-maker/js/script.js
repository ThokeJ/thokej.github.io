'use strict'
function cleanCode(code) {
    return code.trim()
}

function generateBookmarklet() {
    let title = document.getElementById("title-input").value;
    let code = document.getElementById("code-textarea").value;
    let link = document.getElementById("bookmarklet-a");
    let codeOutput = document.getElementById("output-textarea");
    let htmlOuput = document.getElementById("htmlOuput-textarea");

    let output = "javascript:" + encodeURIComponent("(function(){" + cleanCode(code) + "})();");

    link.text = title;
    link.href = output;
    codeOutput.value = output;

    htmlOuput.value = "<a href=\"" + output + "\">" + title + "</a>"

}

function runCode() {
    let code = document.getElementById("code-textarea").value;
    eval(code);
}

function clearCode() {
    document.getElementById("title-input").value = "bookmarklet";
    document.getElementById("code-textarea").value = "";
}

function dropBookmarklet(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text/plain");
    document.getElementById("code-textarea").value = decodeURIComponent(data.slice(11)).slice(12, -5);
}

