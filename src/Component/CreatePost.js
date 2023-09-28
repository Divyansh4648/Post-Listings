import React from 'react';
import axios from 'axios';
import './CreatePost.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send a POST request to your API)
    const values = Object.fromEntries(new FormData(event.target));
    try {
      // Make a POST request to the API to create a new post
      await axios.post('https://jsonplaceholder.typicode.com/posts', values);
      // Show success message
      alert('Post created successfully');
      // Redirect to the previous post listing screen
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
