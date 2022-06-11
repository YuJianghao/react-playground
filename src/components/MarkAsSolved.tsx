import type { ChangeEventHandler } from 'react'
import React, { useState } from 'react'
import type { IAlertItem } from '../fixture'
import { alerts } from '../fixture'
import { useHandler } from '../hooks/useHandler'
import { SeverityBadge } from './Badge'

const InfoText: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div
      css={{
        fontWeight: 600,
        color: '#999999',
        marginTop: '8px',
        fontSize: '14px',
      }}
    >
      {children}
    </div>
  )
}

const InfoItem: React.FC<{
  width: string
  title: string
  content: string
}> = ({ width, title, content }) => {
  return (
    <div css={{ width, marginTop: '16px' }}>
      <InfoText>{title}</InfoText>
      <div css={{ marginTop: '8px', fontWeight: 400 }}>{content}</div>
    </div>
  )
}

const Info: React.FC<{
  item: IAlertItem
}> = ({ item }) => {
  return (
    <div
      css={{
        marginTop: '8px',
        padding: '16px',
        border: '1px solid #DCDCDC',
        borderRadius: '4px',
      }}
    >
      <SeverityBadge type={item.type} />
      <div
        css={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <InfoItem width="40%" title="Location" content="Production Line 3" />
        <InfoItem
          width="60%"
          title="Creation type"
          content="System self-check"
        />
        <InfoItem width="40%" title="Issue type" content={item.error} />
        <InfoItem width="60%" title="Creation time" content={item.date} />
        <InfoItem width="40%" title="Description" content="Error details" />
        <InfoItem width="60%" title="Representative" content="User 1" />
      </div>
    </div>
  )
}

const Note: React.FC = () => {
  const [note, setNote] = useState('')
  const onInput = useHandler<ChangeEventHandler<HTMLTextAreaElement>>(
    (event) => {
      const value = event.target.value
      setNote(value.slice(0, 500))
    },
  )
  return (
    <>
      <textarea
        value={note}
        onInput={onInput}
        css={{
          display: 'block',
          border: '1px solid #DCDCDC',
          borderRadius: '4px',
          marginTop: '8px',
          padding: '16px',
          width: '100%',
          outline: 'none',
          height: '134px',
          fontFamily: 'SF Pro Display',
          fontSize: '16px',
        }}
        placeholder="Enter here ..."
      ></textarea>
      <div
        css={{
          textAlign: 'end',
          marginTop: '8px',
          color: '#999999',
          fontWeight: 400,
        }}
      >
        {note.length}/500
      </div>
    </>
  )
}

export const MarkAsSolved: React.FC<{
  id: string
}> = ({ id }) => {
  const currentItem = alerts.find(item => item.id === id)!
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div
        css={{
          fontWeight: 600,
          fontSize: '24px',
          textAlign: 'center',
          margin: '32px 0',
        }}
      >
        Mark As Solved
      </div>
      <div
        css={{
          padding: '0 32px',
          flex: 1,
        }}
      >
        <InfoText>Detailed info</InfoText>
        <Info item={currentItem} />
        <InfoText>Add note</InfoText>
        <Note />
      </div>
      <button
        css={{
          border: 'none',
          backgroundColor: '#145AC3',
          color: '#fff',
          margin: '0 24px 24px 34px',
          lineHeight: '40px',
          borderRadius: '4px',
          fontWeight: 600,
        }}
      >
        Done
      </button>
    </div>
  )
}
