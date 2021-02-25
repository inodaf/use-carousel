export function previous(current: number): number {
  const nextPosition = current - 1
  const isBelowLimit = nextPosition < 0

  return isBelowLimit ? current : nextPosition
}
