import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export function CheckoutPage() {
    const { cart, increaseQuantity, decreaseQuantity, getTotalPrice, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
        clearCart();
        navigate("/checkout-success");
    };

    return (
        <div className="checkout-page">
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cart.map(item => {
                        const isDiscounted = item.discountedPrice < item.price;

                        return (
                            <div key={item.id} className="cart-item flex justify-between items-center mb-4 border p-2">
                                <img src={item.image} alt={item.title} className="w-16 h-16"/>
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>
                                        {isDiscounted ? (
                                            <>
                                                <span className="text-red-500 font-bold">${item.discountedPrice.toFixed(2)}</span>
                                                <span className="line-through ml-2 text-gray-500">${item.price.toFixed(2)}</span>
                                            </>
                                        ) : (
                                            <span>${item.price.toFixed(2)} each</span>
                                        )}
                                    </p>
                                    <div className="quantity-control">
                                        <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 bg-red-400 text-white">-</button>
                                        <span className="px-4">{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 bg-green-400 text-white">+</button>
                                    </div>
                                </div>
                                <p>
                                    Subtotal: $
                                    {isDiscounted
                                        ? (item.discountedPrice * item.quantity).toFixed(2)
                                        : (item.price * item.quantity).toFixed(2)
                                    }
                                </p>
                            </div>
                        );
                    })}
                    <div className="total-price">
                        <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
                    </div>
                    <button 
                        onClick={handleCheckout} 
                        className="bg-teal-200 p-2 rounded-lg w-full mt-4"
                    >
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
}
