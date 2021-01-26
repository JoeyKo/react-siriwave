"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _siriwave = _interopRequireDefault(require("siriwave"));

var Siriwave = function (_Component) {
  (0, _inheritsLoose2.default)(Siriwave, _Component);

  function Siriwave() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "siriWave", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "siriRef", _react.default.createRef());
    return _this;
  }

  var _proto = Siriwave.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    if ('amplitude' in nextProps && nextProps.amplitude !== this.props.amplitude || 'speed' in nextProps && nextProps.speed !== this.props.speed) {
      return true;
    }

    return false;
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.siriWave.setSpeed(this.props.speed);
    this.siriWave.setAmplitude(this.props.amplitude);
  };

  _proto.componentDidMount = function componentDidMount() {
    this.siriWave = new _siriwave.default((0, _extends2.default)((0, _extends2.default)({}, this.props), {}, {
      container: this.siriRef.current
    }));
    this.siriWave.start();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.siriWave.dispose();
  };

  _proto.start = function start() {
    this.siriWave.start();
  };

  _proto.stop = function stop() {
    this.siriWave.stop();
  };

  _proto.render = function render() {
    return _react.default.createElement("div", {
      ref: this.siriRef
    });
  };

  return Siriwave;
}(_react.Component);

(0, _defineProperty2.default)(Siriwave, "defaultProps", {
  style: 'ios',
  width: 640,
  height: 200,
  speed: 0.2,
  amplitude: 1,
  frequency: 6,
  color: '#fff',
  cover: false,
  autostart: false,
  pixelDepth: 0.02,
  lerpSpeed: 0.01,
  curveDefinition: null
});
var _default = Siriwave;
exports.default = _default;