var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 
 * 
 * 
 * 
 * 
 * Cover class:
 * ------------
 * 
 * 
 * 
 * props = {
 *  images: Array[String],      // contains source attribute of image tags
 *                              // relative to the html document where component is rendered
 *                              // **required
 *  
 *  arrows: Boolean,            // whether to have left and right arrow keys or not
 *                              // *default: False
 * 
 *  dots: Boolean,              // whether to have the dots at the bottom or not
 *                              // *default: False
 * 
 *  dotsClickable: Boolean,     // if dots is True, then whether or not they should be clickable
 *                              // *default: False
 * 
 *  transitionTime: Number,     // time of transition between slides
 *                              // the transition is of changing opacity between 0 and 1
 *                              // in milliseconds
 *                              // *default: 0 (ms)
 * 
 *  slideTime: Number,          // time between transitions, time each slides stays visible
 *                              // in milliseconds
 *                              // *default: 3000 (ms)
 * }
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

var Cover = function (_React$Component) {
    _inherits(Cover, _React$Component);

    function Cover(props) {
        _classCallCheck(this, Cover);

        var _this = _possibleConstructorReturn(this, (Cover.__proto__ || Object.getPrototypeOf(Cover)).call(this, props));

        _this.state = { current: 0

            // bindings
        };return _this;
    }

    _createClass(Cover, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var slides = this.props.images.map(function (e, i) {

                var position = void 0;

                if (e.includes("@")) {
                    if (e.slice(e.indexOf("@") + 1) == "r") position = "left";else position = "right";
                } else position = "center";

                return React.createElement("span", { key: i.toString(), style: {
                        backgroundImage: "url(" + e + ")",
                        backgroundPosition: position,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        height: "100%",
                        width: "100%",
                        opacity: i == _this2.state.current ? 1 : 0,
                        transition: (_this2.props.transitionTime || 0) + "ms"
                    } });
            });

            return React.createElement(
                "div",
                { style: {
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        top: "0px",
                        bottom: "0px"
                    } },
                slides
            );
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this3 = this;

            this.timer = setInterval(function (_) {
                if (_this3.state.current + 1 < _this3.props.images.length) _this3.setState({ current: _this3.state.current + 1 });else _this3.setState({ current: 0 });
            }, this.props.slideTime || 3000);
        }
    }]);

    return Cover;
}(React.Component);

export default Cover;