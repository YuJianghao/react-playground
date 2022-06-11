import React from 'react'

export const Link: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <span
      css={{
        color: '#145AC3',
        cursor: 'pointer',
      }}
    >
      {children}
    </span>
  )
}
