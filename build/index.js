'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _siriwave = require('siriwave');

var _siriwave2 = _interopRequireDefault(_siriwave);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Siriwave = function (_Component) {
  (0, _inherits3.default)(Siriwave, _Component);

  function Siriwave(props) {
    (0, _classCallCheck3.default)(this, Siriwave);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Siriwave.__proto__ || (0, _getPrototypeOf2.default)(Siriwave)).call(this, props));

    _this.siriRef = _react2.default.createRef();
    return _this;
  }

  (0, _createClass3.default)(Siriwave, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if ('amplitude' in nextProps && nextProps.amplitude !== this.props.amplitude) {
        return true;
      }
      return false;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.siriWave.setAmplitude(this.props.amplitude);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.siriWave = new _siriwave2.default((0, _extends3.default)({}, this.props, {
        container: this.siriRef.current
      }));

      this.siriWave.start();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.siriWave.stop();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { ref: this.siriRef });
    }
  }]);
  return Siriwave;
}(_react.Component);

Siriwave.defaultProps = {
  width: 640,
  height: 200,
  style: 'ios',
  // ratio: calculated,
  speed: 0.2,
  amplitude: 1,
  frequency: 6,
  color: '#fff',
  cover: false,
  autostart: false,
  pixelDepth: 0.02,
  lerpSpeed: 0.01
};

Siriwave.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  style: _propTypes2.default.oneOf(['ios', 'ios9']),
  ratio: _propTypes2.default.number,
  speed: _propTypes2.default.number,
  amplitude: _propTypes2.default.number,
  frequency: _propTypes2.default.number,
  color: _propTypes2.default.string,
  cover: _propTypes2.default.bool,
  autostart: _propTypes2.default.bool,
  pixelDepth: _propTypes2.default.number,
  lerpSpeed: _propTypes2.default.number
};

exports.default = Siriwave;