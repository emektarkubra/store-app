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
    
  }

  & > .container >.navbar-head {
    width : 380px;
    display : flex;
    justify-content : space-around;
  }



  & > div > div > div > .nav-link {
    color: white;
    padding: 5px;
    text-decoration: none;
  }

  & > div > div > div > .nav-link :visited {
    color: white;
  }
  &>div>div>div>span {
    cursor : pointer;
  }
`;
