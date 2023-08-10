import { BsX, BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { StyledCartBox } from "./styled/Cart.styled";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FavoriteContext } from "../context/FavoriteContext";
import Payment from "../components/Payment";

export default function Carts() {
  const [storedCartList, setStoredCartList] = useState([]);
  const { setCartCount, setTotalPrice } = useContext(CartContext);
  const { setCount } = useContext(FavoriteContext);

  useEffect(() => {
    const cartList = JSON.parse(localStorage.getItem("cart"));
    setStoredCartList(cartList || []);
  }, []);

  function handleRemoveCartProduct(product) {
    const index = storedCartList.findIndex((item) => item.id == product.id);
    if (index !== -1) {
      const updatedCartList = [...storedCartList];
      updatedCartList.splice(index, 1);
      setStoredCartList(updatedCartList);
      localStorage.setItem("cart", JSON.stringify(updatedCartList));
      setCartCount((prev) => prev - 1);
      setTotalPrice((prev) => parseFloat((prev - product.price).toFixed(2)));
    }
  }

  function handleMoveFromCartToFav(product) {
    handleRemoveCartProduct(product);
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
        const newFavList = [...favList];
        localStorage.setItem("fav", JSON.stringify(newFavList));
      } else {
        const newFavList = [...favList, { ...favProduct }];
        localStorage.setItem("fav", JSON.stringify(newFavList));
        setCount((prev) => prev + 1);
      }
    }
  }

  return (
    <>
      <StyledCartBox className="card">
        <div className="card">
          <h1>Cart: </h1>
          {storedCartList && storedCartList.length !== 0 ? (
            storedCartList.map((product, index) => (
              <>
                <div className="card-body">
                  <div className="product-image-box">
                    <img key={index} src={product.image} className="card-img" />
                  </div>

                  <div className="card-content">
                    <Link
                      className="link"
                      to={`/products/product/${product.id}`}>
                      <h5 className="card-title">
                        {product.title.toUpperCase()}
                      </h5>
                    </Link>
                    <div className="button-box">
                      <button
                        onClick={() => handleMoveFromCartToFav(product)}
                        className="fav-button">
                        <BsBookmark />
                      </button>
                      <button
                        onClick={() => handleRemoveCartProduct(product)}
                        className="delete-button">
                        <BsX />
                      </button>
                    </div>
                  </div>
                  <div className="card-price-box">
                    <p className="card-price-text">Price : {product.price} €</p>
                  </div>
                </div>
              </>
            ))
          ) : (
            <div className="explain">YOUR SHOPPING BASKET IS EMPTY</div>
          )}
        </div>
      </StyledCartBox>
      <Payment />
    </>
  );
}
