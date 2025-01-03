import './globals.css'
import { Arimo } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../lib/fontawesome';

const arimo = Arimo({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    display: 'swap',
  })

export const metadata = {
  title: 'Bandicoot Form',
  description: 'Bandicoot Form is a platform focused on exploring creativity and expanding the gorgeus garden of communication, a place to transform simple ideas into visual expressions and meant to be seen as much as to be read.',
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
      <body className={`bg-black text-white ${arimo.className}`}>
        <Navigation />
        <main>{children}</main>
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}

