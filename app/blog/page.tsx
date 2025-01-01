'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const posts = [
  { id: 1, title: 'The Future of Digital Art', date: '2023-05-15' },
  { id: 2, title: 'Exploring Virtual Reality in Modern Museums', date: '2023-06-02' },
  { id: 3, title: 'AI and Creativity: A New Frontier', date: '2023-06-20' },
  { id: 4, title: 'The Impact of Technology on Contemporary Art', date: '2023-07-08' },
]

export default function Blog() {
  return (
    <div className="min-h-screen p-8 pt-16">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center my-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Blog
      </motion.h1>
      <div className="max-w-3xl mx-auto">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Link href={`/blog/${post.id}`} className="block">
              <h2 className="text-2xl font-semibold mb-2 hover:text-blue-400 transition-colors duration-300">{post.title}</h2>
              <p className="text-gray-400">{post.date}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

