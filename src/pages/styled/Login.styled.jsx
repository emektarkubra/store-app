import { styled } from "styled-components";

export const StyledLoginBox = styled.div`
  margin-top: 1vw;

  & > div > .success-button {
    background-color: #051b11;
    border: none;
    font-size: 14px;
    cursor: pointer;
  }
  & > div > .danger-button {
    background-color: #842029;
    border: none;
    font-size: 14px;
    cursor: pointer;
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
    /* padding: 2vw;   */
    font-size: 24px;
    text-align: center;
  }

  & > div > button :hover {
    color: rgb(230, 237, 243);
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
    & > form > .form-check {
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
      background-color: #238636;
      border: 1px solid rgba(240, 246, 252, 0.1);
      border-radius: 6px;
      color: #ffffff;
      font-size: 1vw;
      padding: 0.5vw;
      /* margin-left: 1vw; */
      cursor: pointer;
    }
  }

  & > .createAccountBox {
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
