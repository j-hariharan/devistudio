function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import Header from './script.js';
import BasicGrid from './components/basicgrid.js';
import manifest from '../manifest.js';
import Footer from './components/footer.js';

var url = new URL(document.location.href);
var searchparams = url.searchParams;
var category = searchparams.get("category");
var album = searchparams.get("album");

if (!category || !album) window.location = "./work";
if (!manifest.work[category] || !manifest.work[category].albums[album] || manifest.work[category].albums[album].videos) window.location = "./work";

var images = manifest.work[category].albums[album].files;
var heading = manifest.work[category].albums[album].album;

ReactDOM.render(React.createElement(
    'h1',
    null,
    heading
), document.getElementsByTagName("heading")[0]);

ReactDOM.render(React.createElement(Footer, null), document.getElementsByTagName('footer')[0]);

var columns = void 0,
    mobile = void 0;

function handleResize() {

    if (window.innerWidth > 900) {
        columns = 3;
        mobile = false;
    } else if (window.innerWidth > 750) {
        columns = 3;
        mobile = false;
    } else if (window.innerWidth > 600) {
        columns = 2;
        mobile = true;
    } else if (window.innerWidth > 0) {
        columns = 1;
        mobile = true;
    }

    ReactDOM.render(React.createElement(BasicGrid, {
        images: [].concat(_toConsumableArray(images)),
        columns: columns,
        gap: 10,
        openable: true,
        openTime: 500
    }), document.getElementsByTagName('basic-grid')[0]);

    Header(mobile);
}

document.body.onresize = handleResize;
document.body.onload = handleResize;