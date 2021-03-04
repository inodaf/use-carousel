import { previous } from '../previous'

describe('Controls: Previous', () => {
  describe('moving to previous position', () => {
    test('should decrement the current position and return it', () => {
      expect(previous(2)).toBe(1)
    })

    test('should return the current position when next position was lesser than zero', () => {
      expect(previous(0)).toBe(0)
    })
  })
})
