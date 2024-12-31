import { motion } from 'framer-motion'

const posts = [
  { id: 1, title: 'The Future of Digital Art', content: 'Content for the first post.' },
  { id: 2, title: 'Exploring Virtual Reality in Modern Museums', content: 'Content for the second post.' },
  { id: 3, title: 'AI and Creativity: A New Frontier', content: 'Content for the third post.' },
  { id: 4, title: 'The Impact of Technology on Contemporary Art', content: 'Content for the fourth post.' },
        ]


    export async function getStaticPaths() {
        const paths = posts.map((post) => ({
         params: { id: post.id.toString() },
         }))

        return { paths, fallback: false }
    }

    export async function getStaticProps({ params }: { params: { id: string } }) {
        const post = posts.find((post) => post.id.toString() === params.id)

        if (!post) {
            return {
            notFound: true,
         }
        }

        return {
        props: { post },
     }
    }

        export default function Post({ post }: { post: { title: string, content: string } }) {
            return (
             <div className="min-h-screen p-4">
             <motion.h1
                className="text-4xl md:text-6xl font-bold text-center my-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                >
                {post.title}
            </motion.h1>
         <div className="max-w-3xl mx-auto">
        <p>{post.content}</p>
     </div>
    </div>
    )
}