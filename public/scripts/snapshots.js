import manifest from '../manifest.js'

let container = document.getElementById('grid')
let snapshotsImages = [...manifest.snapshots]

// './images/dynamic/snapshots/001.jpg', './images/dynamic/snapshots/004.jpg', './images/dynamic/snapshots/006.jpg', './images/dynamic/snapshots/008.jpg', './images/dynamic/snapshots/010.jpg', './images/dynamic/snapshots/011.jpg', './images/dynamic/snapshots/014.jpg', './images/dynamic/snapshots/016.jpg', './images/dynamic/snapshots/018.jpg', './images/dynamic/snapshots/021.jpg', './images/dynamic/snapshots/022.jpg', './images/dynamic/snapshots/023.jpg', './images/dynamic/snapshots/1.jpg', './images/dynamic/snapshots/10.jpg', './images/dynamic/snapshots/1E6A7919.jpg', './images/dynamic/snapshots/1E6A8764.jpg', './images/dynamic/snapshots/1E6A9150.jpg', './images/dynamic/snapshots/5H6A1024.jpg', './images/dynamic/snapshots/5H6A2552.jpg', './images/dynamic/snapshots/5H6A8670.jpg', './images/dynamic/snapshots/5K9A0765.jpg', './images/dynamic/snapshots/5K9A1095.jpg', './images/dynamic/snapshots/MCPG8352.jpg', './images/dynamic/snapshots/_E8A3617.jpg', './images/dynamic/snapshots/_E8A3724.jpg', './images/dynamic/snapshots/_E8A3847.jpg', './images/dynamic/snapshots/_E8A393.jpg', './images/dynamic/snapshots/__SL8381.jpg', './images/dynamic/snapshots/__SL9484.jpg'


for (let index in snapshotsImages.slice(0, parseInt(snapshotsImages.length / 2))) {
    let i = snapshotsImages[index]
    let img = document.createElement('img')
    img.src = i
    img.alt = `Image ${index}`
    img.onclick = () => openModal(index)

    container.appendChild(img)
}

document.getElementById('viewMore').addEventListener('click', viewMore)

function viewMore () {
    for (let i of snapshotsImages.slice(parseInt(snapshotsImages.length / 2), snapshotsImages.length)) {
        let img = document.createElement('img')
        img.src = i

        container.appendChild(img)
    }
    document.getElementById('viewMore').style.display = "none"

    for (let i=0 ; i<container.children.length ; i++) {
        let element = container.children[i]
        element.alt = `Image ${i}`
        element.onclick = () => openModal(i)
    }
}

