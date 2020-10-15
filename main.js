"use strict"

function Memefy() {
    let input_str = document.getElementById("inputText").value;
    let result_str = "";

    for(let i = 0; i < input_str.length; i++) {
        if(Math.floor(Math.random() * 10) % 2 == 0) {
            result_str += input_str[i].toUpperCase();
            continue;
        }
        result_str += input_str[i].toLowerCase();
    }
    document.getElementById("resultText").value = result_str;
    result_str = "";
}

console.log("main.js loaded!")