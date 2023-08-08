import { useContext } from "react";
import {
  StyledAlertBox,
  StyledSuccessAlertBox,
} from "../components/styled/Alert.styled";
import { SignContext } from "../context/SignContext";
import { StyledSignupBox } from "./styled/Signup.styled";
import { BsX } from "react-icons/bs";
import logo from "../assest/logo.png";
import { Link } from "react-router-dom";

export default function Signup() {
  const { handleChangeSignupInput, handleSignup, user, userAdded } =
    useContext(SignContext);

  const storedUserList = JSON.parse(localStorage.getItem("userList"));
  const exist = storedUserList
    ? storedUserList.some((loginUser) => loginUser.email === user.email)
    : false;

  return (
    <StyledSignupBox className="loginBox">
      <div className="logoBox">
        <div className="brand">
          <img src={logo} alt="" />
        </div>
        <p>Welcome to K-Store! </p>
      </div>
      {userAdded ? (
        exist ? (
          <StyledAlertBox>
            User is exist
            <button>
              
              <BsX />
            </button>
          </StyledAlertBox>
        ) : null
      ) : null}
      <div className="loginFormBox">
        <form onSubmit={handleSignup}>
          <div className="inputEmail">
            <label htmlFor="inputEmail" className="form-label">
              Enter your email*
            </label>
            <input
              onChange={handleChangeSignupInput}
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
              Create a password*
            </label>
            <input
              onChange={handleChangeSignupInput}
              type="password"
              className="form-control"
              id="inputPassword"
              name="password"
              required
            />
          </div>
          <div className="inputUserName">
            <label htmlFor="inputUserName" className="form-label">
              Enter a username*
            </label>
            <input
              onChange={handleChangeSignupInput}
              type="text"
              className="form-control"
              id="inputUserName"
              name="userName"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </form>
      </div>
      <div className="loginAccountBox">
        <span>
          Already have an account?
          <Link to="/login">Login in your account.</Link>
        </span>
      </div>
    </StyledSignupBox>
  );
}
