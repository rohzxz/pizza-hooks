import { createContext, useState } from "react";
import { PRODUCTS } from "./data";

export const ShopPizzaContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ContextCart = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItem[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const contextValue = {
    cartItem,
    addToCart,
    removeToCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <ShopPizzaContext.Provider value={contextValue}>
      {props.children}
    </ShopPizzaContext.Provider>
  );
};
