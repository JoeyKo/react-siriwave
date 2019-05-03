# React-SiriWave

[![](https://img.shields.io/travis/JoeyKo/react-siriwave.svg)](https://travis-ci.org/JoeyKo/react-siriwave)
[![NPM Package](https://img.shields.io/npm/v/react-siriwave.svg)](https://www.npmjs.com/package/react-siriwave)

## Install
npm
```
npm install --save react-siriwave
```
yarn 
```
yarn add react-siriwave
```

## Constructor options

| Key        | Type          | Description                                                            | Default    | Required |
| ---------- | ------------- | ---------------------------------------------------------------------- | ---------- | -------- |
| container  | DOMElement    | The DOM container where the DOM canvas element will be added.          | null       | yes      |
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
