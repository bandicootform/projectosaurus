import './globals.css'
import { Poppins } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Head from 'next/head'

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Bandicoot Form - Independent Typographic Practice',
  description: 'It&apos;s not just about pretty fonts, it&apos;s about telling stories with type and design. Dive in as we grow a lush garden of creative communication.',
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
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <body className={`${poppins.className} bg-black text-white`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

