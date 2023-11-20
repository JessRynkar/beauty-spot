import React from 'react'

import { Contact, Hours, Page } from '../../../payload/payload-types'
import { HighImpactHero } from '../../_heros/HighImpact'
import { LowImpactHero } from '../../_heros/LowImpact'
import { MediumImpactHero } from '../../_heros/MediumImpact'

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

  if (!type || type === 'none') return <div style={{ width: '100%', height: '100px' }} />

  const HeroToRender = heroes[type]

  if (!HeroToRender) return <div style={{ width: '100%', height: '100px' }} />

  return <HeroToRender {...props} />
}
