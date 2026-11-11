import React from 'react'

import { Page } from '../../../payload/payload-types'
import { ContactInfo } from '../../_components/ContactInfo'
import { Gutter } from '../../_components/Gutter'
import { VerticalPadding } from '../../_components/VerticalPadding'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'googleMaps' }>

export const GoogleMaps: React.FC<
  Props & {
    id?: string
  }
> = () => {
  const embed = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9883.701383482565!2d-0.2172428!3d51.7344008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48763d828523d4c9%3A0xa2eeb142bc0e3fa2!2sThe%20Beauty%20Spot!5e0!3m2!1sen!2suk!4v1697389952043!5m2!1sen!2suk" width="700" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

  return (
    <VerticalPadding>
      <Gutter>
        <div className={classes.googleMaps}>
          <div className={classes.map} dangerouslySetInnerHTML={{ __html: embed }}></div>
          <div className={classes.contactWrap}>
            <ContactInfo />
          </div>
        </div>
      </Gutter>
    </VerticalPadding>
  )
}
