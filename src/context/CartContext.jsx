import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [ cart, setCart] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const addToCart = (item) => {
        setCart([...cart, item]);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
    };

    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, showPopup }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};