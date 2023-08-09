import { BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { StyledCartBox } from "./styled/Cart.styled";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Carts() {
  const [storedCartList, setStoredCartList] = useState([]);
  const { setCartCount } = useContext(CartContext);

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
                    <div className="delete-button-box">
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
        {/* <div className="credit-box">

          slfmaşlm
        </div> */}
      </StyledCartBox>
    </>
  );
}
