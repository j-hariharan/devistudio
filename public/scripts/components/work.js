var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import AlbumCovers from './albumcovers.js';
import Nav from './nav.js';
import Youtube from './youtube.js';

var Work = function (_React$Component) {
    _inherits(Work, _React$Component);

    function Work(props) {
        _classCallCheck(this, Work);

        var _this = _possibleConstructorReturn(this, (Work.__proto__ || Object.getPrototypeOf(Work)).call(this, props));

        _this.state = { now: 0 };

        _this.categories = _this.props.manifest.map(function (e) {
            return e.category;
        });

        _this.albums = [];

        var _loop = function _loop(no) {
            var i = _this.props.manifest[no];
            if (i.videos) {
                _this.albums.push(i);
            } else {
                var thisCategory = i.albums.map(function (e, i) {
                    return {
                        title: e.album,
                        cover: e.files[0],
                        link: "./event?category=" + no + "&album=" + i
                    };
                });
                _this.albums.push(thisCategory);
            }
        };

        for (var no in _this.props.manifest) {
            _loop(no);
        }

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(Work, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var categories = this.albums.map(function (e, i) {
                return e.videos ? React.createElement(Youtube, {
                    links: [].concat(_toConsumableArray(e.links)),
                    hidden: i == _this2.state.now ? false : true,
                    key: i.toString()
                }) : React.createElement(AlbumCovers, {
                    albums: [].concat(_toConsumableArray(e)),
                    hidden: i == _this2.state.now ? false : true,
                    key: i.toString(),
                    height: _this2.props.height
                });
            });
            return React.createElement(
                'div',
                null,
                React.createElement(Nav, {
                    categories: this.categories,
                    active: this.state.now,
                    onClick: this.handleClick
                }),
                categories
            );
        }
    }, {
        key: 'handleClick',
        value: function handleClick(i) {
            this.setState({ now: i });
        }
    }]);

    return Work;
}(React.Component);

export default Work;