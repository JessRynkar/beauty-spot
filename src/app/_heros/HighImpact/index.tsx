'use client'

import React from 'react'

import { Contact, Hours, Page } from '../../../payload/payload-types'
import { ContactBlock } from '../../_components/ContactBlock'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

export const HighImpactHero: React.FC<Page['hero'] & { hours?: Hours; contact?: Contact }> = ({
  richText,
  media,
  links,
  contact,
  hours,
}) => {
  return (
    <div className={classes.hero}>
      <Gutter>
        <div className={classes.content}>
          <RichText className={classes.richText} content={richText} />
          {Array.isArray(links) && links.length > 0 && (
            <ul className={classes.links}>
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}

          <ContactBlock contact={contact} hours={hours} disableIcons />
        </div>
        {typeof media === 'object' && (
          <Media resource={media} imgClassName={classes.image} priority />
        )}
      </Gutter>
    </div>
  )
}
