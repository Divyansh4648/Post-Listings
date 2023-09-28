import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PostList from '../src/Component/PostList.js';
import CreatePost from '../src/Component/CreatePost.js';
import PostDetail from '../src/Component/PostDetail.js';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<PostList />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
