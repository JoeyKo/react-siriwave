import React, { Component } from 'react';
declare type StyleTypes = 'ios' | 'ios9';
interface PlayerProps {
    width?: number;
    height?: number;
    style?: StyleTypes;
    ratio?: number;
    speed?: number;
    amplitude?: number;
    frequency?: number;
    color?: string;
    cover?: boolean;
    autostart?: boolean;
    pixelDepth?: number;
    lerpSpeed?: number;
    curveDefinition?: any;
}
declare class Siriwave extends Component<PlayerProps> {
    siriWave: any;
    siriRef: React.RefObject<HTMLDivElement>;
    static defaultProps: PlayerProps;
    shouldComponentUpdate(nextProps: PlayerProps): boolean;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    /**
     * Start the animation
     */
    start(): void;
    /**
     * Stop the animation
     */
    stop(): void;
    render(): JSX.Element;
}
export default Siriwave;
