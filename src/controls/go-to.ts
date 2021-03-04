export function goTo(
  currentPosition: number,
  desiredPosition: number,
  contentLength: number
): number {
  const isOutLimit = desiredPosition < 0 || desiredPosition > contentLength - 1

  return isOutLimit ? currentPosition : desiredPosition
}
