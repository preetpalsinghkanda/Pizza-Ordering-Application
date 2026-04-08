import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser ,faPizzaSlice} from '@fortawesome/free-solid-svg-icons';
import pizzaImg from '../../public/pizza-img.png'
import './Navbar.css';

function Navbar(){
  return (
    <nav className="navbar">
      <div className="nav-logo">
       <FontAwesomeIcon icon={faPizzaSlice} />
        <span className="logo-text">PizzaFlux</span>
      </div>
      <div className="nav-btns">
        <button className="icon-btn ">
          <FontAwesomeIcon icon={faShoppingCart}  />
        </button>
        <button className="login-btn">
          <FontAwesomeIcon icon={faUser} />
          <span>Sign Up</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;