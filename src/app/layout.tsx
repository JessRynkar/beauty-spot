import React from 'react'
import { ModalContainer, ModalProvider } from '@faceless-ui/modal'
import { Metadata } from 'next'

import { Footer } from './_components/Footer'
import { Header } from './_components/Header'
import { Providers } from './_providers'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'

import './_css/app.scss'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          {/* @ts-expect-error */}
          <Header />
          {children}
          {/* @ts-expect-error */}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://beauty-spot.co.uk'),
  openGraph: mergeOpenGraph(),
}
