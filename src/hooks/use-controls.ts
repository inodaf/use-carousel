import { useCallback } from 'react'
import { ICarouselControls, ICarouselControlsHookOptions } from '../d'
import { Controls } from '../controls'

export function useControls(
  currentPosition: number,
  contentLength: number,
  setCurrentPosition: (value: number) => unknown,
  options?: ICarouselControlsHookOptions
): ICarouselControls {
  const goTo = useCallback(
    (desiredPosition: number) =>
      setCurrentPosition(
        Controls.goTo(currentPosition, desiredPosition, contentLength)
      ),
    [setCurrentPosition, currentPosition, contentLength]
  )

  const restart = useCallback(() => goTo(0), [goTo])

  const next = useCallback(() => {
    setCurrentPosition(Controls.next(currentPosition, contentLength))
    if (options?.isLoopEnabled && options?.isLastCarouselPosition) restart()
  }, [setCurrentPosition, currentPosition, contentLength, options, restart])

  const previous = useCallback(
    () => setCurrentPosition(Controls.previous(currentPosition)),
    [setCurrentPosition, currentPosition]
  )

  return {
    goTo,
    restart,
    previous,
    next,
  }
}
