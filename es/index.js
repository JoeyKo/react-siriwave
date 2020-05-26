import _extends from "@babel/runtime/helpers/extends";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import SiriWave from 'siriwave';

var Siriwave = function (_Component) {
  _inheritsLoose(Siriwave, _Component);

  function Siriwave() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "siriWave", void 0);

    _defineProperty(_assertThisInitialized(_this), "siriRef", React.createRef());

    return _this;
  }

  var _proto = Siriwave.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    if ('amplitude' in nextProps && nextProps.amplitude !== this.props.amplitude) {
      return true;
    }

    return false;
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.siriWave.setAmplitude(this.props.amplitude);
  };

  _proto.componentDidMount = function componentDidMount() {
    this.siriWave = new SiriWave(_extends(_extends({}, this.props), {}, {
      container: this.siriRef.current
    }));
    this.siriWave.start();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.siriWave.stop();
  };

  _proto.render = function render() {
    return React.createElement("div", {
      ref: this.siriRef
    });
  };

  return Siriwave;
}(Component);

_defineProperty(Siriwave, "defaultProps", {
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

export default Siriwave;