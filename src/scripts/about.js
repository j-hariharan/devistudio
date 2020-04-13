import Header from './script.js'
import Footer from './components/footer.js'

document.body.onresize = handleResize
document.body.onload = handleResize

function handleResize () {
    let mobile

    if (window.innerWidth > 750) mobile = false
    else mobile = true

    Header(mobile)
}


ReactDOM.render(
    <Footer />,
    document.getElementsByTagName('footer')[0]
)