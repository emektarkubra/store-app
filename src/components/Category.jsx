import { Link, useParams } from "react-router-dom";
import { CategoryListItem } from "./styled/Category.styled";

export default function Category({ category }) {
  return (
    <>
      <CategoryListItem className="list-group-item">
        {category.toUpperCase()}
      </CategoryListItem>
    </>
  );
}
