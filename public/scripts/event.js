import Header from './script.js';
import BasicGrid from './components/basicgrid.js';
import manifest from '../manifest.js';

var mobile = false;

Header(mobile);

ReactDOM.render(React.createElement(BasicGrid, {
    images: []
}), document.getElementsByTagName('basic-grid')[0]);