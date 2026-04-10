import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import pizzaImg from "../../public/pizza-img.png";
import cook from '../../public/cook.png'

function Hero({setPage}){
  return (
    <section className="hero-container ">
      <div className="hero-content">
        <div className="pizza-img">
          <img src={pizzaImg} alt="" />
        </div>
        <h1 className="hero-title">PizzaFlux</h1>
        <p className="hero-subtitle">
          Craft your perfect pizza. Choose size, crust, <br />
          toppings & more which is all powered by Redux.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={()=>{setPage("menu")}}>
            <span>Order Now</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <button className="btn-secondary" onClick={()=>{setPage("signup")}}>Sign Up</button>
        </div>
      </div>

      <section>
        <h3 className="why-heading">Why PizzaFlux?</h3>
        <div className="why-section">
          <div className="why-box">
            <span>
              <lord-icon
                className="clock-icon"
                src="https://cdn.lordicon.com/xktzfwru.json"
                  colors="primary:#1a1a1a,secondary:#f24c00,tertiary:#ebe6ef,quaternary:#ffc738"
                trigger="loop"
              ></lord-icon>
            </span>
            <div className="why-details-container">
              <h5>Build in Seconds.</h5>
              <p>
                Customize your perfect pizza with our intuitive builder — size,
                crust, toppings and more.
              </p>
            </div>
          </div>
          <div className="why-box">
            <span>
              <lord-icon
                className="clock-icon"
                src="https://cdn.lordicon.com/gdowkrjt.json"
                colors="primary:#1a1a1a,secondary:#ebe6ef,tertiary:#f24c00,quaternary:#e8e230"
                trigger="loop"
                stroke="bold"
              ></lord-icon>
            </span>
            <div className="why-details-container">
              <h5>Fast Delivery</h5>
              <p>
                Hot, fresh pizza delivered to your door in 25-35 minutes or it's
                free.
              </p>
            </div>
          </div>
          <div className="why-box">
            <span>
              <lord-icon
                className="clock-icon"
                src="https://cdn.lordicon.com/yseqjcer.json"
                trigger="loop"
              ></lord-icon>
            </span>
            <div className="why-details-container">
              <h5>Quality Guarantee</h5>
              <p>
                Only the freshest ingredients, sourced locally. 100%
                satisfaction guaranteed.
              </p>
            </div>
          </div>
          <div className="why-box">
            <span>
              <lord-icon
                className="clock-icon"
                src="https://cdn.lordicon.com/uihwbzln.json"
                trigger="loop"
                delay="2000"
              ></lord-icon>
            </span>
            <div className="why-details-container">
              <h5>5-Star Rated</h5>
              <p>
                Thousands of happy customers trust us for their pizza nights
                every week.
              </p>
            </div>
          </div>
        </div>
      </section>


    <section className="ready-order-section">
      <img src={cook} alt=""  className="cook-img" />
      <div>
        <h3>Ready to order?</h3>
      <p>Create your account and get your first delivery free!</p>
      <button onClick={()=>setPage("signup")} >Get Started, It's Free</button></div> 

    </section>


    </section>
  );
};

export default Hero;
