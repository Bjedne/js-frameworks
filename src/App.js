import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Contact } from "./pages/contact.jsx";
import { Home } from "./pages/home.jsx";
import { Product } from './pages/ProductPage.jsx';
import { CheckoutPage } from './pages/CheckoutPage.jsx';
import { CheckoutSuccess } from './pages/CheckoutSuccess.jsx';
import { Layout } from './layouts/Layout.jsx';


function RouteNotFound() {
  return <div>Page not found</div>
}

function App() { 
  return (
    <Layout>
    <Routes>
      <Route index element={<Home />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="contact" element={<Contact />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="checkout-success" element={<CheckoutSuccess />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
    </Layout>
      
  );
}

export default App;
