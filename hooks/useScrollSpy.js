'use client'

import { useState, useEffect } from "react"

/**
 * Tracks which section is currently in view by observing element IDs.
 * @param {string[]} ids - Array of element IDs to observe
 * @param {object} options - IntersectionObserver options
 * @returns {string} - The ID of the currently active section
 */
export function useScrollSpy(ids, options = {}) {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const { rootMargin = "-40% 0px -50% 0px" } = options
    const observers = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [ids]) // eslint-disable-line react-hooks/exhaustive-deps

  return activeId
}
