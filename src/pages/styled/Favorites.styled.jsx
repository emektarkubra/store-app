import { styled } from "styled-components";

export const StyledFavoriteBox = styled.div`
  width: 40%;
  margin: 20px;
  margin-left: 70px;

  &> .explain {
    border: 1px solid #00000061;
    width : 400px;
        font-size : 20px;
        border-radius : 5px;
        padding: 10px;
    }
  & > .card-body {
    border: 1px solid #00000061;
    border-radius : 5px;
    width: 100%;
    height: 100px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    padding: 15px;
    

    &>.product-image-box {
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
      width: 100%;
      padding: 15px;

      &> a> .card-title {
        font-size:15px;
        margin : 0;
      }

      &> .card-price-text {
        font-size:15px;
        font-weight: bold;
      }
    }

   

    &>.delete-button-box > .delete-button {
    border : none;
    background-color : white; 
    font-size : 18px;
    outline : none;
    cursor : pointer;
    &:hover {
        color :red;
    }
    }
  }
`;
