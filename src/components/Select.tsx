import React, { useState } from 'react'
import DropdownIcon from '../icons/dropdown.svg?component'
export interface ISelectOption {
  value: string
  label: string
}
export const Select: React.FC<{
  value?: string
  setValue?: (value: string) => void
  options?: ISelectOption[]
  width?: string
  name: string
}> = ({
  options = [],
  width = '160px',
  value = '',
  name,
  setValue = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      css={{
        position: 'relative',
        display: 'inline-block',
        width,
        height: '40px',
        border: '1px solid #AEAEAE',
        borderRadius: '4px',
        paddingLeft: '8px',
        paddingRight: '12px',
        color: '#1A1A1A',
        userSelect: 'none',
      }}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
        onClick={() => setIsOpen(true)}
      >
        <span css={{ flex: 1 }}>{name}</span>
        <DropdownIcon />
      </div>
      {isOpen && (
        <div
          css={{
            position: 'absolute',
            top: -1,
            left: -1,
            right: -1,
            border: '1px solid #AEAEAE',
            borderRadius: '4px',
            backgroundColor: '#fff',
            lineHeight: '38px',
            overflow: 'hidden',
          }}
        >
          {[{ value: '', label: 'All' }, ...options].map((option) => {
            return (
              <div
                onClick={() => {
                  setIsOpen(false)
                  setValue(option.value)
                }}
                key={option.value}
                css={{
                  color: value === option.value ? '#145AC3' : '#999999',
                  backgroundColor: value === option.value ? '#F9FAFE' : '',
                  padding: '0 8px',
                }}
              >
                {option.label}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
