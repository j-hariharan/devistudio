var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 
 * 
 * 
 * 
 * BasicGrid class:
 * ----------------
 * 
 * props = {
 *  
 *  images: Array[String],              // array containing source paths of images to be placed in grid
 *                                      // path should be relative to html document where component is rendered
 *                                      // *default - none
 *  
 *  gap: Number,                        // gap between the columns and rows of the grid
 *                                      // in px
 *                                      // *default - 0
 * 
 *  height: Number,                     // height of each row of the grid
 *                                      // in px
 *                                      // *default - 200 (px)
 * 
 *  columns: Number,                    // number of columns
 *                                      // *default - 1
 * 
 *  openable: Boolean,                  // whether or not user can click on image to enlarge it
 *                                      // *default - false
 * 
 *  openTime: Number,                   // time to enlarge the image
 *                                      // only works if openable is set to true
 *                                      // in milliseconds
 *                                      // *default - 0
 * 
 * }
 * 
 * 
 */

/* 
export default class BasicGrid extends React.Component {

    constructor (props) {
        super(props)

        this.ref = React.createRef()
    }

    render () {

        if (this.props.images) {
            this.tiles = this.props.images.map((e,i) => (
                <span 
                key = {i.toString()} 
                style = {{
                    backgroundImage: `url(${this.props.images[i]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                    width: "100%",
                    gridColumn: `${i%(this.props.columns || 1) + 1}`,
                    gridRow: `${parseInt((i)/(this.props.columns || 1)) + 1}`,
                    cursor: this.props.openable && "pointer"
                }}
                onClick = { this.props.openable && (_ => this.handleClick(i))} />
            ))
        }

        this.columns = ""
        for(let i=0 ; i< (this.props.columns || 1) ; i++) this.columns += "1fr "
        
        return (
            <div style = {{
                width: "100%",
                display: "grid",
                gridTemplateColumns: this.columns,
                gridAutoRows: `${this.props.height || 200}px`,
                gridGap: `${this.props.gap || 0}px`
            }} ref = {this.ref}>
                {this.tiles}
            </div>
        )
    }

    handleClick (i) {

        let tile = this.ref.current.children[i]

        if (!this.opened) {
            
            let keyframes = [
                {position: "fixed", left: tile.offsetLeft-window.pageXOffset+"px" , top: tile.offsetTop-window.pageYOffset+"px", zIndex: "0", backgroundSize: "contain", height: tile.offsetHeight+"px", width: tile.offsetWidth+"px", backgroundColor: "white"},
                {position: "fixed", left: "0px", top: "0px", zIndex: "2", backgroundSize: "contain", height: "100%", width: "100%", backgroundColor: "white"}
            ]
            let timing = {
                duration: this.props.openTime || 0,
                fill: "forwards",
                iterations: 1
            }

            document.body.style.overflow = "hidden"
            document.body.style.height = "100vh"
            
            this.opened = tile.animate(keyframes, timing)
        }

        else {
            this.opened.reverse()
            this.opened = false

            document.body.style.overflow = "scroll"
            document.body.style.height = "100%"
        }
    }

}
 */

var BasicGrid = function (_React$Component) {
    _inherits(BasicGrid, _React$Component);

    function BasicGrid(props) {
        _classCallCheck(this, BasicGrid);

        var _this = _possibleConstructorReturn(this, (BasicGrid.__proto__ || Object.getPrototypeOf(BasicGrid)).call(this, props));

        _this.state = { open: false, prev: 0 };

        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        _this.moveLeft = _this.moveLeft.bind(_this);
        _this.moveRight = _this.moveRight.bind(_this);
        _this.keyClicked = _this.keyClicked.bind(_this);

        return _this;
    }

    _createClass(BasicGrid, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var images = this.props.images.map(function (e, i) {
                return React.createElement("img", { src: e, style: {
                        width: "100%",
                        padding: _this2.props.gap / 2 + "px",
                        cursor: "pointer"
                    }, key: i.toString(), onClick: function onClick() {
                        return _this2.handleClick(i);
                    } });
            });

            return React.createElement(
                "div",
                { style: {
                        width: "100%",
                        columnCount: this.props.columns,
                        columnGap: this.props.gap + "px",
                        columnFill: "balance"
                    } },
                images,
                React.createElement(
                    "div",
                    { style: {
                            position: "fixed",
                            top: "0px",
                            left: "0px",
                            width: "100vw",
                            height: "100vh",
                            transform: this.state.open !== false ? "translateY(0px)" : "translateY(-100vh)",
                            transition: "500ms",
                            zIndex: 2,
                            backgroundColor: "rgba(0,0,0,0.8)"
                        } },
                    React.createElement("img", { src: this.props.images[this.state.open] || this.props.images[this.state.prev], style: {
                            objectFit: "contain",
                            height: "100%",
                            width: "100%"
                        } }),
                    React.createElement("img", { src: "./images/static/icons/close.png", style: {
                            display: this.state.open !== false ? "" : "none",
                            position: "fixed",
                            top: "20px",
                            right: "20px",
                            height: "50px",
                            cursor: "pointer"
                        }, onClick: this.handleClose }),
                    React.createElement(
                        "span",
                        { onClick: this.moveRight, style: {
                                color: "white",
                                fontFamily: "Arial, Helvetica, sans-serif",
                                fontWeight: 900,
                                height: "50px",
                                position: "fixed",
                                top: "48%",
                                right: "20px",
                                fontSize: "30px",
                                cursor: "pointer",
                                padding: "5px 20px",
                                borderRadius: "5px",
                                backgroundColor: "rgba(0,0,0,0.8)"
                            } },
                        ">"
                    ),
                    React.createElement(
                        "span",
                        { onClick: this.moveLeft, style: {
                                color: "white",
                                fontFamily: "Arial, Helvetica, sans-serif",
                                fontWeight: 900,
                                height: "50px",
                                position: "fixed",
                                top: "48%",
                                left: "20px",
                                fontSize: "30px",
                                cursor: "pointer",
                                userSelect: "none",
                                padding: "5px 20px",
                                borderRadius: "5px",
                                backgroundColor: "rgba(0,0,0,0.8)"
                            } },
                        "<"
                    )
                )
            );
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            document.body.addEventListener("keydown", this.keyClicked);
        }
    }, {
        key: "handleClick",
        value: function handleClick(i) {
            document.body.style.overflow = "hidden";
            this.setState({ open: i, prev: i });
        }
    }, {
        key: "handleClose",
        value: function handleClose() {
            document.body.style.overflow = "";
            this.setState({ open: false });
        }
    }, {
        key: "moveRight",
        value: function moveRight() {
            this.setState({ open: this.state.open + 1 < this.props.images.length ? this.state.open + 1 : 0 });
        }
    }, {
        key: "moveLeft",
        value: function moveLeft() {
            this.setState({ open: this.state.open > 0 ? this.state.open - 1 : this.props.images.length });
        }
    }, {
        key: "keyClicked",
        value: function keyClicked(e) {
            if (this.state.open !== false) if (e.key == "ArrowRight") this.moveRight();else if (e.key == "ArrowLeft") this.moveLeft();
        }
    }]);

    return BasicGrid;
}(React.Component);

export default BasicGrid;