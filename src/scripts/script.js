import Header from './components/header.js'

export default function renderHeader (mobile) {
    if (document.getElementsByTagName('header')[0]) 
        ReactDOM.render(
            <Header 
                logo = "./images/static/icons/logo.png"
                navElements = {["HOME", "OUR WORK", "ABOUT US", "CONTACT US"]}
                navLinks = {["./", "./work.html", "./about.html", "./contact.html"]}
                mobile = {mobile}
                ham = './images/static/icons/ham.png'
                height = {mobile ? window.innerHeight*10/100 : window.innerHeight*7/100}
            />,
            document.getElementsByTagName('header')[0]
        )
}