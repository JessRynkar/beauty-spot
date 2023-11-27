'use client'

import React, { useState } from 'react'

import { Page } from '../../../../payload/payload-types'
import { Button } from '../../../_components/Button'
import { Gutter } from '../../../_components/Gutter'

import classes from './index.module.scss'
export const MiniServiceList: React.FC<{
  id?: string
  services: any
}> = ({ services }) => {
  const [activeCategory, setActiveCategory] = useState(services ? services[0].category : '')

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category)
  }
  return (
    <Gutter className={classes.miniServiceList}>
      <h1>Service List</h1>
      <ul className={classes.listWrap}>
        {services?.map((service, i) => {
          const { category } = service

          return (
            <li key={i} className={classes.categoryWrap}>
              <button
                className={[classes.category, activeCategory === category && classes.active]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            </li>
          )
        })}
      </ul>
      {services?.map((service, i) => {
        const { category, description } = service
        const isActive = activeCategory === category

        if (isActive)
          return (
            <div key={i} className={classes.serviceWrap}>
              <div className={classes.description}>{description}</div>
              <div className={classes.services}>
                {service.services.map((service, i) => {
                  return <span key={i}>{service?.name}</span>
                })}
              </div>
              <Button
                className={classes.menuButton}
                href={`/services#${category.toLowerCase()}`}
                label="view menu"
                appearance="primary"
              />
            </div>
          )
      })}
    </Gutter>
  )
}
