'use client'

import { useRouter } from 'next/router'

const posts = [
  {
    id: 1,
    title: 'The Future of Digital Art',
    date: '2023-05-15',
    content:
      'Digital art is rapidly evolving. From NFTs to generative art, new possibilities are emerging every day for artists worldwide. Artists are embracing new technologies and pushing the boundaries of creativity like never before.'
  },
  {
    id: 2,
    title: 'Exploring Virtual Reality in Modern Museums',
    date: '2023-06-02',
    content:
      'Virtual reality (VR) has transformed the museum experience, allowing visitors to immerse themselves in history and art like never before. Museums are utilizing VR to provide a more interactive and engaging experience for visitors.'
  },
  {
    id: 3,
    title: 'AI and Creativity: A New Frontier',
    date: '2023-06-20',
    content:
      'Artificial intelligence (AI) is pushing the boundaries of creativity. AI tools are helping artists generate new ideas, assist with design, and even produce full pieces of art. This new technology opens up new possibilities for the creative process.'
  },
  {
    id: 4,
    title: 'The Impact of Technology on Contemporary Art',
    date: '2023-07-08',
    content:
      'Technology has reshaped the way we create, share, and experience contemporary art. With the advent of digital tools, artists now have access to new mediums and platforms to express themselves, while art lovers can explore exhibitions and collections from anywhere in the world.'
  }
]

export default function BlogDetail() {
  const router = useRouter()
  const { id } = router.query

  
  const post = posts.find((p) => p.id === parseInt(id as string))

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold">Blog not found.</h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 pt-16 max-w-3xl mx-auto">
      {/* Judul */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {/* Tanggal */}
      <p className="text-gray-400 mb-8">{post.date}</p>

      {/* Isi Konten */}
      <div className="text-lg leading-relaxed">
        <p>{post.content}</p>
      </div>
    </div>
  )
}
