let selectedChecker = undefined

let checkers = [
    {row:1, cell:2, color: 'red'},
    {row:1, cell:4, color: 'red'},
    {row:1, cell:6, color: 'red'},
    {row:1, cell:8, color: 'red'},
    {row:2, cell:1, color: 'red'},
    {row:2, cell:3, color: 'red'},
    {row:2, cell:5, color: 'red'},
    {row:2, cell:7, color: 'red'},
    {row:3, cell:2, color: 'red'},
    {row:3, cell:4, color: 'red'},
    {row:3, cell:6, color: 'red'},
    {row:3, cell:8, color: 'red'},
    {row:6, cell:1, color: 'black'},
    {row:6, cell:3, color: 'black'},
    {row:6, cell:5, color: 'black'},
    {row:6, cell:7, color: 'black'},
    {row:7, cell:2, color: 'black'},
    {row:7, cell:4, color: 'black'},
    {row:7, cell:6, color: 'black'},
    {row:7, cell:8, color: 'black'},
    {row:8, cell:1, color: 'black'},
    {row:8, cell:3, color: 'black'},
    {row:8, cell:5, color: 'black'},
    {row:8, cell:7, color: 'black'},
]

function renderCheckers(){
    clearBoard()
    $(`.black.cell`).click(moveCheckerHere)
    for(let i=0; i<checkers.length; i++){
        let checker = checkers[i];
        console.log(checker)
        if(checker.row && checker.cell){
            $(`#cell-${checker.row}-${checker.cell}`).html(renderChecker(i, checker.color))
            $(`#cell-${checker.row}-${checker.cell}`).unbind(`click`)
        } else {
            $(`#out-of-play-${checker.color}`).append(renderChecker(i, checker.color))
        }
    }
    $(`.checker`).click(selectChecker)
}

function renderChecker(i, color) {
    return `<div id="checker-${i}" class="checker ${color}-checker"></div`
}

function selectChecker(){
    let checker = $(this)
    if(checker.hasClass('selected')){
        console.log('already selected')
        remove()
        return
    }
    $('.selected').removeClass('selected')

    let id = checker.attr('id')
    let checkerId = id.split('-')[1]
    // console.log('selecting checker: ', checker)
    // console.log(`the id of the checker you selected is ${id}`)
    // console.log(checkerId)
    
    selectedChecker = checkers[checkerId]
    checker.addClass('selected')
}

function remove(){
    selectedChecker.row=undefined
    selectedChecker.cell=undefined        
    selectedChecker = undefined
    renderCheckers()
}