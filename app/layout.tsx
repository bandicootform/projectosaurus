import './globals.css'
import { Poppins } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head';

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin']
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
      <Head>
        <link rel="stylesheet" 
        href="https://fonts.cdnfonts.com/css/helvetica-neue-55" />
        </Head>
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

