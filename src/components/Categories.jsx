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
          <Link key={index}>
            <Category category={category} />{" "}
          </Link>
        ))}
      </StyledCategoriesList>
    </>
  );
}
