import React from 'react'

import classes from './index.module.scss'

type Props = {
  index?: number
  className?: string
  children?: React.ReactNode
  id?: string
}

export const BackgroundColor: React.FC<Props> = props => {
  const { id, className, children, index } = props

  const colors = [
    '#F6EBE7',
    '#fdf3eb',
    '#f5e1d3',
    '#AA8EA9',
    '#A8868F',
    '#AD96C5',
    '#AB8381',
  ]

  const adjustedIndex = index !== undefined ? index % colors.length : 0

  const selectedColor = colors[adjustedIndex]

  return (
    <div id={id} className={className} style={{ backgroundColor: selectedColor }}>
      {children}
    </div>
  )
}
