import React from 'react'

import { Page } from '../../../payload/payload-types'
import { FullServiceList } from './Full'
import { MiniServiceList } from './Mini'
type Props = Extract<Page['layout'][0], { blockType: 'servicesList' }> & {
  id?: string
  type: 'mini' | 'full'
  service: any
}

const ServicesList: React.FC<Props> = ({ type, service }) => {
  switch (type) {
    case 'mini':
      return <MiniServiceList services={service} />
    case 'full':
      return <FullServiceList services={service} />
    default:
      return null
  }
}

export default ServicesList
