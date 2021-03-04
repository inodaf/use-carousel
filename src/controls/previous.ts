export function previous(currentPosition: number): number {
  const nextPosition = currentPosition - 1
  const isBelowLimit = nextPosition < 0

  return isBelowLimit ? currentPosition : nextPosition
}
