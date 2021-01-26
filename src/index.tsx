import React, { Component } from 'react';
import SiriWave from 'siriwave';

// type ICurveDefinition {

// }
type StyleTypes = 'ios' | 'ios9';

interface PlayerProps {
  width?: number,
  height?: number,
  style?: StyleTypes,
  ratio?: number,
  speed?: number,
  amplitude?: number,
  frequency?: number,
  color?: string,
  cover?: boolean,
  autostart?: boolean,
  pixelDepth?: number,
  lerpSpeed?: number,
  curveDefinition?: any // ICurveDefinition[]
}

class Siriwave extends Component<PlayerProps> {
  siriWave: any
  
  siriRef: React.RefObject<HTMLDivElement> = React.createRef();

  static defaultProps: PlayerProps = {
    style: 'ios',
    width: 640,
    height: 200,
    // ratio: calculated,
    speed: 0.2,
    amplitude: 1,
    frequency: 6,
    color: '#fff',
    cover: false,
    autostart: false,
    pixelDepth: 0.02,
    lerpSpeed: 0.01,
    curveDefinition: null
  }

  shouldComponentUpdate(nextProps: PlayerProps) {
    if (('amplitude' in nextProps && nextProps.amplitude !== this.props.amplitude) 
      || ('speed' in nextProps && nextProps.speed !== this.props.speed)) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    this.siriWave.setSpeed(this.props.speed);
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
    this.siriWave.dispose()
  }

  /**
   * Start the animation
   */
  public start() {
    this.siriWave.start();
  }

  /**
   * Stop the animation
   */
  public stop() {
    this.siriWave.stop();
  }

  render() {
    return (
      <div ref={this.siriRef}></div>
    );
  }
}

export default Siriwave;
