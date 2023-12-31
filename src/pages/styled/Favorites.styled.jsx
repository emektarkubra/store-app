import { styled } from "styled-components";

export const StyledFavoriteBox = styled.div`
  width: 40%;
  margin: 80px;

  & > .explain {
    border: 1px solid #00000061;
    width: 400px;
    font-size: 20px;
    border-radius: 5px;
    padding: 10px;
  }
  & > .card-body {
    border: 1px solid #00000061;
    border-radius: 5px;
    width: 100%;
    height: 140px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    padding: 15px;

    & > .product-image-box {
      width: 15%;
      overflow: hidden;
      padding: 15px;
      & > img {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    }

    & > .card-content {
      width: 300px;
      padding: 15px;

      & > a > .card-title {
        font-size: 15px;
        margin: 0;
      }

      & > .card-price-text {
        font-size: 15px;
        font-weight: bold;
      }
    }
    & > .button-box {
      width: 75px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & > .delete-button {
        border: none;
        background-color: white;
        font-size: 18px;
        outline: none;
        cursor: pointer;
        text-shadow: 0 0 3px #000;
      }

      & > .cart-btn {
        width: 100%;
        height: 25px;
        background-color: #6c757d;
        border: 1px solid #565e64;
        border-radius: 5px;
        color: white;
        font-size: 12px;
        outline: none;
        cursor: pointer;
      }
    }
  }
`;
