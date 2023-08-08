import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SignContext } from "../context/SignContext";
import { StyledProduct } from "./styled/Product.styled";

export default function Product() {
  const { onlineUser } = useContext(SignContext);

  const params = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}` )
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, [params]); 

  function handleAddFavorites(e) {
    const favList = localStorage.getItem("fav");

    const favProduct = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
    };

    if (favList === null) {
      localStorage.setItem("fav", JSON.stringify([{ ...favProduct }]));
    } else {
      const storedFavList = JSON.parse(localStorage.getItem("fav"));
      // if it exist fav product, delete
      if (storedFavList.find((favItem) => favItem.id === favProduct.id)) {
        let index = storedFavList.findIndex(
          (favItem) => favItem.id === favProduct.id
        );
        storedFavList.splice(index, 1);
        localStorage.setItem("fav", JSON.stringify(storedFavList));
        // if it doesnt exist, add
      } else {
        const newStoredFavList = [...storedFavList, { ...favProduct }];
        localStorage.setItem("fav", JSON.stringify(newStoredFavList));
      }
    }
  }

  return (
    <>
      <StyledProduct className="card">
        <div className="product-image-box">
          <img src={product.image} className="card-img" />
        </div>

        <hr />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-price-text">Price : {product.price} €</p>
          {onlineUser !== null ? (
            <button onClick={handleAddFavorites} className="btn">
              Fav
            </button>
          ) : null}
        </div>
      </StyledProduct>
    </>
  );
}
