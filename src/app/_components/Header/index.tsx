import React from 'react'
import Link from 'next/link'

import { Contact, Header as HeaderType } from '../../../payload/payload-types'
import { getContact, getHeader } from '../../_api/fetchGlobals'
import { Button } from '../Button'
import { CMSLink } from '../Link'
import { Socials } from '../Socials'
import { MobileHeader } from './MobileHeader'

import classes from './index.module.scss'

export const Header = async () => {
  let header: HeaderType | null = null
  let contact: Contact | null = null
  try {
    header = await getHeader()
    contact = await getContact()
  } catch (error) {
    // do nothing
  }
  if (!header) return null

  const navItems = header?.navItems || []

  return (
    <header className={classes.header}>
      <div className={classes.wrap}>
        <div className={classes.topBar}>
          {header && contact && <Socials className={classes.socials} contact={contact} />}
          <Link href="/" className={classes.logo}>
            THE BEAUTY SPOT
          </Link>
          <Button
            className={classes.book}
            href="https://www.fresha.com/book-now/a3o4vgjg/all-offer?pId=457927"
            newTab
            appearance="default"
            label="Book"
          />
        </div>
        <nav className={classes.nav}>
          {navItems &&
            navItems.map(({ link }, i) => {
              return <CMSLink appearance="default" key={i} {...link} />
            })}
        </nav>
      </div>
      <MobileHeader header={header} />
    </header>
  )
}
