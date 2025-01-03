import { useEffect, useState } from 'react';
import { client } from '../sanity';
import Link from 'next/link';

interface Post {
  _id: string;
  title: string;
  excerpt: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch('*[_type == "post"]');
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
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
