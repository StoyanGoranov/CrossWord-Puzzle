class Word {

    constructor(word, description = "") {
        this.word = word;
        this.description = description;
        this.map = [];
        this.length = word.length;
        this.startH = Math.floor(Math.random() * grid_height);
        this.startW = Math.floor(Math.random() * grid_width);
        this.direction = Math.floor(Math.random() * 4 + 1);
        for (let i = 0; i < word.length; i++) {
            this.map.push(word[i]);
        }
    }

    getDesc() {
        return this.description;
    }
    get(index) {
        return this.map[index];
    }
    // getPosY() {
    //     return this.map.posY;
    // }
    // getPosX() {
    //     return this.map.posX;
    // }
    setPos(index, y, x) {
        let letter = this.get(index);
        letter.posY = y;
        letter.posX = x;
    }
    getLen() {
        return this.word.length;
    }
    resetDirection() {
        this.startH = Math.floor(Math.random() * grid_height);
        this.startW = Math.floor(Math.random() * grid_width);
        this.direction = Math.floor(Math.random() * 4 + 1);
    }
}