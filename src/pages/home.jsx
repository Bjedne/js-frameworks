import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const url = "https://v2.api.noroff.dev/online-shop";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    async function getData() {
        try {
            setIsLoading(true);
            setIsError(false); 

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch the data"); 
            }
            const json = await response.json();

            setPosts(json.data);
        } catch (error) {
            console.error(error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }
    getData();
  }, []);

  if (isLoading) {
    return <div className="ms-3">Loading...</div>;
}

if (isError) {
    return <div>Error loading product. Please try again later.</div>;
}

if (!posts) {
    return <div>No product data available.</div>;
}


  const handleViewProduct = (id) => {
    navigate(`/product/${id}`); 
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
            onClick={() => handleViewProduct(post.id)}
          >
            View product
          </button>
        </div>
      ))}
    </main>
  );
}
