import manifest from '../manifest.js'

let container = document.getElementById('work')

let activeCategory

let categories = manifest.work


// NAV SECTION
let nav = document.createElement('div')
nav.id = "nav"

categories.map((e, i) => {
    let element = document.createElement('span')
    element.addEventListener('click', () => navCategory(i))
    element.innerText = e.category

    if (i == 0) element.id = "active"

    nav.appendChild(element)
})

container.appendChild(nav)




let albumsContainer = document.createElement('div')
albumsContainer.id = "albums-container"
container.appendChild(albumsContainer)

navCategory(0)

function navCategory(i) {
    if (i == activeCategory) return null

    albumsContainer.innerHTML = ''

    activeCategory = i

    if (!categories[i].videos)
        categories[i].albums.map((e, j) => {
            let element = document.createElement('div')

            let link = document.createElement('a')
            link.href = `./events.html?category=${activeCategory}&album=${j}`
            link.innerText = e.album

            element.classList.add('animate__animated', "animate__zoomIn")

            element.style.backgroundImage = `url(${e.files[0]})`

            element.appendChild(link)
            albumsContainer.appendChild(element)
        })

    else 
        categories[i].links.map((e,i) => {
            let element = document.createElement('iframe')

            element.classList.add("animate__animated", "animate__zoomIn")
            element.src = `https://www.youtube.com/embed/${e.slice(e.indexOf("?v=")+3)}` 
            element.frameBorder = "0"
            element.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            element.allowFullscreen = true

            albumsContainer.appendChild(element)
        })
    

    for (let j = 0; j < nav.children.length; j++) {
        let e = nav.children[j]

        if (j == activeCategory)
            e.id = "active"
        else
            e.id = ""
    }




}

/* 
<iframe
    className = {props.hidden ? "" : "animated zoomIn"}
    src = {props.hidden ? "" : `https://www.youtube.com/embed/${e.slice(e.indexOf("?v=")+3)}`}
    frameBorder = "0"
    allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
/>
*/





/* let categories = [

    {
        category: 'Wedding',
        albums: [
            {
                album: 'Someone weds someone',
                files: []
            },
            {
                album: "someone else + someone else",
                files: []
            }
        ]
    },
    {
        category: "Pre-wedding",
        albums: [
            {
                album: 'Some prewedding',
                files: [],
            },
            {
                album: "another prewedding",
                files: []
            }
        ]
    },
    {
        category: "Short Video",
        videos: true,
        links: []
    },
    {
        category: "Event Photography",
        albums: [
            {
                album: "some album",
                files: []
            },
            {
                album: "some other event",
                files: []
            }
        ]
    }
] */
