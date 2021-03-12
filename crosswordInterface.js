
function createGrid(height, width) {

    var container = document.querySelector(".build-container");
    //container.setAttribute("class", "container");
    document.body.appendChild(container);

    var table = document.createElement("div");
    table.setAttribute("id", "table");
    container.appendChild(table);
    for (var i = 0; i < height; i++) {
        var row = document.createElement("div");
        row.classList.add("row");
        //row.setAttribute("id", `row${i}`);
        table.appendChild(row);
        console.log("Add row " + i, row);
        for (var j = 0; j < width; j++) {
            var cell = document.createElement("div");
            cell.setAttribute("id", `element${height * i + j}`);
            cell.setAttribute("class", "letter");

            row.appendChild(cell);
            //console.log("Add element " + (height * i + j));
        }
    }
    console.log("grid created");
    let grid = new Matrix(height, width);
    return grid;
}

function fillGrid(height, width, matrix) {

    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {

            var element = document.querySelector(`#element${height * i + j}`);
            element.textContent = `${matrix.getElement(i, j)}`
        }
    }
    console.log("grid filled");

}



//export { fillGrid, createGrid }