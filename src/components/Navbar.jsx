import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SignContext } from "../context/SignContext";
import { StyledNavbar } from "./styled/Navbar.styled";

export default function Navbar() {
  const { onlineUser, handleSignout } = useContext(SignContext);

  return (
    <>
      <StyledNavbar>
        <div className="container">
          <div className="navbar-head">
            <span className="nav-brand">K-Store</span>
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </div>
          </div>
          <div className="navbar-collapse" id="navbar-collapse">
            <div className="navbar-nav">
              

              {onlineUser === null || onlineUser === "" ? (
                <>
                  <NavLink className="nav-link" to="/login">
                    Login in
                  </NavLink>
                  |
                  <NavLink className="nav-link" to="/signup">
                    Sign up
                  </NavLink>
                </>
              ) : (
                <span onClick={handleSignout}>
                  Sign out ({onlineUser && onlineUser.userName})
                </span>
              )}
            </div>
          </div>
        </div>
      </StyledNavbar>
    </>
  );
}
