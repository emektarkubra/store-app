import { styled } from "styled-components";

export const StyledPaymentBox = styled.div`
  border: 1px solid black;
  background-color: white;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: end;
  height: 76px;

  & > .credit-box {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    font-weight: bold;
    padding: 17px;

    & > .total-credit-box {
      width: 100%;
      margin-right: 48px;
      display: flex;
      & > h3 {
        color: #000000ed;
        margin: 0;
      }
      & > p {
        color: #000000ed;
        width: 80px;
        text-align: center;
        margin: auto;
      }
    }

    & > .total-credit-quantity {
      & > p {
        color: #000000be;
        font-size: 10px;
        text-align: center;
        margin: 0;
        margin-left: 50px;
      }
    }
  }
  & > .countinue-button-box {
    width: 172px;
    border-radius: 0;

    & > .continue-button {
      width: 100%;
      height: 100%;
      font-size: 15px;
      background-color: black;
      color: white;
      border: none;
      cursor: pointer;
    }
  }
`;
