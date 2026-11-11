import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Contact, Hours, Page } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { fetchGlobals } from '../../_api/fetchGlobals'
import { Blocks } from '../../_components/Blocks'
import { Hero } from '../../_components/Hero'
import { generateMeta } from '../../_utilities/generateMeta'

export const dynamic = 'force-dynamic'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params }: Args) {
  const { slug = 'home' } = await params
  let page: Page
  let contact: Contact
  let hours: Hours

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug,
    })

    const { contact: contactFromProps, hours: hoursFromProps } = await fetchGlobals()
    contact = contactFromProps
    hours = hoursFromProps
  } catch (error) {
    return notFound()
  }

  if (!page) return notFound()

  const { hero, layout } = page

  return (
    <React.Fragment>
      <Hero {...hero} contact={contact} hours={hours} />
      <Blocks blocks={layout} />
    </React.Fragment>
  )
}

export async function generateStaticParams() {
  try {
    const pages = await fetchDocs<Page>('pages')
    return pages?.map(({ slug }) => ({ slug }))
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug = 'home' } = await params
  let page: Page | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug,
    })
  } catch (error) {
    // do nothing
  }
  return generateMeta({ doc: page })
}
