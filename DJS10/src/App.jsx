/* eslint-disable no-unused-vars */
// App.js
import React, { useState, useEffect } from 'react';
import fetchPosts from './components/fetchPosts'; // Import the fetchPosts function from the './components/fetchPosts' module
import './App.css';

const App = () => {
  // Define state variables using the useState hook
  const [posts, setPosts] = useState([]); // Initialize the 'posts' state with an empty array
  const [error, setError] = useState(null); // Initialize the 'error' state with null

  // Use the useEffect hook to perform side effects (fetch data)
  useEffect(() => {
    // Define an asynchronous function to fetch the data
    const fetchData = async () => {
      try {
        const fetchedPosts = await fetchPosts(); // Call the fetchPosts function and wait for the data
        setPosts(fetchedPosts); // Update the 'posts' state with the fetched data
      } catch (error) {
        setError(error.message); // If an error occurs, update the 'error' state with the error message
      }
    };

    fetchData(); // Call the fetchData function to initiate the data fetching
  }, []); // The empty array ensures that the effect runs only once, on component mount

  // Render the UI based on the state
  return (
    <div>
      {error ? ( // If the 'error' state is not null
        <div>
          <h2>Error</h2>
          <p>{error}</p> {/* Display the error message */}
        </div>
      ) : ( // If the 'error' state is null
        <div>
          <h2>Blog Posts</h2>
          <ul>
            {posts.map((post) => ( // Map over the 'posts' array
              <li key={post.id}> {/* Use the post.id as a unique key for each list item */}
                <h3>{post.title}</h3> {/* Display the post title */}
                <p>{post.body}</p> {/* Display the post body */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;