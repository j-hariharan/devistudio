import Cover from './components/cover.js'
import BasicGrid from './components/basicgrid.js'
import Header from './script.js'
import Footer from './components/footer.js'
import manifest from '../manifest.js'

let snapshots = [...manifest.snapshots.slice(0, parseInt(manifest.snapshots.length/2))]

let rowHeight, columns, mobile

function handleResize () {

    

    if (window.innerWidth > 900) {
        rowHeight = 200
        columns = 3
        mobile = false
    }
    else if (window.innerWidth > 750) {
        rowHeight = 150
        columns = 3
        mobile = false
    }
    else if (window.innerWidth > 600) {
        rowHeight = 200
        columns = 2
        mobile = true
    }
    else if (window.innerWidth > 0) {
        rowHeight = 200
        columns = 1
        mobile = true
    }
    
    ReactDOM.render(
        <BasicGrid 
            images = {[...snapshots]}
            columns = {columns}
            gap = {10}
            height = {rowHeight}
            openable = {mobile}
            openTime = {500}
        />,
        document.getElementsByTagName('basic-grid')[0]
    )

    Header(mobile)
    document.getElementById("showMoreButton").onclick = showMore
}

document.body.onresize = handleResize
document.body.onload = handleResize

ReactDOM.render(
    <Cover 
        images = {[...manifest.cover]}
        slideTime = {4000}
        transitionTime = {1000}
    />,
    document.getElementsByTagName('cover')[0]
)

ReactDOM.render(
    <Footer />,
    document.getElementsByTagName('footer')[0]
)

function showMore () {
    snapshots = [...manifest.snapshots]

    ReactDOM.render(
        <BasicGrid 
            images = {[...snapshots]}
            columns = {columns}
            gap = {10}
            height = {rowHeight}
            openable = {mobile}
            openTime = {500}
        />,
        document.getElementsByTagName('basic-grid')[0]
    )

    document.getElementById("showMoreButton").innerHTML = "VIEW LESS"
    document.getElementById("showMoreButton").onclick = showLess
}


function showLess () {
    snapshots = [...manifest.snapshots.slice(0, parseInt(manifest.snapshots.length/2))]

    ReactDOM.render(
        <BasicGrid 
            images = {[...snapshots]}
            columns = {columns}
            gap = {10}
            height = {rowHeight}
            openable = {mobile}
            openTime = {500}
        />,
        document.getElementsByTagName('basic-grid')[0]
    )

    document.getElementById("showMoreButton").innerHTML = "VIEW MORE"
    document.getElementById("showMoreButton").onclick = showMore
}