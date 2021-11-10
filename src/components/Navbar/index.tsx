import React from "react";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const toggleDropdown04 = (e: any) => {
    e.target.className =
      "nav-link dropdown-toggle" === e.target.className
        ? "nav-link dropdown-toggle active"
        : "nav-link dropdown-toggle";
  };
  const blurDropdown04 = (e: any) => {
    e.target.className = "nav-link dropdown-toggle";
  };
  return (
    <nav
      className="
        navbar navbar-expand-lg
        ftco_navbar
        ftco-navbar-light
    "
      id="ftco-navbar"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          Freshfoods
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="dropdown04"
                onClick={toggleDropdown04}
              >
                Shop
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdown04"
                // onBlur={blurDropdown04}
              >
                <Link className="dropdown-item" to="/shop">
                  Shop
                </Link>
                <Link className="dropdown-item" to="/wishlist">
                  Wishlist
                </Link>

                <Link className="dropdown-item" to="/cart">
                  Cart
                </Link>
                <Link className="dropdown-item" to="/checkout">
                  Checkout
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/order" className="nav-link">
                Order
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link">
                SignIn
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                SignUp
              </Link>
            </li>

            <li className="nav-item cta cta-colored">
              <Link to="/cart" className="nav-link">
                <IoMdCart />
                {/* <span className='icon-shopping_cart'></span>[0] */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
