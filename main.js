"use strict"

function Memefy() {
    if (document.getElementById("inputText").value == "") {
        document.getElementById("inputText").setAttribute("placeholder", "Input your text here first 🤡");
        return;
    }
    let input_str = document.getElementById("inputText").value;
    let result_str = "";

    for(let i = 0; i < input_str.length; i++) {
        if(Math.floor(Math.random() * 10) % 2 == 0) {
            result_str += input_str[i].toUpperCase();
            continue;
        }
        result_str += input_str[i].toLowerCase();
    }
    document.getElementById("textarea-result").value = result_str;
    result_str = "";
    document.getElementById("btn-Copy").value = "Copy";
}

function CopyMemefiedText() {
    if (document.getElementById("textarea-result").value == "") {
        document.getElementById("inputText").setAttribute("placeholder", "Input your text here first 🤡");
        return;
    }
    let resultField = document.getElementById("textarea-result");

    resultField.select();
    document.execCommand("copy");

    document.getElementById("btn-Copy").value = "Copied!";
}

function MemefyLabels() {
    let app_title = "mocking text", button_label = "memefy";
    let app_title_value = "", button_label_value = "";

    for(let i = 0; i < app_title.length; i++) {
        if (Math.floor(Math.random() * 10) % 2 == 0) {
            app_title_value += app_title[i].toUpperCase();
            continue;
        }
        app_title_value += app_title[i].toLowerCase();
    }

    for (let i = 0; i < button_label.length; i++) {
        if (Math.floor(Math.random() * 10) % 2 == 0) {
            button_label_value += button_label[i].toUpperCase();
            continue;
        }
        button_label_value += button_label[i].toLowerCase();
    }

    document.getElementById("btn-Memefy").value = button_label_value;
    document.getElementById("app-title").innerText = app_title_value;
    document.getElementById("textarea-result").setAttribute("placeholder", `Click ${button_label_value} to get your text`);
}

function ClearInputField() {
    document.getElementById("inputText").value = "";
    document.getElementById("inputText").setAttribute("placeholder", "Input your text here");
    document.getElementById("textarea-result").value = "";
    document.getElementById("btn-Copy").value = "Copy";
}

MemefyLabels();
console.log("main.js loaded!")