'use client'

import { useState, useEffect } from "react"

/**
 * Animates a number from 0 to the target value when inView becomes true.
 * @param {number} target - The final number to count up to
 * @param {boolean} inView - Whether the element is currently in the viewport
 * @param {number} duration - Total animation duration in ms
 * @returns {number} - The current animated count value
 */
export function useCountUp(target, inView, duration = 1100) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const steps = 40
    const step = Math.ceil(target / steps)
    const interval = duration / steps

    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [inView, target, duration])

  return count
}
