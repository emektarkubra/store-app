import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SignContext } from "../context/SignContext";
import { StyledNavbar } from "./styled/Navbar.styled";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FavoriteContext } from "../context/FavoriteContext";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { onlineUser, handleSignout } = useContext(SignContext);
  const { count } = useContext(FavoriteContext);
  const { cartCount } = useContext(CartContext);

  return (
    <>
      <StyledNavbar>
        <div className="container">
          <div className="navbar-head">
            <span className="nav-brand">K-Store</span>|
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
              {onlineUser && (
                <>
                  <NavLink className="nav-link" to="/favorites">
                    Favorites <span className="badge badge-fav">{count}</span>
                  </NavLink>
                  <NavLink className="nav-link" to="/cart">
                    Cart <span className="badge badge-cart">{cartCount}</span>
                  </NavLink>
                </>
              )}
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
                <span className="signout" onClick={handleSignout}>
                  Sign out ({onlineUser && onlineUser.userName})
                </span>
              )}

              {/* <button>
                <BsFillMoonStarsFill />
              </button> */}
            </div>
          </div>
        </div>
      </StyledNavbar>
    </>
  );
}
