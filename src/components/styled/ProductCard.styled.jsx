import { styled } from "styled-components";

export const StyledProductCard = styled.div`
  border: 1px solid rgb(43, 48, 53);
  width: 210px;
  height: 500px;
  padding: 15px;
  margin: 20px;
  overflow: hidden;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > a {
    overflow : hidden;
  }
  & > a> img {
    width: 100%;
    height: 250px;
    min-width: 100%;
    overflow : hidden;
  }

  & > div > h5 {
    font-size: 16px;
  }
  & > div > .card-text {
    font-size: 14px;
  }
  & > div > .card-price-text {
    font-size: 18px;
    font-weight: bold;
  }
  & > .card-body > .fav-btn {
    width: 100%;
    height: 25px;
    background-color: #0d6efd;
    border: 1px solid #034fc0;
    border-radius: 5px;
    color: white;
    font-size: 12px;
    outline: none;
    margin-bottom : 2px;
    cursor: pointer;
  }
  & > .card-body > .cart-btn {
    width: 100%;
    height: 25px;
    background-color: #bb2d3b;
    border: 1px solid #dc3545;
    border-radius: 5px;
    color: white;
    font-size: 12px;
    outline: none;
    cursor: pointer;
  }
`;
