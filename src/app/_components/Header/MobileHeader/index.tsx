'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { Contact, Header } from '../../../../payload/payload-types'
import { CMSLink } from '../../Link'
import { Socials } from '../../Socials'

import classes from './index.module.scss'

export const MobileHeader: React.FC<{
  header?: Header
  contact?: Contact
}> = ({ contact, header }) => {
  const { navItems } = header || {}
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    setShowNav(!showNav)
  }

  return (
    <div className={classes.mobileHeader}>
      <div className={classes.topBar}>
        <Link href="/" className={classes.logo} onClick={toggleNav}>
          THE BEAUTY SPOT
        </Link>

        <button
          className={`${classes.hamburger} ${showNav ? classes.showCloseIcon : ''}`}
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`${classes.mobileNav} ${showNav ? classes.showMobileNav : ''}`}>
        {navItems &&
          navItems.map(({ link }, i) => {
            return <CMSLink className={classes.link} key={i} {...link} onClick={toggleNav} />
          })}

        <a
          className={classes.book}
          onClick={toggleNav}
          href="https://www.fresha.com/book-now/a3o4vgjg/all-offer?pId=457927"
        >
          Book
        </a>
        <Socials className={classes.socials} contact={contact} onClick={toggleNav} />
      </div>
    </div>
  )
}
