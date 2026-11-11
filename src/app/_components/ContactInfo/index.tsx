'use client'

import React, { useEffect, useState } from 'react'

import { Contact, Hours } from '../../../payload/payload-types'
import { Button } from '../Button'

import classes from './index.module.scss'

const formatTime = (time: string) => {
  const formattedTime = new Date(time).toLocaleTimeString('en-UK', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })

  return `${formattedTime}`
}

export const ContactInfo: React.FC<{}> = () => {
  const [contact, setContact] = useState<Contact | null>(null)
  const [hours, setHours] = useState<Hours | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/contact`)
        const contactJson = await contactReq.json()

        const hoursReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/hours`)
        const hoursJson = await hoursReq.json()

        setContact(contactJson)
        setHours(hoursJson)
      } catch (error) {
        // silently ignore - contact/hours sections just won't render
      }
    }

    fetchData()
  }, [])

  if (!contact || !hours) return null

  return (
    <div className={classes.contact}>
      <div className={classes.wrap}>
        <h6>Contact</h6>
        <span>
          <a href={`tel:${contact.number}`}>{contact.number}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </span>
      </div>
      <div className={classes.wrap}>
        <h6>Hours</h6>
        {Array.isArray(hours.days) && hours.days.length > 0 && (
          <div className={classes.hours}>
            {hours.days.map(({ open, fromDay, toDay, openTime, closeTime }, i) => {
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
      <div className={classes.wrap}>
        <h6>Location</h6>
        <a href="https://maps.app.goo.gl/tBxhZZwCMjWHZanDA">
          {contact.address?.line1 && <span>{contact.address.line1}</span>}
          {contact.address?.line2 && <span>{contact.address.line2}</span>}
          <span>United Kingdom</span>
        </a>
      </div>
      <Button
        className={classes.book}
        href="https://www.fresha.com/book-now/a3o4vgjg/all-offer?pId=457927"
        newTab
        appearance="outline"
        label="Book Appointment"
      />
    </div>
  )
}
