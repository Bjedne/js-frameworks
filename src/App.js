import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Contact } from "./pages/contact.jsx"
import { Footer } from './layouts/footer';
import { Header } from './layouts/header';
import { Home } from "./pages/home.jsx";
import { Checkout } from './pages/CheckoutSuccess.jsx';

function RouteNotFound() {
  return <div>Page not found</div>
}

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
