import { NavLink } from "react-router-dom";
import { StyledNavbar } from "./styled/Navbar.styled";

export default function Navbar() {
  return (
    <>
      <StyledNavbar>
        <div className="container">
          <div className="navbar-brand">
            <span className="nav-brand">K-Store</span>
          </div>
          <div className="navbar-collapse" id="navbar-collapse">
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
              <NavLink className="nav-link" to="/login">
                Sign in
              </NavLink>
              <NavLink className="nav-link" to="/signup">
                Sign up
              </NavLink>
            </div>
          </div>
        </div>
      </StyledNavbar>
    </>
  );
}
