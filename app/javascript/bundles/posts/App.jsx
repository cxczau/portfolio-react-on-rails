import React, { useState, useEffect } from 'react';

import Post from "./Post";

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    Rails.ajax({
      type: 'GET',
      url: '/posts.json',
      success: posts => setPosts(posts),
      error: error => console.log("Error: GET /posts.json", error),
    });
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="row m-2">
      {posts.map((post) => (
        <div className="col-4" key={post.id}>
          <Post key={post.id} {...post} />
        </div>
      ))}
    </div>
  );
}

export default App;