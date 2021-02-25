export function next(currentPosition: number, contentLength: number): number {
  const nextPosition = currentPosition + 1
  const isAboveLimit = nextPosition > contentLength - 1

  return isAboveLimit ? currentPosition : nextPosition
}
