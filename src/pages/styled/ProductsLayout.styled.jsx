import { styled } from "styled-components";

export const StyledProductsLayout = styled.div`
  display: flex;

  & > .products {
    width: 75%;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 30px;
  }
  & > .products > h1 {
    font-size: 30px;
    margin-left: 100px;
    margin-bottom: 0;
  }
  & > .categories {
    width: 25%;
  }

  & > .categories > h1 {
    font-size: 30px;
    margin-left: 10px;
    margin-bottom: 0;
  }
`;
