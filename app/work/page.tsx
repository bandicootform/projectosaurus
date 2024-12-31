'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  { id: 1, image: '/placeholder.svg?height=1200&width=1600' },
  { id: 2, image: '/placeholder.svg?height=1200&width=1600' },
  { id: 3, image: '/placeholder.svg?height=1200&width=1600' },
  { id: 4, image: '/placeholder.svg?height=1200&width=1600' },
  { id: 5, image: '/placeholder.svg?height=1200&width=1600' },
  { id: 6, image: '/placeholder.svg?height=1200&width=1600' },
]

export default function Work() {
  return (
    <div className="min-h-screen p-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center my-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Work
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Image
              src={project.image}
              alt={`Project ${project.id}`}
              width={1600}
              height={1200}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

