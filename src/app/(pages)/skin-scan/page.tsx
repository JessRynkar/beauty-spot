import React from 'react'
import { Metadata } from 'next'
import Script from 'next/script'

import { Gutter } from '../../_components/Gutter'
import { VerticalPadding } from '../../_components/VerticalPadding'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'

import classes from './index.module.scss'

export default function SkinScanPage() {
  return (
    <>
      <Gutter className={classes.hero}>
        <VerticalPadding top="medium">
          <div className={classes.content}>
            <h1>Dermis AI Skin Analysis</h1>
            <p>
              Curious what our treatments could do for your skin? Take our free Dermis AI skin scan
              to see what results you could expect and book the treatment that&apos;s right for you.
            </p>
          </div>
        </VerticalPadding>
      </Gutter>
      <Gutter className={classes.scanSection}>
        <VerticalPadding top="medium" bottom="medium">
          <div className={classes.scanSlot} data-dermis-page />
        </VerticalPadding>
      </Gutter>
      <Script
        src="https://admin.dermis.ai/embed.js"
        data-dermis-slug="thebeautyspot"
        data-dermis-mode="page"
        strategy="afterInteractive"
      />
    </>
  )
}

export function generateMetadata(): Metadata {
  const title = 'Dermis AI Skin Analysis  The Beauty Spot - Hertfordshire'
  const description = 'Get a free, instant AI-powered skin analysis from The Beauty Spot.'

  return {
    title,
    description,
    openGraph: mergeOpenGraph({
      title,
      description,
      url: '/skin-scan',
    }),
  }
}
