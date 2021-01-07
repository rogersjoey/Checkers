function toggle(cell) {
    let red = cell.children[0]
    let black = cell.children[1]

    if(!red.hidden && black.hidden){
        // red on, turn off
        red.hidden = true
        black.hidden = false
    } else if(red.hidden && !black.hidden){
        //black on, turn off
        red.hidden = true
        black.hidden = true
    } else if(red.hidden && black.hidden){
        //both are off turn black on 
        red.hidden = false
        black.hidden = true
    } 
}