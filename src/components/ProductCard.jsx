import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FavoriteContext } from "../context/FavoriteContext";
import { SignContext } from "../context/SignContext";
import { StyledProductCard } from "./styled/ProductCard.styled";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useEffect } from "react";

export default function ProductCard({ product, id }) {
  const { onlineUser } = useContext(SignContext);
  const { handleAddFavorites } = useContext(FavoriteContext);
  const { handleAddCarts } = useContext(CartContext);

  const [newStoredFavList, setNewStoredFavList] = useState([]);
  const [isAvailable, setIsAvailable] = useState(
    newStoredFavList.find((fav) => fav.id === product.id)
  );

  useEffect(() => {
    const storedFavList = JSON.parse(localStorage.getItem("fav"));
    setNewStoredFavList(storedFavList ?? []);
  }, []);

  return (
    <>
      <StyledProductCard className="card">
        <button
          onClick={() => {
            handleAddFavorites(product);
            setIsAvailable(!isAvailable);
          }}
          className="btn fav-btn">
          {onlineUser && (isAvailable ? <BsBookmarkFill /> : <BsBookmark />)}
        </button>
        <Link to={`/products/product/${id}`}>
          <img src={product.image} className="card-img" />
        </Link>

        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description.substring(0, 40)}..</p>
          <p className="card-price-text">{product.price} €</p>
          {onlineUser !== null ? (
            <>
              <button
                onClick={() => handleAddCarts(product)}
                className="btn cart-btn">
                Add Cart
              </button>
            </>
          ) : null}
        </div>
      </StyledProductCard>
    </>
  );
}
