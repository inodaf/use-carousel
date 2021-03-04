export interface ICarouselControls {
  next(): void
  previous(): void
  restart(): void
  goTo(where: number): void
}

export interface ICarouselControlsHookOptions {
  isLoopEnabled?: boolean
  isLastCarouselPosition?: boolean
}

export interface ICarouselHook extends ICarouselControls {
  carouselItem: any
  carouselPosition: number
  carouselLength: number
}

export interface ICarouselHookOptions {
  controls: {
    autoPlay: boolean
    loop: boolean
    intervalInMs: number
  }
}
