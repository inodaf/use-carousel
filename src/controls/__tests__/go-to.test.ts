import { goTo } from '../go-to'

describe('Control: Go To', () => {
  describe('Moving to desired position', () => {
    test('returns the desired position', () => {
      expect(goTo(0, 1, 5)).toBe(1)
    })
  })

  describe('When desired position is out limit', () => {
    test('returns the current position when desired was less than zero', () => {
      expect(goTo(0, -1, 5)).toBe(0)
    })

    test('returns the current position when desired was greater than length', () => {
      expect(goTo(0, 5, 5)).toBe(0)
    })
  })
})
