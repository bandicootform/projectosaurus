import { useEffect, useState } from 'react';
import { client } from '../../sanity'; 
import { useRouter } from 'next/router';

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const { query } = useRouter(); 
  const { id } = query;

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        const query = `*[_type == "post" && _id == $id][0]`;
        const data = await client.fetch(query, { id });
        setPost(data);
      };
      fetchPost();
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
      <div>{post.content}</div>
      {post.coverImage && (
        <img src={post.coverImage.asset.url} alt={post.title} />
      )}
      {post.date && <p>{new Date(post.date).toLocaleDateString()}</p>}
      {post.author && <p>Written by: {post.author.name}</p>}
    </div>
  );
};

export default PostDetail;
