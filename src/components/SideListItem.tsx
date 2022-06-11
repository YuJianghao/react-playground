import React from 'react'

export const SideListItem: React.FC<{
  selected?: boolean
  children: React.ReactNode
}> = ({ selected = false, children }) => {
  return (
    <div
      css={{
        color: selected ? '#145AC3' : '#999999',
        height: '54px',
        paddingLeft: '24px',
        backgroundColor: selected ? '#F9FAFE' : '',
        display: 'flex',
        alignItems: 'center',
        fontWeight: selected ? 600 : '',
      }}
    >
      {children}
    </div>
  )
}
