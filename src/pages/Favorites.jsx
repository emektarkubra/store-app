import { StyledFavoriteBox } from "./styled/Favorites.styled";
import { BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Favorites() {
  const [storedFavList, setStoredFavList] = useState([]);

  useEffect(() => {
    const favoriteList = JSON.parse(localStorage.getItem("fav"));
    setStoredFavList(favoriteList || []);
  }, []);

  function handleRemoveFavProduct(product) {
    const updatedFavList = storedFavList.filter(
      (item) => item.id !== product.id
    );
    setStoredFavList(updatedFavList);
    localStorage.setItem("fav", JSON.stringify(updatedFavList));
  }

  return (
    <>
      <StyledFavoriteBox className="card">
        <h1>Favorites: </h1>

        {storedFavList && storedFavList.length !== 0 ? (
          storedFavList.map((product, index) => (
            <>
              <div className="card-body">
                <div className="product-image-box">
                  <img key={index} src={product.image} className="card-img" />
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

                <div className="delete-button-box">
                  <button
                    onClick={() => handleRemoveFavProduct(product)}
                    className="delete-button">
                    <BsX />
                  </button>
                </div>
              </div>
            </>
          ))
        ) : (
          <div className="explain">YOUR SHOPPING BASKET IS EMPTY</div>
        )}
      </StyledFavoriteBox>
    </>
  );
}
