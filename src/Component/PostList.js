import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PostList.css'; // Import your CSS file

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch posts based on start and limit
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${(page - 1) * perPage}&_limit=${perPage}`);
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, [page]);

  return (
    <div className="post-list-container">
        <div style={{display: 'flex',justifyContent: 'space-between', alignItems: 'center'}}>
        <h2 className="post-list-title">List of Posts</h2>
        <button onClick={()=> navigate('/create')} style={{height: 'fit-content', border: 'none', padding: '8px 16px', cursor: 'pointer'}}>Create Post</button>
        </div>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`} className="post-link">{post.title}</Link>
            <p className="post-body">{post.body}</p>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={()=> setPage(v=> v === 1 ? 1 : v - 1)} className="pagination-button">Previous</button>
        <button onClick={()=> setPage(v=> v + 1)} className="pagination-button">Next</button>
      </div>
    </div>
  );
};

export default PostList;
