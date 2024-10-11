import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Contact } from "./pages/contact.jsx"
import { Footer } from './layouts/footer';
import { Header } from './layouts/header';
import { Checkout } from './pages/checkout.jsx';
import { useEffect, useState } from 'react';

function Home() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();

      
      setPosts(json.data);
    }
    getData();
  }, []);

  return ( <main className="flex flex-col w-screen md:grid md:grid-cols-2 lg:grid-cols-3">
  {posts.map((post) => (
    <div id={post.id} className="gap-1 mb-5 flex flex-1 m-auto flex-col text-center">
      <img src={post.image.url} className="size-60" />
      <h2>{post.title}</h2>
      <p>$ {post.price}</p>
      <button className="bg-teal-100 p-1 rounded-lg w-1/2 m-auto">Add to Cart</button>
    </div>
  ))}
  
</main>
)}

function RouteNotFound() {
  return <div>Page not found</div>
}

const url = "https://v2.api.noroff.dev/online-shop";

function App() {
  
  
  
  return (
    <div>
      <Header />
    <Routes>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
    <Footer />
    </div>
      
  );
}

export default App;
