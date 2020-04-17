import Header from './script.js'
import BasicGrid from './components/basicgrid.js'
import manifest from '../manifest.js'
import Footer from './components/footer.js'

let url = new URL(document.location.href)
let searchparams = url.searchParams
let category = searchparams.get("category")
let album = searchparams.get("album")

if (!category || !album) window.location = "./work"
if (!manifest.work[category] || !manifest.work[category].albums[album] || manifest.work[category].albums[album].videos) window.location = "./work"

let images = manifest.work[category].albums[album].files
let heading = manifest.work[category].albums[album].album

ReactDOM.render(
    <h1>{heading}</h1>,
    document.getElementsByTagName("heading")[0]
)


ReactDOM.render(
    <Footer />,
    document.getElementsByTagName('footer')[0]
)

let columns, mobile

function handleResize () {
    
    if (window.innerWidth > 900) {
        columns = 3
        mobile = false
    }
    else if (window.innerWidth > 750) {
        columns = 3
        mobile = false
    }
    else if (window.innerWidth > 600) {
        columns = 2
        mobile = true
    }
    else if (window.innerWidth > 0) {
        columns = 1
        mobile = true
    }
    
    ReactDOM.render(
        <BasicGrid 
            images = {[...images]}
            columns = {columns}
            gap = {10}
            openable = {mobile}
            openTime = {500}
        />,
        document.getElementsByTagName('basic-grid')[0]
    )

    Header(mobile)
}

document.body.onresize = handleResize
document.body.onload = handleResize