import Header from './script.js'
import Footer from './components/footer.js'
import Work from './components/work.js'
import manifest from '../manifest.js'

function handleResize () {

    let height, mobile

    if (window.innerWidth > 750) {
        mobile = false
        height = 400
    }
    else if (window.innerWidth > 600) {
        mobile = true
        height = 350
    }
    else if (window.innerWidth > 500) {
        mobile = true
        height = 300
    }
    else if (window.innerWidth > 0) {
        mobile = true
        height = 200
    }
    
    

    Header(mobile)

    ReactDOM.render(
        <Work 
            manifest = {manifest.work}
        />,
        document.getElementsByTagName('work')[0]
    )
}

document.body.onresize = handleResize
document.body.onload = handleResize



ReactDOM.render(
    <Footer />,
    document.getElementsByTagName('footer')[0]
)




















