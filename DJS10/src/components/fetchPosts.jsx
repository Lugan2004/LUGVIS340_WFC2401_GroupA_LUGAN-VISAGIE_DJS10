// fetchPosts.js
const fetchPosts = async () => {
    // Send an asynchronous GET request to the specified API endpoint
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
    // Check if the response is successful (status code in the 200-299 range)
    if (!response.ok) {
      // If the response is not successful, throw an error with a custom message
      throw new Error('Failed to fetch posts');
    }
  
    // If the response is successful, parse the response body as JSON
    const posts = await response.json();
  
    // Return the parsed JSON data (an array of blog posts)
    return posts;
  };
  
  // Export the fetchPosts function as the default export of this module
  export default fetchPosts;