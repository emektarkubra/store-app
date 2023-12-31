import { styled } from "styled-components";

export const StyledSignupBox = styled.div`
  margin-top: 1vw;

  & > div > button {
    background-color: rgb(132, 32, 41);
    border: none;
    font-size: 14px;
    color: rgb(44, 11, 14);
    cursor: pointer;
  }

  & > div > button :hover {
    color: rgb(230, 237, 243);
  }

  & > div > .brand {
    width: 100px;
    height: 100px;
    overflow: hidden;
    margin: auto;
  }
  & > div > .brand > img {
    width: 100px;
    height: 100px;
  }
  & > div > p {
    width: 290px;
    margin: auto;
    font-size: 24px;
    text-align: center;
  }

  & > .loginFormBox {
    border: 1px solid #00000078;
    width: 290px;
    margin: auto;
    margin-top: 10px;
    padding: 2vw;
    border-radius: 6px;

    & > form > .inputEmail,
    & > form > .inputPassword,
    & > form > .inputUserName {
      font-size: 14px;
      margin-bottom: 16px;
      margin-top: 4px;
    }

    & > form > div > .form-label {
      margin-right: 1vw;
      margin-bottom: 8px;
      display: block;
    }

    & > form > div > .form-control {
      width: 274px;
      height: 1.5vw;
      font-size: 1vw;
    }

    button {
      width: 282px;
      background-color: rgb(220, 53, 69);
      border: 1px solid rgba(240, 246, 252, 0.1);
      border-radius: 6px;
      color: #ffffff;
      font-size: 1vw;
      padding: 0.5vw;
      cursor: pointer;
    }
  }
  & > .loginAccountBox {
    border: 1px solid #00000078;
    width: 290px;
    margin: auto;
    margin-top: 15px;
    padding: 2vw;
    border-radius: 6px;
    font-size: 14px;
    text-align: center;
    & > span > a {
      color: rgb(47, 129, 247);
    }
  }
`;
