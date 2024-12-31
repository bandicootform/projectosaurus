'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const projects = [
  { id: 1, image: '/images/project1.webp' },
  { id: 2, image: '/images/project2.webp' },
  { id: 3, image: '/images/project3.webp' },
  { id: 4, image: '/images/project4.webp' },
  { id: 5, image: '/images/project5.webp' },
  { id: 6, image: '/images/project6.webp' },
  { id: 7, image: '/images/project7.webp' },
  { id: 8, image: '/images/project8.webp' },
  { id: 9, image: '/images/project9.webp' },
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
          <RevealImage key={project.id} image={project.image} index={index} />
        ))}
      </div>
    </div>
  )
}

function RevealImage({ image, index }: { image: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      className="bg-gray-800 rounded-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <Image
        src={image}
        alt={`Project ${index + 1}`}
        width={1600}
        height={1200}
        className="w-full h-auto object-cover"
        priority
      />
    </motion.div>
  )
}
