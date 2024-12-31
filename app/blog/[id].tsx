// pages/blog/[id].tsx
import { useRouter } from 'next/router'

const posts = [
  { id: 1, title: 'The Future of Digital Art', content: 'Content of The Future of Digital Art...', date: '2023-05-15' },
    { id: 2, title: 'Exploring Virtual Reality in Modern Museums', content: 'Content of Exploring Virtual Reality...', date: '2023-06-02' },
      { id: 3, title: 'AI and Creativity: A New Frontier', content: 'Content of AI and Creativity...', date: '2023-06-20' },
        { id: 4, title: 'The Impact of Technology on Contemporary Art', content: 'Content of The Impact of Technology...', date: '2023-07-08' },
        ]

    export default function Post() {
     const { query } = useRouter()
     const postId = query.id
     const post = posts.find((post) => post.id === parseInt(postId))

    if (!post) {
    return <div>Post not found</div>
     }

     return (
    <div className="min-h-screen p-4">
     <motion.h1 
     className="text-4xl md:text-6xl font-bold text-center my-8"
     initial={{ opacity: 0, y: -50 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.8 }}>
     {post.title}
    </motion.h1>
    <div className="max-w-3xl mx-auto">
     <p className="text-gray-400 mb-4">{post.date}</p>
     <p>{post.content}</p>
    </div>
 </div>
 )
 }