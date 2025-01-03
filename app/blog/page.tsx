'use client';

import { useEffect, useState } from 'react';
import { client } from '../../sanity';
import Link from 'next/link';

interface Post {
  title: string;
  slug: { current: string };
  excerpt: string;
  coverImage?: {
    asset: { _ref: string };
  };
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const query = `
        *[_type == "post"]{
          title,
          slug,
          excerpt,
          coverImage {
            asset->{_ref}
          }
        }
      `;
      const data = await client.fetch(query);
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug.current}>
            <Link href={`/blog/${post.slug.current}`}>
              {post.title}
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
