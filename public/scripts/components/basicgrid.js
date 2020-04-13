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

var BasicGrid = function (_React$Component) {
    _inherits(BasicGrid, _React$Component);

    function BasicGrid(props) {
        _classCallCheck(this, BasicGrid);

        var _this = _possibleConstructorReturn(this, (BasicGrid.__proto__ || Object.getPrototypeOf(BasicGrid)).call(this, props));

        _this.ref = React.createRef();
        return _this;
    }

    _createClass(BasicGrid, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            if (this.props.images) {
                this.tiles = this.props.images.map(function (e, i) {
                    return React.createElement("span", {
                        key: i.toString(),
                        style: {
                            backgroundImage: "url(" + _this2.props.images[i] + ")",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            height: "100%",
                            width: "100%",
                            gridColumn: "" + (i % (_this2.props.columns || 1) + 1),
                            gridRow: "" + (parseInt(i / (_this2.props.columns || 1)) + 1),
                            cursor: _this2.props.openable && "pointer"
                        },
                        onClick: _this2.props.openable && function (_) {
                            return _this2.handleClick(i);
                        } });
                });
            }

            this.columns = "";
            for (var i = 0; i < (this.props.columns || 1); i++) {
                this.columns += "1fr ";
            }return React.createElement(
                "div",
                { style: {
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: this.columns,
                        gridAutoRows: (this.props.height || 200) + "px",
                        gridGap: (this.props.gap || 0) + "px"
                    }, ref: this.ref },
                this.tiles
            );
        }
    }, {
        key: "handleClick",
        value: function handleClick(i) {

            var tile = this.ref.current.children[i];

            if (!this.opened) {

                var keyframes = [{ position: "fixed", left: tile.offsetLeft - window.pageXOffset + "px", top: tile.offsetTop - window.pageYOffset + "px", zIndex: "0", backgroundSize: "contain", height: tile.offsetHeight + "px", width: tile.offsetWidth + "px", backgroundColor: "white" }, { position: "fixed", left: "0px", top: "0px", zIndex: "2", backgroundSize: "contain", height: "100%", width: "100%", backgroundColor: "white" }];
                var timing = {
                    duration: this.props.openTime || 0,
                    fill: "forwards",
                    iterations: 1
                };

                document.body.style.overflow = "hidden";
                document.body.style.height = "100vh";

                this.opened = tile.animate(keyframes, timing);
            } else {
                this.opened.reverse();
                this.opened = false;

                document.body.style.overflow = "scroll";
                document.body.style.height = "100%";
            }
        }
    }]);

    return BasicGrid;
}(React.Component);

export default BasicGrid;