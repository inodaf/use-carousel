import { next } from '../next'

describe('Controls: Next', () => {
  describe('moving to next position', () => {
    test('should increment the current position and return it', () => {
      expect(next(0, 5)).toBe(1)
    })

    test('should return the current position when next position was above the content length', () => {
      expect(next(4, 5)).toBe(4)
    })
  })
})
