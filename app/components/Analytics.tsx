'use client'

import Script from 'next/script'

export default function Analytics() {
  if (process.env.NODE_ENV !== 'production') return null

  return (
    <Script
      defer
      data-domain="elexcreatives.com"
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  )
}
