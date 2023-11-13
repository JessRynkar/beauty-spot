'use client'
import React, { useEffect, useState } from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'content' }>

export const ContentBlock: React.FC<
  Props & {
    id?: string
  }
> = props => {
  const { columns } = props
  const [quote, setQuote] = useState(false)
  useEffect(() => {
    columns.map(col => {
      const { richText } = col
      richText.map(node => {
        if (node.type === 'blockquote') return setQuote(true)
      })
    })
  }, [columns])

  return (
    <Gutter className={classes.content}>
      <div className={classes.grid}>
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, richText, link, size } = col

            return (
              <div
                key={index}
                className={[
                  classes.column,
                  classes[`column--${size}`],
                  quote && classes.quote,
                ].join(' ')}
              >
                <RichText content={richText} />
                {enableLink && <CMSLink className={classes.link} {...link} />}
              </div>
            )
          })}
      </div>
    </Gutter>
  )
}
