
submit.addEventListener("click", submitHandler);

function submitHandler(e) {
    if (wordList.length == 0) {
        console.log("wordList cannot be empty");
    } else {
        var inputContainer = document.querySelector(".input-container");
        var contentContainer = document.querySelector(".content-container");
        var crosswordContainer = document.querySelector(".crossword-container");
        inputContainer.classList.add("hidden");
        contentContainer.classList.add("hidden");
        crosswordContainer.classList.remove("hidden");

        console.log("in the handler");
        grid = createGrid(grid_height, grid_width);

        grid.fillWithLetters();
        wordList.list.forEach(word => {
            switch (word.direction) {
                case 1:
                    grid.setRow(word);
                    break;
                case 2:
                    grid.setRowReverse(word);
                    break;
                case 3:
                    grid.setColumn(word);
                    break;
                case 4:
                    grid.setColumnReverse(word);
                    break;
            }
        });
        fillGrid(grid_height, grid_width, grid);
    }
}