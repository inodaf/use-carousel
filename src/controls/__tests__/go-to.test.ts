import { goTo } from '../go-to'

describe('Control: Go To', () => {
  describe('Moving to desired position', () => {
    test('returns the desired position', () => {
      const [currentPosition, desiredPosition, contentLength] = [0, 1, 5]

      expect(goTo(currentPosition, desiredPosition, contentLength)).toBe(1)
    })
  })

  describe('When desired position is out limit', () => {
    test('returns the current position when desired was less than zero', () => {
      const [currentPosition, desiredPosition, contentLength] = [0, -1, 5]

      expect(goTo(currentPosition, desiredPosition, contentLength)).toBe(0)
    })

    test('returns the current position when desired was greater than length', () => {
      const [currentPosition, desiredPosition, contentLength] = [0, 5, 5]

      expect(goTo(currentPosition, desiredPosition, contentLength)).toBe(0)
    })
  })
})
