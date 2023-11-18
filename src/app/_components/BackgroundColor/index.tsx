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
    '#BEA09B',
    '#B9958D',
    '#AB8381',
    '#A8868F',
    '#AA8EA9',
    '#AD96C5',
  ]

  const adjustedIndex = index !== undefined ? index % colors.length : 0

  const selectedColor = colors[adjustedIndex]

  return (
    <div id={id} className={className} style={{ backgroundColor: selectedColor }}>
      {children}
    </div>
  )
}
