import React from 'react'

export const PageTitle: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div
      css={{
        fontWeight: 700,
        fontSize: '24px',
        marginTop: '24px',
        lineHeight: '29px',
        marginBottom: '16px',
      }}
    >
      {children}
    </div>
  )
}
