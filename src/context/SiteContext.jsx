import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const SiteContext = createContext();

export default function SiteContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  function getData(endpoint) {
    useEffect(() => {
      fetch(`https://fakestoreapi.com/${endpoint}`)
        .then((response) => response.json())
        .then((response) => {
          if (endpoint === "products") {
            setProducts(response);
          } else if (endpoint === "products/categories") {
            setCategories(response);
          }
        });
    }, [endpoint]);
  }
  return (
    <>
      <SiteContext.Provider value={{ getData, products, categories }}>
        {children}
      </SiteContext.Provider>
    </>
  );
}
