import React, { useState } from 'react'
import { AlertItem } from '../components/AlertItem'
import { Breadcrumb } from '../components/Breadcrumb'
import { Drawer } from '../components/Drawer'
import { Link } from '../components/Link'
import { MarkAsSolved } from '../components/MarkAsSolved'
import { PageTitle } from '../components/PageTitle'
import type { ISelectOption } from '../components/Select'
import { Select } from '../components/Select'
import { alerts } from '../fixture'
import { useHandler } from '../hooks/useHandler'

const options: ISelectOption[] = [
  { value: 'Critical', label: 'Critical' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Low', label: 'Low' },
]

export const AlertCenter: React.FC = () => {
  const [level, setLevel] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [currentId, setCurrentId] = useState('')
  const onSelectChange = useHandler((value: string) => {
    setLevel(value)
  })
  const filtedItems = level
    ? alerts.filter(item => item.type === level)
    : alerts
  const onSolvedClick = useHandler((id: string) => {
    setCurrentId(id)
    setIsOpen(true)
  })
  const onClear = useHandler(() => setLevel(''))
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
      <div
        css={{
          boxShadow: '0px 10px 64px rgba(0, 0, 0, 0.06)',
          padding: '24px',
          backgroundColor: '#fff',
          borderRadius: '8px',
        }}
      >
        <div
          css={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
          }}
        >
          <Select width="220px" name="Group" />
          <Select width="180px" name="Production Line" />
          <Select
            options={options}
            width="160px"
            value={level}
            setValue={onSelectChange}
            name="Severity"
          />
          <div
            css={{
              marginLeft: '16px',
            }}
          >
            <Link onClick={onClear}>Clear Filter</Link>
          </div>
        </div>
        <div>
          {filtedItems.map((item, index) => (
            <AlertItem key={index} item={item} onSolvedClick={onSolvedClick} />
          ))}
        </div>
      </div>
      <Drawer width="500px" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {currentId && <MarkAsSolved id={currentId}/>}
      </Drawer>
    </div>
  )
}
