import React from 'react'

import { Contact, Hours, Page } from '../../../payload/payload-types'
import { HighImpactHero } from '../../_heros/HighImpact'
import { LowImpactHero } from '../../_heros/LowImpact'
import { MediumImpactHero } from '../../_heros/MediumImpact'
import { HeaderPadding } from '../HeaderPadding'

const heroes = {
  highImpact: HighImpactHero,
  mediumImpact: MediumImpactHero,
  lowImpact: LowImpactHero,
}

export const Hero: React.FC<
  Page['hero'] & {
    hours?: Hours
    contact?: Contact
  }
> = props => {
  const { type } = props || {}

  if (!type || type === 'none') return <HeaderPadding />

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
