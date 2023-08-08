import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import ProductCard from "./ProductCard";
import { StyledProductList } from "./styled/ProductList.styled";

export default function ProductList() {
  const { products } = useContext(SiteContext);

  return (
    <>
      <StyledProductList className="card-container">
        {products.map((product) => (
          <ProductCard key={product.id} id={product.id} product={product} />
        ))}
      </StyledProductList>
    </>
  );
}
