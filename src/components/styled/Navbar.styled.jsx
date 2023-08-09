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
