import { useState } from "react";
import { useContext } from "react";
import {
  StyledAlertBox,
  StyledSuccessAlertBox,
} from "../components/styled/Alert.styled";
import { SignContext } from "../context/SignContext";
import { StyledLoginBox } from "./styled/Login.styled";
import { BsX } from "react-icons/bs";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assest/logo.png";

export default function Login() {
  const { handleChangeLoginInput, handleLogin, onlineUser, userAdded } =
    useContext(SignContext);

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    if (userAdded) {
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3500);
    }
  }, [userAdded]);

  return (
    <>
      <StyledLoginBox className="loginBox">
        <div className="logoBox">
          <div className="brand">
            <img src={logo} alt="" />
          </div>
          <p>Login in to K-Store</p>
        </div>
        {onlineUser === null ? (
          showSuccessAlert ? (
            <StyledSuccessAlertBox>
              Congratulations,registered. Login your account{" "}
              <button className="success-button">
                {" "}
                <BsX />
              </button>
            </StyledSuccessAlertBox>
          ) : null
        ) : (
          <StyledAlertBox>
            Incorrect username or password.{" "}
            <button className="danger-button">
              {" "}
              <BsX />
            </button>{" "}
          </StyledAlertBox>
        )}
        <div className="loginFormBox">
          <form onSubmit={handleLogin}>
            <div className="inputEmail">
              <label htmlFor="inputEmail" className="form-label">
                Email address
              </label>
              <input
                onChange={handleChangeLoginInput}
                type="email"
                className="form-control"
                id="inputEmail"
                aria-describedby="emailHelp"
                name="email"
                required
              />
            </div>
            <div className="inputPassword">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                onChange={handleChangeLoginInput}
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                required
              />
            </div>
            <div className="form-check">
              <input
                onChange={handleChangeLoginInput}
                type="checkbox"
                className="form-check-input"
                id="check"
                name="check"
                required
              />
              <label className="form-check-label" htmlFor="check">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Login in
            </button>
          </form>
        </div>
        <div className="createAccountBox">
          <span>
            New to K-Store? <Link to="/signup">Create an account.</Link>{" "}
          </span>
        </div>
      </StyledLoginBox>
    </>
  );
}
