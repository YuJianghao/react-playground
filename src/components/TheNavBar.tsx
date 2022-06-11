import React from 'react'
import Logo from '../icons/logo.svg?component'
import AccountIcon from '../icons/account.svg?component'

const UserName: React.FC<{
  name: string
}> = ({ name }) => {
  return (
    <span
      css={{
        fontWeight: 500,
      }}
    >
      {name}
    </span>
  )
}

export const TheNavBar: React.FC = () => {
  return (
    <nav>
      <div
        css={{
          height: '56px',
          display: 'flex',
          paddingLeft: '32px',
          paddingRight: '36px',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <Logo />
        <div
          css={{
            flex: 1,
          }}
        />
        <UserName name="Alex Bush" />
        <AccountIcon />
      </div>
      <div
        css={{
          height: '6px',
          background: 'linear-gradient(90deg, #39A4F3 0%, #40C57D 100%)',
        }}
      ></div>
    </nav>
  )
}
