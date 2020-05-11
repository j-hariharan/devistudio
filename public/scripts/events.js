import manifest from '../manifest.js'

let url = new URL(document.location.href);
let searchparams = url.searchParams;
let categoryNo = searchparams.get("category");
let albumNo = searchparams.get("album");

let album = manifest.work[categoryNo].albums[albumNo]

document.getElementsByClassName('heading')[0].innerText = album.album

let grid = document.getElementById('grid')

for (let i in album.files) {
    let file = album.files[i]
    let element = document.createElement('img')
    element.src = file
    element.alt = `Image ${i}`
    element.onclick = () => openModal(i)
    
    grid.appendChild(element)
}

