import { useEffect, useState } from 'react';
import { client } from '../sanity';
import Link from 'next/link';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch('*[_type == "post"]');
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
<<<<<<< HEAD
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h2>
              <Link href={`/blog/${post._id}`}>
                {post.title}
              </Link>
            </h2>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
=======
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
className="block">
href={`/blog/${post.id}`} className="block">
className="block">
<Link href={`/blog/${post.id}`} className="block">
className="blo
>>>>>>> cbd4c5b (update package)
