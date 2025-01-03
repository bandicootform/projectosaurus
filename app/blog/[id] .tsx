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
    </div>
  );
};

export default PostDetail;
