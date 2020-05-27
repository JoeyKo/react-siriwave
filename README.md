# React-SiriWave

[![NPM Package](https://img.shields.io/npm/v/react-siriwave.svg)](https://www.npmjs.com/package/react-siriwave)
[![Build Status](https://travis-ci.org/JoeyKo/react-siriwave.svg?branch=master)](https://travis-ci.org/JoeyKo/react-siriwave)

## Install
npm
```
npm install --save react-siriwave
```
yarn 
```
yarn add react-siriwave
```

## Usage
```javascript
import Siriwave from 'react-siriwave';

// ...
<Siriwave />
// ...

```

## [Demo](https://codesandbox.io/s/quirky-williams-m7ip0)

## Constructor options

| Key        | Type          | Description                                                            | Default    | Required |
| ---------- | ------------- | ---------------------------------------------------------------------- | ---------- | -------- |
| style      | "ios", "ios9" | The style of the wave.                                                 | "ios"      | no       |
| ratio      | Number        | Ratio of the display to use. Calculated by default.                    | calculated | no       |
| speed      | Number        | The speed of the animation.                                            | 0.2        | no       |
| amplitude  | Number        | The amplitude of the complete wave-form.                               | 1          | no       |
| frequency  | Number        | The frequency of the complete wave-form. Only available in style "ios" | 6          | no       |
| color      | String        | Color of the wave. Only available in style "ios"                       | "#fff"     | no       |
| cover      | Bool          | The `canvas` covers the entire width or height of the container        | false      | no       |
| autostart  | Bool          | Decide wether start the animation on boot.                             | false      | no       |
| pixelDepth | Number        | Number of step (in pixels) used when drawed on canvas.                 | 0.02       | no       |
| lerpSpeed  | Number        | Lerp speed to interpolate properties.                                  | 0.01       | no       |
| curveDefinition  | ICurveDefinition[]        | Override definition of the curves                    | null       | no       |