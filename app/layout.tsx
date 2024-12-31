import './globals.css'
import { Poppins } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Bandicoot Form - Independent Typographic Practice',
  description: 'A space for learning typography and graphic design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black text-white`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

