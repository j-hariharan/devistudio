import Header from './script.js';
import Footer from './components/footer.js';

document.body.onresize = handleResize;
document.body.onload = handleResize;

function handleResize() {
    var mobile = void 0;

    if (window.innerWidth > 750) mobile = false;else mobile = true;

    Header(mobile);
}

ReactDOM.render(React.createElement(Footer, null), document.getElementsByTagName('footer')[0]);