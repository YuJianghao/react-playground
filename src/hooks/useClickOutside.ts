import type { MutableRefObject } from 'react'
import { useEffect } from 'react'

export function useClickOutside<T extends Function>(
  ref: MutableRefObject<HTMLElement | null | undefined>,
  fn: T,
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node))
        fn()
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}
