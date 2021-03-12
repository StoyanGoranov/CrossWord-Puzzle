
let text = document.querySelector(".text");
let description = document.getElementById("description");
let word = document.getElementById("word");
let validation = document.querySelector(".validation-msg");

let addWord = document.getElementById("add");
let submit = document.getElementById("submit");
//letter grid;
let grid;
//table element
let table;
//list of Words
let wordList = new WordList;
//grid dimension constants;
let grid_height = 17;
let grid_width = 17;

addWord.addEventListener("click", addWordHandler);
word.addEventListener("keydown", postWithEnterHandler);
description.addEventListener("keydown", changeFocusHandler);


function postWithEnterHandler(event) {
    if (event.key == "Enter") {
        addWordHandler();
    }
}

function changeFocusHandler(event) {
    if (event.key == "Enter") {
        word.focus();
    }
}

function addWordHandler() {
    if (word.value == "") {
        console.log("Word field cannot be empty")

        word.focus();
        return;
    }
    //create Word object
    let newWordObject = new Word(word.value, description.value);

    wordList.add(newWordObject);
    wordList.setWordDescriptionFlag();
    wordList.setDefaultDescription();

    let space;
    wordList.wordDescriptionFlag ? space = "&nbsp;&nbsp;-&nbsp;&nbsp;" : space = "";
    let newWord = document.createElement("h5");
    newWord.innerHTML = `${newWordObject.description} ${space} ${newWordObject.word}`;
    description.value = "";
    word.value = "";
    text.appendChild(newWord);

}


function wordValidation(input) {
    if (input == "") {

    }
    if (input) {//is cyrrillic

    }
    if (input) {//input is not a letter

    }
    if (input) {//isn't longer than 17

    }


}

function descriptionValidation(input) {
    if (input) {//isn't longer than 150

    }
    if (input) {//is only letters

    }
    if (input) {//word and description are in the same alphabet

    }
}