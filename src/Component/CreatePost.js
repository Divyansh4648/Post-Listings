import React from 'react';
import axios from 'axios';
import './CreatePost.css';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.target));
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', values);
      alert('Post created successfully');
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="create-post-container">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea name="description" id="description" rows="4" className="form-control" />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
