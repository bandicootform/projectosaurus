'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Rex's Visual Chaos
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-center mb-12 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Where's all not about perfection but about understanding how type and visuals can tell a story and expanding the gorgeus garden of communication.
      </motion.p>
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Link href="/work" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
          View My Work
        </Link>
        <Link href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-300">
          Get in Touch
        </Link>
      </motion.div>
    </div>
  )
}

