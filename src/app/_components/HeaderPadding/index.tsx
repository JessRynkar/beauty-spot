import React from 'react'

import classes from './index.module.scss'

export const HeaderPadding: React.FC<{
  className?: string
}> = props => {
  const { className } = props

  return <div className={[className, classes.headerPadding].filter(Boolean).join(' ')} />
}
