import { useEffect, useState } from 'react';
import { client } from '../sanity';
import Link from 'next/link';

interface Post {
  _id: string;
  title: string;
  excerpt: string;
  coverImage: { asset: { url: string } };
  slug: { current: string };
  author: { name: string };
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
              <Link href={`/blog/${it-s-called-the-great-whirlwind}`}>
                {post.title}
              </Link>
            </h2>
            <p>{post.excerpt}</p>
            <p>By {post.author.name}</p>
            {post.coverImage && (
              <img src={post.coverImage.asset.url} alt={post.title} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
