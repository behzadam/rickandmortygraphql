import { RefObject, useEffect } from 'react'

type Props = {
  root?: RefObject<HTMLElement>
  target?: RefObject<HTMLElement>
  rootMargin?: string
  threshold?: number
  enabled: boolean
  onIntersect: () => void
}

export default function useIntersectionObserver({
  root,
  target,
  rootMargin = '0px',
  threshold = 1.0,
  enabled = true,
  onIntersect,
}: Props) {
  useEffect(() => {
    if (!enabled) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        root: root && root.current,
        rootMargin,
        threshold,
      }
    )

    const el = target && target.current
    if (!el) {
      return
    }

    observer.observe(el)

    return () => {
      observer.unobserve(el)
    }
  }, [target, enabled])
}
