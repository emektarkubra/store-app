import { styled } from "styled-components";

export const StyledCartBox = styled.div`
  width: 90%;
  margin: 20px;
  margin-left: 70px;

  & > .card {
    overflow: hidden;
    & > .explain {
      width: 400px;
      font-size: 20px;
      border-radius: 5px;
      padding: 10px;
    }
    & > .card-body {
      border: 1px solid #00000061;
      width: 200px;
      height: 320px;
      overflow: hidden;
      padding: 15px;
      float: left;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      & > .card-price-box {
        & > .card-price-text {
          font-size: 15px;
          justify-self: end;
        }
      }

      & > .product-image-box {
        width: 150px;
        height: 150px;
        overflow: hidden;
        padding: 15px;
        & > img {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
      }

      & > .card-content {
        width: 100%;
        display: flex;
        margin-top: 10px;

        & > a > .card-title {
          width: 100%;
          height: 50px;
          color: #666;
          font-size: 12px;
          margin: 0;
          margin-bottom: 25px;
        }

        & > .button-box {
          display: flex;
          & > .delete-button {
            border: none;
            background-color: white;
            font-size: 18px;
            outline: none;
            float: left;
            cursor: pointer;
            &:hover {
              color: red;
            }
          }
          & > .fav-button {
            border: none;
            background-color: white;
            font-size: 15px;
            outline: none;
            float: left;
            cursor: pointer;
          }
        }
      }
    }
    & > .credit-box {
      border: 1px solid blue;
      width: 400px;
      height: 400px;
    }
  }
`;
