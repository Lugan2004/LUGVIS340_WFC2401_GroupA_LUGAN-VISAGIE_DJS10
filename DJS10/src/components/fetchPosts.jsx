// fetchPosts.js
const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
  
    const posts = await response.json();
    return posts;
  };
  
  export default fetchPosts;