import { useCallback, useRef } from 'react'
import {
  ICarouselControls,
  ICarouselHookOptions,
  ICarouselControlsHookOptions,
} from '../d'

export function useFeatures(
  controls: ICarouselControls,
  options: ICarouselHookOptions,
  featureOptions: ICarouselControlsHookOptions
): { autoPlay: () => void; stopAutoPlay: () => void } {
  const autoPlayIntervalID = useRef(null)

  const stopAutoPlay = useCallback(() => {
    window.clearInterval(autoPlayIntervalID.current)
  }, [autoPlayIntervalID])

  const autoPlay = useCallback(() => {
    autoPlayIntervalID.current = window.setInterval(() => {
      controls.next()
      if (featureOptions.isLastCarouselPosition) stopAutoPlay()
    }, options.controls.intervalInMs || 2000)
  }, [options, controls, featureOptions, autoPlayIntervalID, stopAutoPlay])

  return { autoPlay, stopAutoPlay }
}
