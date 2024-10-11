import { useEffect, useState } from 'react';

const url = "https://v2.api.noroff.dev/online-shop";

export function Home() {
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
        <button className="bg-teal-100 p-1 rounded-lg w-1/2 m-auto">View product</button>
      </div>
    ))}
    
  </main>
  )}