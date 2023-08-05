import { useContext } from "react";
import { Link } from "react-router-dom";
import { SiteContext } from "../context/SiteContext";
import Category from "./Category";
import { StyledCategoriesList } from "./styled/Categories.styled";

export default function Categories() {
  const { getData, categories } = useContext(SiteContext);
  getData("products/categories");
  return (
    <>
      <StyledCategoriesList className="list-groups">
        {categories.map((category, index) => (
          <Link to={`/products/category/${category}`} key={index}>
            <li className="list-group-item">{category.toUpperCase()}</li>
          </Link>
        ))}
      </StyledCategoriesList>
    </>
  );
}
