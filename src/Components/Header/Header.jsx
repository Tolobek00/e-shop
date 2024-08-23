import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

import "./header.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const  products = useSelector(state => state.cart.products)
  return (
    <header>
      <div className="header-container container">
        <div>
          <Link to={"/"} className="logo">
            e-SHOP
          </Link>
        </div>
        <div>
          <form>
            <input type="text" placeholder="Search Product" />
            <FaSearch className="search" />
          </form>
        </div>
        <div>
          <Link to="/cart" className="cart_length">
            <FaShoppingCart className="cart" />
            {products.length > 0 && (
              <span>{products.length}</span>
            )}
          </Link>
          <button>Login | Register</button>
          <button>
            <FaUser />
          </button>
        </div>
      </div>
      <div className="menu-nav">
        <Link to='/' className="menu-text">Home</Link>
        <Link to='/shop'className="menu-text">Shop</Link>
        <Link className="menu-text">Contact</Link>
        <Link className="menu-text">About</Link>
      </div>
    </header>
  );
};

export default Header;
