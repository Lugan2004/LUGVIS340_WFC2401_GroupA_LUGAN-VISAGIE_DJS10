/* eslint-disable no-unused-vars */
// App.js
import React, { useState, useEffect } from 'react';
import fetchPosts from './components/fetchPosts';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

return (
  <div>
    {error ? (
      <div>
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    ) : (
      <div>
        <h2>Blog Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
};

export default App;