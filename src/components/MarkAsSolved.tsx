import React from 'react'
import { alerts } from '../fixture'

export const MarkAsSolved: React.FC<{
  id: string
}> = ({ id }) => {
  const currentItem = alerts.find(item => item.id === id)!
  return <div>{JSON.stringify(currentItem)}</div>
}
