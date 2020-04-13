var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* {
    albums: [
        {
            cover: "src of cover image",
            title: "title",
            subTitle: "sub-title",
            link: "href link of <a>"
        }

    ],
    height: Number,
} */

var AlbumCovers = function (_React$Component) {
    _inherits(AlbumCovers, _React$Component);

    function AlbumCovers(props) {
        _classCallCheck(this, AlbumCovers);

        return _possibleConstructorReturn(this, (AlbumCovers.__proto__ || Object.getPrototypeOf(AlbumCovers)).call(this, props));
    }

    _createClass(AlbumCovers, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var tiles = this.props.albums.map(function (e, i) {
                var _ref2;

                return React.createElement(
                    "div",
                    { style: _defineProperty({
                            backgroundImage: "url(" + e.cover + ")",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            margin: "10px",
                            borderRadius: "10px",
                            cursor: "pointer"
                        }, "margin", "20px 0px"), key: i.toString(), className: _this2.props.hidden ? "" : "animated zoomIn" },
                    React.createElement(
                        "a",
                        { href: e.link, style: (_ref2 = {
                                display: "block",
                                backgroundColor: "black",
                                opacity: "0.7",
                                height: "100%",
                                width: "100%"
                            }, _defineProperty(_ref2, "display", "flex"), _defineProperty(_ref2, "justifyContent", "center"), _defineProperty(_ref2, "alignItems", "center"), _defineProperty(_ref2, "flexDirection", "column"), _defineProperty(_ref2, "borderRadius", "10px"), _defineProperty(_ref2, "textDecoration", "none"), _ref2) },
                        React.createElement(
                            "h1",
                            { style: {
                                    color: "white",
                                    fontWeight: 600,
                                    margin: "0px",
                                    lineHeight: "1.1em"
                                } },
                            e.title
                        ),
                        React.createElement(
                            "h2",
                            { style: {
                                    color: "white",
                                    fontWeight: 500,
                                    fontSize: _this2.props.height > 200 ? "35px" : "25px",
                                    margin: "0px",
                                    lineHeight: "1.1em"
                                } },
                            e.subTitle
                        )
                    )
                );
            });

            return React.createElement(
                "div",
                { style: {
                        height: "100%",
                        width: "100%",
                        display: this.props.hidden ? "none" : "block"
                    }, id: "work-albums-container" },
                tiles
            );
        }
    }]);

    return AlbumCovers;
}(React.Component);

export default AlbumCovers;