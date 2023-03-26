import React, { useEffect, useRef } from 'react'
import * as SiriWave from 'siriwave'

declare type CurveStyle = 'ios' | 'ios9'

export declare type IReactSiriwaveProps = {
  theme?: CurveStyle
  ratio?: number
  speed?: number
  amplitude?: number
  frequency?: number
  color?: string
  cover?: boolean
  width?: number
  height?: number
  autostart?: boolean
  pixelDepth?: number
  lerpSpeed?: number
  curveDefinition?: SiriWave.ICurveDefinition[]
  onInit?: (siriwave: SiriWave.default) => void
}

const ReactSiriwave = (props: IReactSiriwaveProps) => {
  const siriwaveRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const siriwave = new SiriWave.default({
      container: siriwaveRef.current!,
      style: props.theme ?? 'ios',
      width: props.width ?? 640,
      height: props.height ?? 200,
      speed: props.speed ?? 0.2,
      amplitude: props.amplitude ?? 1,
      frequency: props.frequency ?? 6,
      color: props.color ?? '#fff',
      cover: props.cover ?? false,
      autostart: props.autostart ?? true,
      pixelDepth: props.pixelDepth ?? 0.02,
      lerpSpeed: props.lerpSpeed ?? 0.01,
      curveDefinition: props.curveDefinition,
    })

    if (typeof props.onInit === 'function') props.onInit(siriwave)

    return () => {
      siriwave.dispose()
    }
  }, [
    props.amplitude,
    props.autostart,
    props.color,
    props.cover,
    props.curveDefinition,
    props.frequency,
    props.height,
    props.lerpSpeed,
    props.pixelDepth,
    props.speed,
    props.theme,
    props.width,
  ])
  return <div ref={siriwaveRef}></div>
}

export default ReactSiriwave
