class WordList {
    constructor() {
        this.list = new Array();
        this.wordDescriptionFlag = false;
    }

    add(word) {
        this.list.push(word);
    }
    setWordDescriptionFlag() {
        this.list.forEach(element => {
            if (element.description != "") {
                this.wordDescriptionFlag = true;
            }
        });
    }
    setDefaultDescription() {
        this.list.forEach(element => {
            if (this.wordDescriptionFlag && element.description == "") {
                element.description = "Bonus word"
            }
        });
    }

}