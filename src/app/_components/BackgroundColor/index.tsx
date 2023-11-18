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
    '#AA8EA9',
    '#A8868F',
    '#AD96C5',
    '#AB8381',
    '#B9958D',
    '#BEA09B',
  ]

  const adjustedIndex = index !== undefined ? index % colors.length : 0

  const selectedColor = colors[adjustedIndex]

  return (
    <div id={id} className={className} style={{ backgroundColor: selectedColor }}>
      {children}
    </div>
  )
}
