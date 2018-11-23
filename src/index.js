import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SiriWave from 'siriwave';

class Siriwave extends Component {
  constructor(props) {
    super(props);
    this.siriRef = React.createRef();
  }

  shouldComponentUpdate(nextProps) {
    if ('amplitude' in nextProps && nextProps.amplitude !== this.props.amplitude) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    this.siriWave.setAmplitude(this.props.amplitude);
  }

  componentDidMount() {
    this.siriWave = new SiriWave({
      ...this.props,
      container: this.siriRef.current,
    });

    this.siriWave.start();
  }

  componentWillUnmount() {
    this.siriWave.stop()
  }

  render() {
    return (
      <div ref={this.siriRef}></div>
    );
  }
}

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
  lerpSpeed: 0.01,
};

Siriwave.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.oneOf(['ios', 'ios9']),
  ratio: PropTypes.number,
  speed: PropTypes.number,
  amplitude: PropTypes.number,
  frequency: PropTypes.number,
  color: PropTypes.string,
  cover: PropTypes.bool,
  autostart: PropTypes.bool,
  pixelDepth: PropTypes.number,
  lerpSpeed: PropTypes.number,
};

export default Siriwave;
