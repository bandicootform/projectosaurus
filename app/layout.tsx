import './globals.css'
import { Poppins } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Bandicoot Form',
  description: 'Bandicoot Form is an independent platform practice focused on design, creative sharing, and meant to be seen as much as to be read',
  icons: {
    icon: '/images/favicon.png'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${poppins.className} bg-black text-white`}>
        <Navigation />
        <main>{children}</main>
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}

