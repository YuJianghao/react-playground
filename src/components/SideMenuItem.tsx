import React from 'react'

export const SideMenuItem: React.FC<{
  icon: React.ReactNode
  label: string
}> = ({ icon, label }) => {
  return (
    <div
      css={{
        backgroundColor: '#fff',
      }}
    >
      <div
        css={{
          backgroundColor: '#282C31',
          borderBottomRightRadius: '8px',
          height: '15px',
        }}
      ></div>
      <div
        css={{
          height: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
        <span
          css={{
            marginTop: '10px',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}
