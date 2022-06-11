import React from 'react'
import { Breadcrumb } from '../components/Breadcrumb'
import { PageTitle } from '../components/PageTitle'

export const AlertCenter: React.FC = () => {
  return (
    <div
      css={{
        padding: '32px',
        backgroundColor: '#F5F5F5',
        flex: 1,
        height: '100%',
        overflow: 'auto',
      }}
    >
      <Breadcrumb />
      <PageTitle>Alert Center</PageTitle>
    </div>
  )
}
