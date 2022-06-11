import React from 'react'
export const Badge: React.FC<{
  children: React.ReactNode
  outline?: boolean
  color: string
}> = ({ children, outline = false, color }) => {
  return (
    <span
      css={{
        color: outline ? color : '#fff',
        backgroundColor: outline ? '' : color,
        border: `1px solid ${color}`,
        padding: '2px 8px',
        height: '25px',
        lineHeight: '17px',
        borderRadius: '5px',
        fontWeight: 600,
        fontSize: '14px',
      }}
    >
      {children}
    </span>
  )
}
