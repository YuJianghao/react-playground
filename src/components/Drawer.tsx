import React from 'react'
import { createPortal } from 'react-dom'
import { usePortalRoot } from '../hooks/usePortalRoot'

export const Drawer: React.FC<{
  isOpen: boolean
  children: React.ReactNode
  onClose: () => void
  width: string
}> = ({ isOpen, onClose, children, width }) => {
  const { portalRootRef } = usePortalRoot('drawer')
  return createPortal(
    <div
      className={'drawer-container'}
      css={{
        pointerEvents: isOpen ? 'auto' : 'none',
      }}
    >
      <div
        className="backdrop"
        css={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          opacity: isOpen ? 1 : 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          transition: 'all .3s ease',
        }}
        onClick={onClose}
      />
      <div
        className="drawer"
        css={{
          background: '#fff',
          width,
          top: 0,
          bottom: 0,
          right: 0,
          overflow: 'auto',
          position: 'fixed',
          transition: 'all .3s ease',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateX(0)' : 'translateX(30%)',
        }}
      >
        {children}
      </div>
    </div>,
    portalRootRef.current,
  )
}
