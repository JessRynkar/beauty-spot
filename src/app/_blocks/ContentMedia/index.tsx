import React from 'react'
import type { StaticImageData } from 'next/legacy/image'

import type { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'contentMedia' }> & {
  id?: string
  staticImage?: StaticImageData
}

export const ContentMedia: React.FC<Props> = props => {
  const { media, imagePosition = 'left', content, staticImage } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  return (
    <Gutter>
      <div
        className={[classes.contentMediaBlock, imagePosition === 'left' && classes.invert]
          .filter(Boolean)
          .join(' ')}
      >
        <div className={classes.content}>
          <RichText content={content} />
        </div>
        <div className={classes.media}>
          <Media resource={media} src={staticImage} />
          {caption && <RichText className={classes.caption} content={caption} />}
        </div>
      </div>
    </Gutter>
  )
}
