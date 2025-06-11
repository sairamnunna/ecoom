import React, { createContext,useState } from "react";
import all_products from "../Components/Assets/all_products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_products.length; i++) {
    const product = all_products[i];
    cart[product.id] = 0;
  }
  return cart;
};


const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  
  // console.log(cartItems);

  const addToCart =(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
      console.log(cartItems);
  }

  const removeFromCart =(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
  }

  const getTotalAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      const itemInfo = all_products.find(
        (product) => product.id === Number(item)
      );
      if (itemInfo) {
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
  }
  return totalAmount;
};

  const getTotalCartItems =() =>{
    let totalItem =0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        totalItem+= cartItems[item];
      }
    }
    return totalItem;
  }

 const contextValue = {
  getTotalCartItems,
  getTotalAmount,
  all_products,
  cartItems,
  addToCart,
  removeFromCart,
};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
