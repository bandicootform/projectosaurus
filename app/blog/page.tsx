'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const posts = [
  { id: 1, title: 'Journey to Minimalist Design: Lessons Learned', date: '2025-01-01' },
  { id: 2, title: 'My First Website with Next.js: A Beginner’s Experience', date: '2025-01-02' },
  { id: 3, title: 'Typography Experiments: From Sketches to Digital', date: '2025-01-03' },
  { id: 4, title: 'Challenges in Combining Design and Functionality', date: '2025-01-04' },
];

export default function Blog() {
  return (
    <div className="min-h-screen p-6 pt-16">
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
  );
}
