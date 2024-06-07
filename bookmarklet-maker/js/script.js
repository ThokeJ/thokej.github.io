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

async function showStoredBookmarklets(){
    const storedBookmarklets = document.querySelector("#storedBookmarklets");
    const template = document.querySelector("#storedBookmarklet");
    const response = await fetch("./js/examples.json");
    const examples = await response.json();
    for (const example of examples) {
        const bml = template.content.cloneNode(true);
        let title = bml.querySelector("#storedBookmarkletTitle");
        let Description = bml.querySelector("#storedBookmarkletDescription");
        let code = bml.querySelector("#storedBookmarkletCode");
        title.textContent = example.Title;
        title.href = example.Url;
        Description.textContent = example.Description;
        code.textContent = example.Code;
        storedBookmarklets.appendChild(bml);
    }
    
}

// class bookmarklet {
//     constructor(title, url, code, description){
//         this.Title = title;
//         this.Url = url;
//         this.Code = code;
//         this.Description = description;
//     }
// }

// function extractExamples() {
//     let examples = [];
//     const storedBookmarklets = document.querySelector("#storedBookmarklets");
//     let p = storedBookmarklets.querySelectorAll("p");
//     let pre = storedBookmarklets.querySelectorAll("pre");
//     for (let i = 0; i < pre.length; i++) {
//         examples.push(new bookmarklet(p[i*2+1].textContent, p[i*2+1].childNodes[0].href, pre[i].textContent, p[i*2].textContent));
        
//     }
//     document.getElementById("code-textarea").value = JSON.stringify(examples);
// }