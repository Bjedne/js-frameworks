import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const url = "https://v2.api.noroff.dev/online-shop";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };


  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const handleViewProduct = (id) => {
    navigate(`/product/${id}`); 
  };

  if (isLoading) {
    return <div className="ms-3">Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products. Please try again later.</div>;
  }

  if (!posts) {
    return <div>No product data available.</div>;
  }

  return (
    <div>

      <div className="flex justify-center mt-5 mb-5">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search products..."
          className="border-2 border-gray-300 p-2 rounded-md w-3/4"
        />
      </div>


      <main className="flex flex-col w-screen md:grid md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => {

          const isDiscounted = post.discountedPrice < post.price;
          const discountPercent = isDiscounted
              ? Math.round(((post.price - post.discountedPrice) / post.price) * 100)
              : 0;

          return (
            <div key={post.id} className="gap-1 mb-5 flex flex-1 m-auto flex-col text-center">
              <img src={post.image.url} alt={post.title} className="size-60" />
              <h2>{post.title}</h2>
              

              <div className="price">
                {isDiscounted ? (
                  <>
                    <span className="text-red-500 text-lg font-bold">
                      ${post.discountedPrice.toFixed(2)}
                    </span>
                    <span className="line-through ml-2 text-gray-500 text-sm">
                      ${post.price.toFixed(2)}
                    </span>
                    <span className="ml-2 text-green-500">
                      ({discountPercent}% off)
                    </span>
                  </>
                ) : (
                  <span className="text-lg font-bold">${post.price.toFixed(2)}</span>
                )}
              </div>

              <button 
                className="bg-teal-100 p-1 rounded-lg w-1/2 m-auto"
                onClick={() => handleViewProduct(post.id)}
              >
                View product
              </button>
            </div>
          );
        })}
      </main>
    </div>
  );
}
