function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import Cover from './components/cover.js';
import BasicGrid from './components/basicgrid.js';
import Header from './script.js';
import Footer from './components/footer.js';
import manifest from '../manifest.js';

var snapshots = [].concat(_toConsumableArray(manifest.snapshots.slice(0, parseInt(manifest.snapshots.length / 2))));

var rowHeight = void 0,
    columns = void 0,
    mobile = void 0;

function handleResize() {

    if (window.innerWidth > 900) {
        rowHeight = 200;
        columns = 3;
        mobile = false;
    } else if (window.innerWidth > 750) {
        rowHeight = 150;
        columns = 3;
        mobile = false;
    } else if (window.innerWidth > 600) {
        rowHeight = 200;
        columns = 2;
        mobile = true;
    } else if (window.innerWidth > 0) {
        rowHeight = 200;
        columns = 1;
        mobile = true;
    }

    ReactDOM.render(React.createElement(BasicGrid, {
        images: [].concat(_toConsumableArray(snapshots)),
        columns: columns,
        gap: 10,
        height: rowHeight,
        openable: true,
        openTime: 500
    }), document.getElementsByTagName('basic-grid')[0]);

    Header(mobile);
    document.getElementById("showMoreButton").onclick = showMore;
}

document.body.onresize = handleResize;
document.body.onload = handleResize;

ReactDOM.render(React.createElement(Cover, {
    images: [].concat(_toConsumableArray(manifest.cover)),
    slideTime: 4000,
    transitionTime: 1000
}), document.getElementsByTagName('cover')[0]);

ReactDOM.render(React.createElement(Footer, null), document.getElementsByTagName('footer')[0]);

function showMore() {
    snapshots = [].concat(_toConsumableArray(manifest.snapshots));

    ReactDOM.render(React.createElement(BasicGrid, {
        images: [].concat(_toConsumableArray(snapshots)),
        columns: columns,
        gap: 10,
        height: rowHeight,
        openable: true,
        openTime: 500
    }), document.getElementsByTagName('basic-grid')[0]);

    document.getElementById("showMoreButton").innerHTML = "VIEW LESS";
    document.getElementById("showMoreButton").onclick = showLess;
}

function showLess() {
    snapshots = [].concat(_toConsumableArray(manifest.snapshots.slice(0, parseInt(manifest.snapshots.length / 2))));

    ReactDOM.render(React.createElement(BasicGrid, {
        images: [].concat(_toConsumableArray(snapshots)),
        columns: columns,
        gap: 10,
        height: rowHeight,
        openable: true,
        openTime: 500
    }), document.getElementsByTagName('basic-grid')[0]);

    document.getElementById("showMoreButton").innerHTML = "VIEW MORE";
    document.getElementById("showMoreButton").onclick = showMore;
}