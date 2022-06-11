import React from 'react'
import type { IAlertItem } from '../fixture'
import { noop } from '../utils'
import { Badge } from './Badge'
import { Link } from './Link'

const COLOR_MAP: Record<IAlertItem['type'], string> = {
  Critical: '#AB0D16',
  Medium: '#FF7715',
  Low: '#1EC9EF',
}

export const AlertItem: React.FC<{
  item: Pick<IAlertItem, 'id' | 'error' | 'type' | 'title' | 'date' | 'content'>
  onSolvedClick?: (id: string) => void
}> = ({ item, onSolvedClick = noop }) => {
  return (
    <div
      css={{
        border: '1px solid #DCDCDC',
        borderRadius: '8px',
        padding: '16px',
        marginTop: '16px',
        display: 'flex',
        gap: '23px',
      }}
    >
      <div
        css={{
          width: '70px',
        }}
      >
        <Badge color={COLOR_MAP[item.type]}>{item.type}</Badge>
      </div>
      <div
        css={{
          flex: 1,
        }}
      >
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Badge color="#F01D00" outline>
            {item.error}
          </Badge>
          <span
            css={{
              fontWeight: 600,
              marginLeft: '8px',
            }}
          >
            {item.title}
          </span>
        </div>
        <div css={{ color: '#999999', marginTop: '14px' }}>{item.date}</div>
        <div css={{ color: '#999999', marginTop: '8px', lineHeight: '22px' }}>
          {item.content}
        </div>
      </div>
      <div>
        <Link onClick={() => onSolvedClick(item.id)}>Mark As Solved</Link>
      </div>
    </div>
  )
}
