import { useState } from 'react'
import { act, renderHook } from '@testing-library/react-hooks'
import { useControls } from '../use-controls'

describe('Hooks: Use Controls', () => {
  describe('Method: Go To', () => {
    test('correctly go to desired position', () => {
      const { result } = setupHook()

      act(() => result.current.goTo(2))

      expect(result.current.currentPosition).toBe(2)
    })

    test('return the current position when cannot go to', () => {
      const { result } = setupHook(2)

      act(() => result.current.goTo(3))

      expect(result.current.currentPosition).toBe(2)
    })
  })

  describe('Method: Restart', () => {
    test('correctly resets the position to zero', () => {
      const { result } = setupHook(2)

      act(() => result.current.restart())

      expect(result.current.currentPosition).toBe(0)
    })
  })

  describe('Method: Next', () => {
    test('should advance one position', () => {
      const { result } = setupHook(1)

      act(() => result.current.next())

      expect(result.current.currentPosition).toBe(2)
    })

    describe('Feature: Loop', () => {
      test('should correctly restarts when feature is enabled', () => {
        const { result } = setupHook(2, {
          isLoopEnabled: true,
          isLastCarouselPosition: true,
        })

        act(() => result.current.next())

        expect(result.current.currentPosition).toBe(0)
      })

      test('should not restart if carousel was not at last position', () => {
        const { result } = setupHook(2, {
          isLoopEnabled: true,
          isLastCarouselPosition: false,
        })

        act(() => result.current.next())

        expect(result.current.currentPosition).toBe(2)
      })

      test('should not restart when feature is disabled', () => {
        const { result } = setupHook(2, {
          isLoopEnabled: false,
          isLastCarouselPosition: true,
        })

        act(() => result.current.next())

        expect(result.current.currentPosition).toBe(2)
      })

      test('should not restart when feature is disabled and carousel is not at last position', () => {
        const { result } = setupHook(2, {
          isLoopEnabled: false,
          isLastCarouselPosition: false,
        })

        act(() => result.current.next())

        expect(result.current.currentPosition).toBe(2)
      })
    })
  })

  describe('Method: Previous', () => {
    test('correctly decrement the position', () => {
      const { result } = setupHook(1)

      act(() => result.current.previous())

      expect(result.current.currentPosition).toBe(0)
    })

    test('remain to the position when cannot go to previous', () => {
      const { result } = setupHook(0)

      act(() => result.current.previous())

      expect(result.current.currentPosition).toBe(0)
    })
  })
})

function setupHook(initialState = 0, options = {}) {
  return renderHook(() => {
    const [currentPosition, setCurrentPosition] = useState(initialState)
    const controls = useControls(
      currentPosition,
      3,
      setCurrentPosition,
      options
    )

    return { currentPosition, ...controls }
  })
}
