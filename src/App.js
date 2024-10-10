import { Routes, Route, Link } from 'react-router-dom';
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

  return ( <main>
  {posts.map((post) => (
    <div id={post.id} className="flex flex-col gap-1 mb-5">
      <h2>{post.title}</h2>
      <p>Rating: {post.rating}</p>
      <img src={post.image.url} />
      <p>$ {post.price}</p>
      <p>{post.description}</p>
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
