import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetails.css'; 

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      setPost(data);
    };

    fetchData();
  }, [id]);

  return (
    <div className="post-detail-container">
      {post ? (
        <div>
          <h2 className="post-title">{post.title}</h2>
          <p className="post-body">{post.body}</p>
        </div>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
    </div>
  );
};

export default PostDetail;
