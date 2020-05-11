import manifest from '../manifest.js'

let coverContainer = document.getElementsByTagName('cover')[0]
let coverPics = []

let coverImages = [...manifest.cover]

coverImages.map(e => {
    let div = document.createElement('div')
    div.style.backgroundImage = `url(${e})`
    coverContainer.appendChild(div)
    coverPics.push(div)
})

let active = 0
coverPics[active].id = "active"

let timer = setInterval(() => {
    coverPics[active].id = ""
    active++
    
    if (active >= coverPics.length) active = 0

    coverPics[active].id = "active"
}, 5000)