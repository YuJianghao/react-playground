import React from 'react'
import { SideListItem } from './SideListItem'
const SideListSplit = () => {
  return (
    <div
      css={{
        height: '1px',
        width: '132px',
        margin: '8px auto',
        backgroundColor: '#DCDCDC',
      }}
    ></div>
  )
}
export const TheSideList: React.FC = () => {
  return (
    <div
      css={{
        paddingTop: '14px',
        width: '180px',
      }}
    >
      <SideListItem>All Sites</SideListItem>
      <SideListItem selected>Alert Center</SideListItem>
      <SideListSplit />
    </div>
  )
}
