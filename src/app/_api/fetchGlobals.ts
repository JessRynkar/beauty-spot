import type { Contact, Footer, Header, Hours } from '../../payload/payload-types'
import { CONTACT_QUERY, FOOTER_QUERY, HEADER_QUERY, HOURS_QUERY } from '../_graphql/globals'

export async function getContact(): Promise<Contact> {
  const contact = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: CONTACT_QUERY,
    }),
  })
    ?.then(res => res.json())
    ?.then(res => {
      return res.data?.Contact
    })

  return contact
}

export async function getHeader(): Promise<Header> {
  const header = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: HEADER_QUERY,
    }),
  })
    ?.then(res => res.json())
    ?.then(res => {
      return res.data?.Header
    })

  return header
}

async function getHours(): Promise<Header> {
  const hours = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: HOURS_QUERY,
    }),
  })
    ?.then(res => res.json())
    ?.then(res => {
      return res.data?.Hours
    })

  return hours
}

export async function getFooter(): Promise<Footer> {
  const footer = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: FOOTER_QUERY,
    }),
  })
    .then(res => res.json())
    ?.then(res => {
      return res.data?.Footer
    })

  return footer
}

export const fetchGlobals = async (): Promise<{
  contact: Contact
  header: Header
  hours: Hours
  footer: Footer
}> => {
  // initiate requests in parallel, then wait for them to resolve
  // this will eagerly start to the fetch requests at the same time
  // see https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
  const contactData = getContact()
  const hoursData = getHours()
  const headerData = getHeader()
  const footerData = getFooter()

  const [contact, header, hours, footer]: [Contact, Header, Hours, Footer] = await Promise.all([
    await contactData,
    await headerData,
    await hoursData,
    await footerData,
  ])

  return {
    contact,
    header,
    hours,
    footer,
  }
}
