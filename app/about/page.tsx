'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About
      </motion.h1>
      <motion.div
        className="max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p className="mb-4">
          Bandicoot Form is a platform dedicated to exploring the intersection of design and creativity. It serves as a space to transform basic ideas into visual expressions, while expanding the gorgeus garden of communication.
        </p>
        <p className="mb-4">
          The focus is on the foundational steps, learning, ceating, and having fun with it. Each work is a chance to dive deeper into the design process, share inspiration, and grow as a designer.
        </p> 
      </motion.div>
    </div>
  )
}

