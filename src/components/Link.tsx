import React from 'react'
import { noop } from '../utils'

export const Link: React.FC<{
  children: React.ReactNode
  onClick?: () => void
}> = ({ children, onClick = noop }) => {
  return (
    <span
      onClick={onClick}
      css={{
        color: '#145AC3',
        cursor: 'pointer',
      }}
    >
      {children}
    </span>
  )
}
