import { useEffect, useRef } from 'react'

function createPortalRoot(id: string) {
  const drawerRoot = document.createElement('div')
  drawerRoot.setAttribute('id', id)
  return drawerRoot
}

export function usePortalRoot(prefix: string) {
  const idRef = useRef(`${prefix}-${Math.random()}`)
  const portalRootRef = useRef(
    document.getElementById(idRef.current) || createPortalRoot(idRef.current),
  )
  const bodyRef = useRef(document.querySelector('body'))
  useEffect(() => {
    bodyRef.current!.appendChild(portalRootRef.current)
    const portal = portalRootRef.current
    return () => {
      portal.remove()
    }
  }, [])
  return { idRef, portalRootRef }
}
