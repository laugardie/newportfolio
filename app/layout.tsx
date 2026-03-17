import type { Metadata } from 'next'
import Script from 'next/script'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Laura García — Product Designer',
  description:
    'Product designer crafting thoughtful digital experiences. Currently freelancing, previously Gumroad.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-dm-sans bg-bg text-ink antialiased">
        {children}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J7JSKSS7Q5"
        />
        <Script id="google-analytics">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J7JSKSS7Q5');
        `}</Script>
      </body>
    </html>
  )
}
