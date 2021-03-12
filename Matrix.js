class Matrix {

    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.matrix = [];
        for (let i = 0; i < height; i++) {
            this.matrix[i] = new Array(width);
        }
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                this.matrix[i][j] = { value: undefined, taken: false }
            }
        }
    }

    getElement(i, j) {
        return this.matrix[i][j].value;
    }
    setElement(i, j, value) {
        this.matrix[i][j].value = value;
        this.matrix[i][j].taken = true;
    }

    fillWith(value) {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                this.matrix[i][j].value = value;
            }
        }
    }
    fillWithIndexes() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                this.matrix[i][j].value = j;
            }
        }
    }
    fillWithLetters() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                var letter;
                letter = this.randomLetterLatin();
                this.matrix[i][j].value = letter;
            }
        }
    }
    read() {
        for (let i = 0; i < this.height; i++) {
            let row = "";
            for (let j = 0; j < this.width; j++) {
                row += ` ${this.matrix[i][j].value} `;
            }
            console.log(row);
        }
    }


    setRow(word) {
        console.log(`setRow startH is: ${word.startH}
            length is: ${word.length}
            matrix width is: ${this.width}
            startW is: ${word.startW}
            word.startW + word.length <= this.width is:  ${word.startW} + ${word.length} <= ${this.width}
            (this.height > word.startH) is:  ${this.height} > ${word.startH}`
        );
        if (word.startW + word.length <= this.width & (this.height > word.startH)) {
            let container = "";
            for (let i = 0; i < word.length; i++) {
                container += this.matrix[word.startH][word.startW + i];
                this.setElement(word.startH, word.startW + i, word.get(i));
                //this.matrix[word.startH][word.startW + i] = word.get(i);
            }
            console.log("word starts at: " + word.startH + " " + word.startW);
            return 0;
        } else {
            console.log("Invalid parameter in SetRow");
            word.resetDirection();
            this.setRow(word);
            return -1;
        }
    }
    setRowReverse(word) {
        console.log(`setRowReverse startH is:  ${word.startH}
            length is:  ${word.length}
            matrix width is:  ${this.width}
            startW is:  ${word.startW}
            word.startW - word.length >= 0 is:  ${word.startH} - ${word.length} >= ${0}
            this.height > word.startH is:  ${this.height} > ${word.startH}`
        );
        if (word.startW - word.length >= 0 & (this.height > word.startH)) {
            let container = "";
            for (let i = word.length; i > 0; i--) {
                container += this.matrix[word.startH][word.startW - i];
                this.setElement(word.startH, word.startW - i, word.get(word.length - i));
                //this.matrix[word.startH][word.startW - i] = word.get(word.length - i);
            }
            console.log("word starts at: " + word.startH + " " + word.startW);
            return 0;
        } else {
            console.log("Invalid parameter in setRowReverse");
            word.resetDirection();
            this.setRowReverse(word);
            return -1;
        }
    }
    setColumn(word) {
        console.log(`setColumn startH is:  ${word.startH}
            length is:  ${word.length}
            matrix width is:  ${this.width}
            startW is: ${word.startW}
            word.startH + word.length <= this.height is:  ${word.startH} + ${word.length} <= ${this.height}
            (this.width > word.startW) is:  ${this.width} > ${word.startW}`
        );
        if (word.startH + word.length <= this.height & (this.width > word.startW)) {
            let container = "";
            for (let i = 0; i < word.length; i++) {
                container += this.matrix[word.startH + i][word.startW];
                this.setElement(word.startH + i, word.startW, word.get(i));
                //this.matrix[word.startH + i][word.startW] = word.get(i);
            }
            console.log("word starts at: " + word.startH + " " + word.startW);
            return 0;
        } else {
            console.log("Invalid parameter in setColumn");
            word.resetDirection();
            this.setRow(word);
            return -1;
        }
    }
    setColumnReverse(word) {
        console.log(`setColumnReverse startH is: ${word.startH}
        length is: ${word.length}
        matrix width is: ${this.width}
        startW is: ${word.startW}
        startH - length >= 0 is:  ${word.startH} - ${word.length} >= ${0}
        this.width > startW is:  ${this.width} > ${word.startW}`
        );
        if (word.startH - word.length >= 0 & (this.width > word.startW)) {
            let container = "";
            for (let i = word.length; i > 0; i--) {
                container += this.matrix[word.startH - i][word.startW];
                this.setElement(word.startH - i, word.startW, word.get(word.length - i));
                //this.matrix[word.startH - i][word.startW] = word.get(word.length - i);
            }
            console.log("word starts at: " + word.startH + " " + word.startW);
            return 0;
        } else {
            console.log("Invalid parameter in setColumnReverse");
            word.resetDirection();
            this.setRow(word);
            return -1;
        }
    }

    randomLetterLatin() {
        var code = 26 * Math.random() + 97;
        var letter = String.fromCharCode(code);
        return letter;
    }


}

