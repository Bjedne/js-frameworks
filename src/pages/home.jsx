import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const url = "https://v2.api.noroff.dev/online-shop";

export function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation
  
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();
      
      setPosts(json.data); // Update this to handle the API response properly
    }
    getData();
  }, []);

  // Handle button click to navigate to product page
  const handleViewProduct = (id) => {
    navigate(`/product/${id}`); // Navigate to the product page using the id
  };

  return (
    <main className="flex flex-col w-screen md:grid md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div key={post.id} className="gap-1 mb-5 flex flex-1 m-auto flex-col text-center">
          <img src={post.image.url} alt={post.title} className="size-60" />
          <h2>{post.title}</h2>
          <p>$ {post.price}</p>
          <button 
            className="bg-teal-100 p-1 rounded-lg w-1/2 m-auto"
            onClick={() => handleViewProduct(post.id)} // Navigate to individual product page on button click
          >
            View product
          </button>
        </div>
      ))}
    </main>
  );
}
