import React from 'react'
import SitesIcon from '../icons/sites.svg?component'
const SideMenuItem: React.FC<{
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
          }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}
export const TheSideMenu: React.FC = () => {
  return (
    <div
      css={{
        width: '70px',
        height: '100%',
        backgroundColor: '#282C31',
      }}
    >
      <SideMenuItem icon={<SitesIcon />} label="Sites" />
    </div>
  )
}
