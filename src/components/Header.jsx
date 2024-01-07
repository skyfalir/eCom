import React, { useContext} from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart/index.jsx";

export default function Header() {

  return (
    <header className="header">
      <div className="nav-container">
        <Link className="logo" to="/">eCom</Link>
        <nav>
          <Link to="/contact">Contact Us</Link>
          <Cart />
        </nav>
      </div>
    </header>
  );
}