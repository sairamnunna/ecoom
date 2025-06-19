import React, { useContext, useState } from "react";
import "./Navmobile.css";

import logo from '../Assets/logo.png';
import cart from '../Assets/cart.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarM = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={logo} alt="" />
        <p>SHOPPING</p>
      </div>

      <div className="nav-right">
        <div className="nav-hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
        <div className={`nav-menu-mobile ${mobileMenuOpen ? "open" : ""}`}>
          <li onClick={() => setMenu("shop")}><Link to="/">Shop</Link></li>
          <li onClick={() => setMenu("mens")}><Link to="/mens">Men</Link></li>
          <li onClick={() => setMenu("womens")}><Link to="/womens">Women</Link></li>
          <li onClick={() => setMenu("kids")}><Link to="/kids">Kids</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/cart">Cart ({getTotalCartItems()})</Link></li>
        </div>
      </div>

      <ul className="nav-menu-desktop">
        <li onClick={() => setMenu("shop")}><Link to="/">Shop</Link>{menu === "shop" ? <hr /> : null}</li>
        <li onClick={() => setMenu("mens")}><Link to="/mens">Men</Link>{menu === "mens" ? <hr /> : null}</li>
        <li onClick={() => setMenu("womens")}><Link to="/womens">Women</Link>{menu === "womens" ? <hr /> : null}</li>
        <li onClick={() => setMenu("kids")}><Link to="/kids">Kids</Link>{menu === "kids" ? <hr /> : null}</li>
        <div className="nav-cart">
          <Link to="/login"><button>Login</button></Link>
          <Link to="/cart"><img src={cart} alt="" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </ul>
    </div>
  );
};

export default NavbarM;
