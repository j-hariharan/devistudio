let coverContainer = document.getElementsByTagName('cover')[0]
let coverPics = coverContainer.children

let active = 0

let timer = setInterval(() => {
    coverPics[active].id = ""
    active++
    
    if (active >= coverPics.length) active = 0

    coverPics[active].id = "active"
}, 5000)