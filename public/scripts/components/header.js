var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 
 * 
 * 
 * Header class:
 * -------------
 * 
 * 
 * props = {
 *  
 * 
 *  logo: String,                   // source of the logo image
 *                                  // relative to the html document where component is rendered
 *                                  // to be placed in the left
 *                                  // *default - none
 * 
 *  navElements: Array[String],     // contains the text to be displyed in the nav
 *                                  // each of these is a link
 *                                  // *default - none
 * 
 *  navLinks: Array[String],        // href of the link for each nav element
 *                                  // taken respective to the navElements
 *                                  // *default - "#"
 * 
 * }
 * 
 * 
 * 
 * 
 * 
 * 
 */

/* export default class Header extends React.Component {


    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.state = { open: false }
    }
    render () {

        if (this.props.navElements && !this.props.mobile) {
            this.links = this.props.navElements.map((e,i) => (
                <a href = {(this.props.navLinks && this.props.navLinks[i]) || "#"} style = {{
                    color: "inherit",
                    fontWeight: "bold",
                    fontSize: "100%",
                    textDecoration: "none",
                }} key = {this.props.navElements[i].toString()}>
                    {this.props.navElements[i]}
                </a>
            ))

            this.body = (
                <div style = {{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }} >
    
                    <img src = {this.props.logo} style = {{
                        height: "75%",
                        marginLeft: "40px"
                    }} />
    
                    
                    <span style = {{
                        width: "60%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}>
                        {this.links}
                    </span>
                    
                </div>
            )
        }

        else if (this.props.navElements) {

            this.links = this.props.navElements.map((e,i) => {
                <a href = {(this.props.navLinks && this.props.navLinks[i]) || "#"} style = {{
                    color: "inherit",
                    fontWeight: "bold",
                    fontSize: "100%",
                    textDecoration: "none",
                    width: "100%",
                    height: "20%"
                }} key = {this.props.navElements[i].toString()}>
                    {this.props.navElements[i]}
                </a>
            })

            this.body = (

                <div style = {{
                    width: "100%",
                    height: this.state.open ? "500%" : "100%",
                    overflow: "hidden"
                }}>
                    <div style = {{
                        height: this.state.open ? "20%" :"100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }} >

                        <img src = {this.props.logo} style = {{
                            height: "75%",
                            marginLeft: "20px"
                        }} />

                        <img src = {this.props.ham} style = {{
                            height: "60%",
                            marginRight: "20px"
                        }}  onClick = {this.handleClick} />
                    </div>

                    <div style = {{
                        display: "block",
                        flexDirection: "column",
                        width: "200px",
                        height: "80%"
                    }}>
                        {this.links}
                    </div>
                </div>
            )
        }


        return this.body
    }


    handleClick () {
        this.setState( {open: !this.state.open} )
    }
} */

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.state = { open: false };
        _this.handleClick = _this.handleClick.bind(_this);

        _this.ref = React.createRef();
        return _this;
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            if (this.props.mobile) {

                this.links = this.props.navElements.map(function (e, i) {
                    return React.createElement(
                        "a",
                        {
                            href: _this2.props.navLinks[i],
                            key: i.toString(),
                            style: {
                                width: "95%",
                                padding: "20px 0px",
                                margin: "0px auto",
                                fontWeight: "bold",
                                color: "inherit",
                                fontSize: "inherit",
                                textDecoration: "none",
                                display: "block",
                                borderTop: "0.5px solid #cccccc",
                                textAlign: "center"
                            }
                        },
                        e
                    );
                });

                return React.createElement(
                    "div",
                    { style: {
                            width: "100%"
                        } },
                    React.createElement(
                        "div",
                        { style: {
                                display: "flex",
                                width: "100%",
                                height: this.props.height + "px",
                                justifyContent: "space-between",
                                alignItems: "center"
                            } },
                        React.createElement("img", { src: this.props.logo, style: {
                                height: "75%",
                                marginLeft: "25px"
                            } }),
                        React.createElement("img", { src: this.props.ham, style: {
                                height: "75%",
                                marginRight: "25px"
                            }, onClick: this.handleClick })
                    ),
                    React.createElement(
                        "div",
                        { style: {
                                width: "100%",
                                height: this.state.open ? this.ref.current.children[0].offsetHeight * this.props.navElements.length : "0px",
                                transition: "1s",
                                overflow: "hidden"
                            }, ref: this.ref },
                        this.links
                    )
                );
            } else {
                this.links = this.props.navElements.map(function (e, i) {
                    return React.createElement(
                        "a",
                        {
                            href: _this2.props.navLinks[i],
                            key: i.toString(),
                            style: {
                                fontWeight: "600",
                                color: "inherit",
                                fontSize: "inherit",
                                textDecoration: "none"
                            }
                        },
                        e
                    );
                });

                return React.createElement(
                    "div",
                    { style: { width: "100%" } },
                    React.createElement(
                        "div",
                        { style: {
                                display: "flex",
                                width: "100%",
                                height: this.props.height + "px",
                                justifyContent: "space-between"
                            }
                        },
                        React.createElement("img", { src: this.props.logo, style: {
                                height: "140%",
                                margin: "15px 0px 0px 25px"
                            } }),
                        React.createElement(
                            "div",
                            { style: {
                                    width: "60%",
                                    display: "flex",
                                    height: "100%",
                                    justifyContent: "space-evenly",
                                    alignItems: "center"
                                } },
                            this.links
                        )
                    )
                );
            }
        }
    }, {
        key: "handleClick",
        value: function handleClick() {
            this.setState({ open: !this.state.open });
        }
    }]);

    return Header;
}(React.Component);

export default Header;