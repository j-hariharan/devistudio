import Header from './script.js'
import BasicGrid from './components/basicgrid.js'
import manifest from '../manifest.js'

let mobile = false

Header(mobile)

ReactDOM.render(
    <BasicGrid 
        images = {[]}
    />,
    document.getElementsByTagName('basic-grid')[0]
)