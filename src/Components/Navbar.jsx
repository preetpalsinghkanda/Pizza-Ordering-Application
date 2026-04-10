import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBookOpen,
  faUser,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";
import pizzaImg from "../../public/pizza-img.png";
import "./Navbar.css";

function Navbar({setPage}) {

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={()=>setPage("home")}>
        <FontAwesomeIcon icon={faPizzaSlice} />
        <span className="logo-text">PizzaFlux</span>
      </div>
      <div className="nav-btns">
         <button className="icon-btn " onClick={()=>setPage("menu")}>
          <FontAwesomeIcon icon={faBookOpen} />
        </button>
        
       
        <button className="login-btn" onClick={()=>setPage("signup")}>
          <FontAwesomeIcon icon={faUser} />
          <span>Sign Up</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
