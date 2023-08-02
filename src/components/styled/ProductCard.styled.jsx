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
  justify-content: flex-end;

  & > img {
    width: 100%;
    height: 300px;
    min-width: 100%;
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
  & > div > button {
    width: 50px;
    height: 25px;
    background-color: #0d6efd;
    border: 1px solid #034fc0;
    border-radius: 5px;
    color: white;
    font-size: 12px;
    outline: none;
    cursor: pointer;
  }
`;
