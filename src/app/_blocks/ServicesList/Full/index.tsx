'use client'

import React from 'react'

import { Service } from '../../../../payload/payload-types'
import { Button } from '../../../_components/Button'
import { Gutter } from '../../../_components/Gutter'
import { Media } from '../../../_components/Media'

import classes from './index.module.scss'

export const FullServiceList: React.FC<{
  id?: string
  services: Service[]
}> = ({ services }) => {
  return (
    <Gutter className={classes.fullServiceList}>
      {services?.map((service, i) => {
        const { category, description, media } = service
        return (
          <div key={i}>
            <div className={classes.categoryWrap}>
              <div id={category.toLowerCase()} className={classes.id} />
              <h3>{category}</h3>
              <div className={classes.description}>{description}</div>
              <div className={classes.serviceList}>
                {service.services.map((service, j) => {
                  const { name, price, description } = service
                  return (
                    <div className={classes.serviceWrap} key={j}>
                      <div className={classes.service}>
                        <span>{name}</span>
                        <span>{price}</span>
                      </div>
                      {description && <span>{description}</span>}
                    </div>
                  )
                })}
              </div>
              <Button
                className={classes.button}
                href={
                  service?.freshaURL ||
                  'https://www.fresha.com/book-now/a3o4vgjg/all-offer?pId=457927'
                }
                label="Book Now"
                appearance="primary"
                newTab
              />
            </div>
            {media && typeof media === 'object' && <div className={classes.separator}>
              (
              <Media className={classes.media} resource={media} fill />
              )
            </div>
            }
          </div>
        )
      })}
      <div className={classes.jumplistWrap}>
        <div className={classes.jumplist}>
          &gt;&gt;&gt;
          {services?.map((service, k) => {
            const { category } = service
            return (
              <button
                key={k}
                className={classes.jumpButton}
                onClick={() => {
                  const element = document.getElementById(category.toLowerCase())
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {`${category}`}
              </button>
            )
          })}
        </div>
      </div>
    </Gutter>
  )
}
