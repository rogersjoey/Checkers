function cellTemp(rowNum, colNum) {
    rowNum %2 == 1? rowEven = false: rowEven = true;
    colNum %2 == 1? colEven = false: colEven = true;
    if (colEven != rowEven) {
        let cellString = `<div id='cell-${rowNum}-${colNum}' class='cell black' onclick=toggle(this)>`
        if (rowNum<=3){
            cellString = cellString +
            `<div class="checker red-checker"></div>
            <div class="checker black-checker" hidden></div>`}
        else if (rowNum>=6){
            cellString = cellString +
            `<div class="checker red-checker" hidden></div>
            <div class="checker black-checker"></div>`
        } else {cellString = cellString +
            `<div class="checker red-checker" hidden></div>
            <div class="checker black-checker" hidden></div>`
        }
        return cellString + `</div>`
    } else {
        return `<div id='cell-${rowNum}-${colNum}' class='cell red'></div>`
    }
}

function rowTemp(rowNum){
    let rowString = ''
    rowString = rowString + `<div id="row-${rowNum}" class="row">`
    for (let cellNum=1;cellNum<=8;cellNum++){
        rowString = rowString + cellTemp(rowNum,cellNum)
    }
    rowString = rowString+ `</div>`
    return rowString
} 

function boardTemp(){
    let boardString =''
    for (let rowNum=1;rowNum<=8;rowNum++){
        boardString = boardString + rowTemp(rowNum)
        console.log(boardString)
    }
    return boardString
}