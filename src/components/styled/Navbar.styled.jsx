import { styled } from "styled-components";

export const StyledNavbar = styled.nav`
  background-color: rgb(43, 48, 53);
  color: white;
  height: 40px;
  font-size: 18px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index : 0;

  & > .container {
    display: flex;
    justify-content: space-between;

    & > .navbar-head {
      width: 600px;
      display: flex;
      justify-content: start;
      & > span {
        margin-right: 5px;
      }
    }

    & > div > div > .nav-link {
      color: white;
      padding: 5px;
      text-decoration: none;
      &:visited {
        color: white;
      }
      &> .badge-fav {
       border: 1px solid #dc3545;
       background-color :#dc3545;
       width : 22px;
       font-size : 13px;
       position: absolute;
       padding :0;
       left: 385px;
       top: 8px;
       z-index : 1;
       text-align : center;
       border-radius : 8px;

      }
      &> .badge-cart {
       border: 1px solid #dc3545;
       background-color :#dc3545;
       width : 22px;
       font-size : 13px;
       position: absolute;
       padding :0;
       left: 435px;
       top: 8px;
       z-index : 1;
       text-align : center;
       border-radius : 8px;

      }
    }

    & > .navbar-collapse > .navbar-nav > .signout {
      cursor: pointer;
    }

    & > .navbar-collapse > .navbar-nav > button {
      background-color: rgb(43, 48, 53);
      border: none;
      color: white;
      font-size: 14px;
      margin-left: 2px;
      cursor: pointer;
    }
  }

`;
