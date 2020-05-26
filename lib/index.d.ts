import React, { Component } from 'react';
interface PlayerProps {
    width?: number;
    height?: number;
    style?: 'ios' | 'ios9';
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
    render(): JSX.Element;
}
export default Siriwave;
