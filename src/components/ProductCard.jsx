import { useContext } from "react";
import { Link } from "react-router-dom";
import { SignContext } from "../context/SignContext";
import { StyledProductCard } from "./styled/ProductCard.styled";

export default function ProductCard({ product, id }) {
  const { onlineUser } = useContext(SignContext);


  // added favorite products
  function handleAddFavorites(e) {
    const favList = localStorage.getItem("fav");

    const favProduct = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      description : product.description,
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
      <StyledProductCard className="card">
        <Link to={`/products/product/${id}`}>
          <img src={product.image} className="card-img" />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description.substring(0, 40)}..</p>
          <p className="card-price-text">{product.price} €</p>
          {onlineUser !== null ? (
            <button onClick={handleAddFavorites} className="btn">
              Fav
            </button>
          ) : null}
        </div>
      </StyledProductCard>
    </>
  );
}
