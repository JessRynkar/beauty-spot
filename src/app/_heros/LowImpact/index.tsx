import React from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import RichText from '../../_components/RichText'
import { VerticalPadding } from '../../_components/VerticalPadding'

import classes from './index.module.scss'

export const LowImpactHero: React.FC<Page['hero']> = ({ richText }) => {

  return (
    <Gutter className={classes.lowImpactHero}>
      <div className={classes.content}>
        {richText ?
          <VerticalPadding top="large" bottom="large">
            <RichText className={classes.richText} content={richText} />
          </VerticalPadding> :
          <VerticalPadding top="medium" bottom="none">
            <span />
          </VerticalPadding>
        }
      </div>
    </Gutter>
  )
}
