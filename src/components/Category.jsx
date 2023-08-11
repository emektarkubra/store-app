import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function Category() {
  const params = useParams();

  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${params.categoryName}`)
      .then((res) => res.json())
      .then((res) => setCategoryProducts(res));
  }, [params]);

  return (
    <>
      {categoryProducts.map((product, index) => (
        <ProductCard key={index} id={product.id} product={product} />
      ))}
    </>
  );
}
