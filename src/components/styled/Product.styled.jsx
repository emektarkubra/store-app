import { styled } from "styled-components";

export const StyledProduct = styled.div`
  border: 1px solid rgb(43, 48, 53);
  width: 80%;
  height: 400px;
  overflow: hidden;
  border-radius: 5px;
  display: flex;
  & > .product-image-box {
    width: 50%;
    overflow: hidden;
    padding: 20px;
  }
  & > .product-image-box > img {
    width: 90%;
    height: 100%;
  }

  & > .card-body {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
    margin: 0px 25px 25px 25px;
    padding: 0px 15px 15px 15px;
  }

  & > div > h5 {
    font-size: 22px;
    margin: 0;
  }
  & > div > .card-text {
    font-size: 14px;
  }
  & > div > .card-price-text {
    font-size: 18px;
    font-weight: bold;
  }
  & > .card-body > .fav-btn {
    width: 450px;
    height: 25px;
    background-color: white;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    outline: none;
    text-align: end;
    cursor: pointer;
  }
  & > .card-body > .cart-btn {
    width: 100%;
    height: 30px;
    background-color: #bb2d3b;
    border: 1px solid #dc3545;
    border-radius: 5px;
    color: white;
    font-size: 12px;
    outline: none;
    cursor: pointer;
  }
`;
