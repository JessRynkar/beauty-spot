import React from 'react'
import Link from 'next/link'

import { Contact, Footer as FooterProps, Hours } from '../../../payload/payload-types'
import { fetchGlobals } from '../../_api/fetchGlobals'
import { ContactBlock } from '../ContactBlock'
import { Gutter } from '../Gutter'
import { CMSLink } from '../Link'
import { Socials } from '../Socials'

import classes from './index.module.scss'

export async function Footer() {
  let footer: FooterProps | null = null
  let contact: Contact | null = null
  let hours: Hours | null = null
  let navItems: any[] = []

  try {
    const {
      header: footerFromProps,
      contact: contactFromProps,
      hours: hoursFromProps,
    } = await fetchGlobals()
    footer = footerFromProps
    contact = contactFromProps
    hours = hoursFromProps
    navItems = footer?.navItems || []
  } catch (error) {
    // do nothing
  }

  return (
    <footer className={classes.footer}>
      <ContactBlock className={classes.contact} contact={contact} hours={hours} />
      <Gutter className={classes.wrap}>
        <div className={classes.logoWrap}>
          <Link href="/" className={classes.logo}>
            THE BEAUTY SPOT
          </Link>
          <div className={classes.copyright}>&copy; 2024</div>
        </div>

        <div className={classes.navSocial}>
          <nav className={classes.nav}>
            {navItems.map(({ link }, i) => {
              return <CMSLink className={classes.link} appearance="default" key={i} {...link} />
            })}
          </nav>

          <Socials contact={contact} />
        </div>
      </Gutter>
    </footer>
  )
}
