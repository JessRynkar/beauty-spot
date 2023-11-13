'use client'

import React, { useState } from 'react'

import { Contact, Hours } from '../../../payload/payload-types'
import { ClockIcon } from '../../_icons/Clock'
import { Phone } from '../../_icons/Phone'
import { PinIcon } from '../../_icons/Pin'

import classes from './index.module.scss'

type ContactBlockProps = {
  className?: string
  contact?: Contact
  hours?: Hours
  disableIcons?: boolean
}

const formatTime = (time: string) => {
  const formattedTime = new Date(time).toLocaleTimeString('en-UK', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })

  return `${formattedTime}`
}

export const ContactBlock: React.FC<ContactBlockProps> = ({
  className,
  contact,
  disableIcons,
  hours,
}) => {
  const { days } = hours || {}
  const { number, email, address } = contact || {}
  const [activeTab, setActiveTab] = useState('contact')

  const tabs = [
    {
      name: 'contact',
      label: 'Contact',
    },
    {
      name: 'hours',
      label: 'Hours',
    },
    {
      name: 'location',
      label: 'Location',
    },
  ]

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className={[className && className, classes.contact].filter(Boolean).join(' ')}>
      <div className={classes.tabs}>
        {tabs.map(({ name, label }, i) => {
          return (
            <button
              key={i}
              className={[classes.tab, activeTab === name && classes.active].join(' ')}
              onClick={() => handleTabClick(name)}
            >
              {label}
            </button>
          )
        })}
      </div>

      <div
        className={[classes.wrap, activeTab === 'contact' && classes.activeTab]
          .filter(Boolean)
          .join(' ')}
      >
        {!disableIcons && <Phone />}
        <strong>Contact</strong>
        <span>
          <a href={`tel:${number}`}>{number}</a>
          <a href={`mailto:${email}`}>{email}</a>
        </span>
      </div>
      <div
        className={[classes.wrap, activeTab === 'hours' && classes.activeTab]
          .filter(Boolean)
          .join(' ')}
      >
        {!disableIcons && <ClockIcon />}
        <strong>Hours</strong>
        {Array.isArray(days) && days.length > 0 && (
          <div className={classes.hours}>
            {days.map(({ open, fromDay, toDay, openTime, closeTime }, i) => {
              const day =
                fromDay === toDay
                  ? fromDay.slice(0, 3)
                  : `${fromDay.slice(0, 3)} - ${toDay.slice(0, 3)}`

              if (!open)
                return (
                  <div className={[classes.dayWrap, classes.closed].join(' ')} key={i}>
                    <div className={classes.days}> {day}: </div> closed
                  </div>
                )
              if (open)
                return (
                  <div className={classes.dayWrap} key={i}>
                    <div className={classes.days}> {day}: </div> {formatTime(openTime)} -{' '}
                    {formatTime(closeTime)}
                  </div>
                )
            })}
          </div>
        )}
      </div>
      <div
        className={[classes.wrap, activeTab === 'location' && classes.activeTab]
          .filter(Boolean)
          .join(' ')}
      >
        {!disableIcons && <PinIcon />}
        <strong>Location</strong>
        <a href="https://maps.app.goo.gl/tBxhZZwCMjWHZanDA">
          {address?.line1 && <span>{address.line1}</span>}
          {address?.line2 && <span>{address.line2}</span>}
          <span>United Kingdom</span>
        </a>
      </div>
    </div>
  )
}
