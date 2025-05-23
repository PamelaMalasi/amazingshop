
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartId, setCartId] = useState(null);

    // Karta nga mongodb 
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const storedId = sessionStorage.getItem("cartId");
                if (storedId) {
                    const res = await axios.get(`http://localhost:5000/cart/${storedId}`);
                    setCart(res.data.items.map(i => i.itemId)); // extract full item objects
                    setCartId(storedId);
                }
            } catch (err) {
                console.error("Failed to fetch cart:", err);
            }
        };

        fetchCart();
    }, []);

    // kur cart ndryshon - save ne MongoDB 
    useEffect(() => {
        const saveCart = async () => {
            try {
                const cartPayload = {

                    items: cart.filter((item) => item && item._id).map((item) => ({
                        itemId: item._id,
                        quantity: 1,
                    })),
                };

                if (cartId) {
                    await axios.patch(`http://localhost:5000/cart/${cartId}`, cartPayload);
                } else if (cart.length > 0) {
                    const res = await axios.post("http://localhost:5000/cart", cartPayload);
                    setCartId(res.data._id);
                    sessionStorage.setItem("cartId", res.data._id);
                }
            } catch (err) {
                console.error("Failed to save cart:", err);
            }
        };

        if (cart.length > 0) saveCart();
    }, [cart]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const removeFromCart = (indexToRemove) => {
        const updatedCart = cart.filter((_, index) => index !== indexToRemove);
        setCart(updatedCart);

        if (cartId) {
            const cartPayload = {
                items: updatedCart
                    .filter(item => item && item._id)
                    .map(item => ({ itemId: item._id, quantity: 1 })),
            };

            axios.patch(`http://localhost:5000/cart/${cartId}`, cartPayload)
                .catch(err => console.error("Failed to update cart in DB:", err));
        }
    };


    const removeAllFromCart = () => {
        setCart([]);

        if (cartId) {
            axios.patch(`http://localhost:5000/cart/${cartId}`, { items: [] })
                .then(() => {
                    setCartId(null);
                    sessionStorage.removeItem("cartId");
                })
                .catch(err => console.error("Failed to clear cart in DB:", err));
        } else {
            setCartId(null);
            sessionStorage.removeItem("cartId");
        }
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeAllFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
