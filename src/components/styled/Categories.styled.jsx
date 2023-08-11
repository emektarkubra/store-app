import { styled } from "styled-components";

export const StyledCategoriesList = styled.ul`
  padding: 10px;
  margin-top: 55px;
  border-radius: 5px;
  & > a:visited {
    color: black;
    text-decoration: none;
  }
  .list-group-item {
    border: 1px solid #00000065;
    width: 65%;
    font-size: 18px;
    display: block;
    padding: 7px;
  }
`;
