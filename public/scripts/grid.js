let modal = document.getElementById('grid-modal')
let img = modal.children[0]
let grid = document.getElementById('grid')

let left = modal.children[2]
let right = modal.children[3]

left.onclick = moveLeft
right.onclick = moveRight

let close = modal.children[1]
close.onclick = closeModal

let i

document.body.onkeydown = keyDown

function openModal (index) {
    i=parseInt(index)
    let src = grid.children[i].src
    img.src = src
    modal.className = "opened"
    document.body.style.overflowY = "hidden"
}

function closeModal () {
    modal.className = "closed"
    document.body.style.overflowY = "scroll"
}

function moveLeft () {
    if (i==0) i = grid.children.length-1
    else i-=1

    img.src = grid.children[i].src
}

function moveRight () {
    if (i==grid.children.length-1) i=0
    else i+=1
    img.src = grid.children[i].src
}

function keyDown (e) {
    if(e.key == "ArrowRight") moveRight()
    else if (e.key == "ArrowLeft") moveLeft()
}