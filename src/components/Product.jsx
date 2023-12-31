import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FavoriteContext } from "../context/FavoriteContext";
import { SignContext } from "../context/SignContext";
import { StyledProduct } from "./styled/Product.styled";
import { BsBookmark } from "react-icons/bs";

export default function Product() {
  const params = useParams();

  const { onlineUser } = useContext(SignContext);
  const { handleAddFavorites } = useContext(FavoriteContext);
  const { handleAddCarts } = useContext(CartContext);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, [params]);

  return (
    <>
      <StyledProduct className="card">
        <div className="product-image-box">
          <img src={product.image} className="card-img" />
        </div>
        <hr />
        <div className="card-body">
          <button
            onClick={() => handleAddFavorites(product)}
            className="btn fav-btn">
            {onlineUser && <BsBookmark />}
          </button>
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-price-text">Price : {product.price} €</p>
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
      </StyledProduct>
    </>
  );
}
