import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    
    const addToCart = (id) => {
        setCart([...cart, id]);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
    };
    
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item !== id));
    };
    
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, showPopup }}>
        {children}
        </CartContext.Provider>
    );
    }