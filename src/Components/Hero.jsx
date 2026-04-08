import React from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
import pizzaImg from '../../public/pizza-img.png'

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="pizza-img"><img src={pizzaImg} alt="" /></div>
        <h1 className="hero-title">PizzaFlux</h1>
        <p className="hero-subtitle">
          Craft your perfect pizza. Choose size, crust, <br />
          toppings & more which is all powered by Redux.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">
           <span>Order Now</span><FontAwesomeIcon icon={faAngleRight} />
          </button>
          <button className="btn-secondary">Sign Up</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;