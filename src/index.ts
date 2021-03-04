import { useState, useEffect, Dispatch } from 'react'
import { ICarouselHook, ICarouselHookOptions } from './d'
import { useControls } from './hooks/use-controls'
import { useFeatures } from './hooks/use-features'

export function useCarousel<T>(
  content: T[],
  options: ICarouselHookOptions
): ICarouselHook {
  const [carouselPosition, setCarouselPosition] = useState(0)
  const [carouselItem, setCarouselItem]: [T, Dispatch<T>] = useState(null)

  const carouselLength = content.length
  const isLastCarouselPosition = carouselPosition === carouselLength - 1

  const isAutoPlayEnabled = Boolean(options.controls.autoPlay)
  const isLoopEnabled = Boolean(options.controls.loop)

  const controls = useControls(
    carouselPosition,
    carouselLength,
    setCarouselPosition,
    { isLoopEnabled, isLastCarouselPosition }
  )

  const features = useFeatures(controls, options, {
    isLastCarouselPosition,
  })

  useEffect(() => setCarouselItem(content[carouselPosition]), [
    content,
    carouselPosition,
  ])

  useEffect(() => {
    if (isAutoPlayEnabled) features.autoPlay()
    return () => features.stopAutoPlay()
  }, [isAutoPlayEnabled, features])

  return {
    carouselItem,
    carouselLength,
    carouselPosition,
    ...controls,
  }
}
