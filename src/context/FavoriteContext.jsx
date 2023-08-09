import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const FavoriteContext = createContext();

export default function FavoriteContextProvider({ children }) {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    const storedFavList = JSON.parse(localStorage.getItem("fav"))
    setCount(storedFavList ? storedFavList.length : 0)
  },[])

  function handleAddFavorites(product) {
    const favList = JSON.parse(localStorage.getItem("fav"));

    const favProduct = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      description: product.description,
    };

    if (favList === null) {
      localStorage.setItem("fav", JSON.stringify([{ ...favProduct }]));
      setCount((prev) => prev + 1);
    } else {
      const favList = JSON.parse(localStorage.getItem("fav"));
      // if it exist fav product, delete
      if (favList.find((favItem) => favItem.id === favProduct.id)) {
        let index = favList.findIndex(
          (favItem) => favItem.id === favProduct.id
        );
        favList.splice(index, 1);
        localStorage.setItem("fav", JSON.stringify(favList));
        // if it doesnt exist, add
        setCount((prev) => prev - 1);
      } else {
        const newFavList = [...favList, { ...favProduct }];
        localStorage.setItem("fav", JSON.stringify(newFavList));
        setCount((prev) => prev + 1);
      }
    }
  }

  return (
    <>
      <FavoriteContext.Provider value={{ handleAddFavorites, setCount, count }}>
        {children}
      </FavoriteContext.Provider>
    </>
  );
}
