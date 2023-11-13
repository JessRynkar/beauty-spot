import React from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'
import { VerticalPadding } from '../../_components/VerticalPadding'

import classes from './index.module.scss'

export const MediumImpactHero: React.FC<Page['hero']> = props => {
  const { richText, media, links } = props

  return (
    <div className={classes.hero}>
      <div className={classes.background}>
        <Gutter>
          <VerticalPadding top="large" bottom="large">
            <RichText className={classes.richText} content={richText} />
            {links.length >= 1 && Array.isArray(links) && (
              <ul className={classes.links}>
                {links.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink className={classes.link} {...link} />
                    </li>
                  )
                })}
              </ul>
            )}
          </VerticalPadding>
        </Gutter>

        <div className={classes.media}>
          {typeof media === 'object' && <Media className={classes.media} resource={media} />}
        </div>
      </div>
    </div>
  )
}
