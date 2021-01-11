$(document).ready(function() {
    console.log('document ready')
    $('board-container').html(renderBoard())
    $(`.black.cell`).click(moveCheckerHere)
    renderCheckers()
    $('.checker').click(selectChecker)
})

function toggle() {
    let checker = $(this).children().first()
    checker.toggle()
    if(!checker.is(":checker")){
        switchColor(checker);
    }
}

function switchColor (checker) {
    if (checker.hasClass('black-checker')){
        checker.removeClass('black-checker')
        checker.addClass('red-checker')
    } else {
        checker.addClass('black-checker')
        checker.removeClass('red-checker')
    }
}   

function renderBoard(){
    return `
        ${renderRow(1)}
        ${renderRow(2)}
        ${renderRow(3)}
        ${renderRow(4)}
        ${renderRow(5)}
        ${renderRow(6)}
        ${renderRow(7)}
        ${renderRow(8)}
    `
}

function renderRow(rowNum){
    return `
        <div id="row-${rowNum}" class="row">
            ${renderCell(rowNum,1)}
            ${renderCell(rowNum,2)}
            ${renderCell(rowNum,3)}
            ${renderCell(rowNum,4)}
            ${renderCell(rowNum,5)}
            ${renderCell(rowNum,6)}
            ${renderCell(rowNum,7)}
            ${renderCell(rowNum,8)}
        </div>
    `
}

function renderCell(rowNum, cellNum) {
    if(cellColor(cellNum,rowNum) === 'black') {
        return `<div id="cell-${rowNum}-${cellNum}" class="cell black"></div>`
    } else {
        return `<div id="cell-${rowNum}-${cellNum}" class="cell red"></div>`
    }
}

function parity(num) {
    return (num%2 == 0) ? 'even' : 'odd'
}

function cellColor(cellNum,rowNum){
    return parity(cellNum) == parity(rowNum)? 'red' : 'black'
}

function moveCheckerHere(){
    if(selectedChecker) {
        console.log('move checker')
        let blackCell = $(this)
        let id = blackCell.attr('id')
        let idParts = id.split('-')
        selectedChecker.row = idParts[1]
        selectedChecker.cell = idParts[2]
        selectedChecker = undefined
        renderCheckers()
    }else{
        console.log('select a checker')
    }
}

function clearBoard() {
    $(`.black.cell`).html('')
    $(`.black.cell`).unbind('click')
    $('.out-of-play').html(``)
}



// function cellTemp(rowNum, colNum) {
//     rowNum %2 == 1? rowEven = false: rowEven = true;
//     colNum %2 == 1? colEven = false: colEven = true;
//     if (colEven != rowEven) {
//         let cellString = `<div id='cell-${rowNum}-${colNum}' class='cell black' onclick=toggle(this)>`
//         if (rowNum<=3){
//             cellString = cellString +
//             `<div class="checker red-checker"></div>
//             <div class="checker black-checker" hidden></div>`}
//         else if (rowNum>=6){
//             cellString = cellString +
//             `<div class="checker red-checker" hidden></div>
//             <div class="checker black-checker"></div>`
//         } else {cellString = cellString +
//             `<div class="checker red-checker" hidden></div>
//             <div class="checker black-checker" hidden></div>`
//         }
//         return cellString + `</div>`
//     } else {
//         return `<div id='cell-${rowNum}-${colNum}' class='cell red'></div>`
//     }
// }

// function rowTemp(rowNum){
//     let rowString = ''
//     rowString = rowString + `<div id="row-${rowNum}" class="row">`
//     for (let cellNum=1;cellNum<=8;cellNum++){
//         rowString = rowString + cellTemp(rowNum,cellNum)
//     }
//     rowString = rowString+ `</div>`
//     return rowString
// } 

// function boardTemp(){
//     let boardString =''
//     for (let rowNum=1;rowNum<=8;rowNum++){
//         boardString = boardString + rowTemp(rowNum)
//         // console.log(boardString)
//     }
//     return boardString
// }