import React from 'react'
import Link from 'next/link'

import { FacebookIcon } from '../../_icons/FacebookIcon'
import { InstagramIcon } from '../../_icons/InstagramIcon'

import classes from './index.module.scss'

type Props = {
  contact?: {
    facebook?: string
    instagram?: string
  }
  className?: string
  onClick?: () => void
}

export const Socials: React.FC<Props> = ({ contact, className, onClick }) => {
  const { facebook, instagram } = contact || {}

  return (
    <div className={[classes.socials, className && className].join(' ')}>
      <Link href={facebook || ''} className={classes.link} onClick={onClick}>
        <FacebookIcon />
      </Link>
      <Link href={instagram || ''} className={classes.link} onClick={onClick}>
        <InstagramIcon />
      </Link>
    </div>
  )
}
