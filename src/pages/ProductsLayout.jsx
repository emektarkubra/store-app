import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Categories from "../components/Categories";
import { SiteContext } from "../context/SiteContext";
import { StyledProductsLayout } from "./styled/ProductsLayout.styled";

export default function ProductsLayout() {
  const { getData } = useContext(SiteContext);
  getData("products");

  return (
    <>
      <StyledProductsLayout className="container">
        <div className="products">
          <Outlet />
        </div>
        <div className="categories">
          <h1>Categories:</h1>
          <Categories />
        </div>
      </StyledProductsLayout>
    </>
  );
}
