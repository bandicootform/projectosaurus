'use client';

import { useEffect, useState } from 'react';
import { client } from '../../sanity';

interface Author {
  name: string;
}

interface ContentBlock {
  _type: string;
  children: { text: string }[];
}

interface Post {
  title: string;
  content: ContentBlock[];
  coverImage?: {
    asset: { _ref: string };
  };
  date: string;
  author?: Author;
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    async function fetchPost() {
      const query = `
        *[_type == "post" && slug.current == $slug][0]{
          title,
          content,
          coverImage {
            asset->{_ref}
          },
          date,
          author->{
            name
          }
        }
      `;
      const data = await client.fetch(query, { slug: params.id });
      setPost(data);
    }

    fetchPost();
  }, [params.id]);

  if (!post) return <div>Loading...</div>;

  return (
    <article>
      <h1>{post.title}</h1>
      {post.coverImage && (
        <img src={`/cdn/${post.coverImage.asset._ref}`} alt={post.title} />
      )}
      <p>By {post.author?.name}</p>
      <p>{new Date(post.date).toLocaleDateString()}</p>
      {post.content.map((block, index) => (
        <div key={index}>
          {block.children.map((child, i) => (
            <p key={i}>{child.text}</p>
          ))}
        </div>
      ))}
    </article>
  );
}
