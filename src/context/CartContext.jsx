import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  const [totalPrice, setTotalPrice] = useState(() => {
    const storedTotalPrice = JSON.parse(localStorage.getItem("totalPrice"));
    return storedTotalPrice ?? 0;
  });

  useEffect(() => {
    const storedCartList = JSON.parse(localStorage.getItem("cart"));
    setCartCount(storedCartList ? storedCartList.length : 0);
  }, []);

  useEffect(() => {
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  }, [totalPrice]);

  function handleAddCarts(product) {
    const cartList = JSON.parse(localStorage.getItem("cart"));

    const cartProduct = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      description: product.description,
    };

    if (cartList === null) {
      localStorage.setItem("cart", JSON.stringify([{ ...cartProduct }]));
      setCartCount((prev) => prev + 1);
    } else {
      const cartList = JSON.parse(localStorage.getItem("cart"));
      // if it exist cart product, delete
      const newcartList = [...cartList, { ...cartProduct }];
      localStorage.setItem("cart", JSON.stringify(newcartList));
      setCartCount((prev) => prev + 1);
    }
    setTotalPrice((prev) => parseFloat((prev + product.price).toFixed(2)));
  }

  return (
    <>
      <CartContext.Provider
        value={{
          handleAddCarts,
          setCartCount,
          setTotalPrice,
          cartCount,
          totalPrice,
        }}>
        {children}
      </CartContext.Provider>
    </>
  );
}
