import React from 'react'
import SitesIcon from '../icons/sites.svg?component'
import { SideMenuItem } from './SideMenuItem'

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
