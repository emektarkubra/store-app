import { StyledFavoriteBox } from "./styled/Favorites.styled";
import { BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import { CartContext } from "../context/CartContext";

export default function Favorites() {
  const { setCount } = useContext(FavoriteContext);
  const { handleAddCarts } = useContext(CartContext);
  const [storedFavList, setStoredFavList] = useState([]);

  useEffect(() => {
    const favoriteList = JSON.parse(localStorage.getItem("fav"));
    setStoredFavList(favoriteList || []);
  }, []);

  function handleRemoveFavProduct(product) {
    const updatedFavList = storedFavList.filter(
      (item) => item.id !== { ...product, isAdded: false }.id
    );
    setStoredFavList(updatedFavList);
    localStorage.setItem("fav", JSON.stringify(updatedFavList));
    setCount((prev) => prev - 1);
  }

  function handleMoveFromFavToCart(product) {
    handleRemoveFavProduct(product);
    handleAddCarts(product);
  }

  return (
    <>
      <StyledFavoriteBox className="card">
        <h1>Favorites: </h1>

        {storedFavList && storedFavList.length !== 0 ? (
          storedFavList.map((product) => (
            <div key={product.id} className="card-body">
              <div className="product-image-box">
                <img src={product.image} className="card-img" />
              </div>

              <hr />

              <div className="card-content">
                <Link className="link" to={`/products/product/${product.id}`}>
                  <h5 className="card-title">{product.title}</h5>
                </Link>
                <p className="card-text">
                  {product.description.substring(0, 60)}..
                </p>
                <p className="card-price-text">Price : {product.price} €</p>
              </div>

              <div className="button-box">
                <button
                  onClick={() => handleRemoveFavProduct(product)}
                  className="delete-button">
                  <BsBookmarkFill className="mark-fill" />
                </button>
                <button
                  onClick={() => handleMoveFromFavToCart(product)}
                  className="btn cart-btn">
                  Add Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="explain">YOUR SHOPPING BASKET IS EMPTY</div>
        )}
      </StyledFavoriteBox>
    </>
  );
}
