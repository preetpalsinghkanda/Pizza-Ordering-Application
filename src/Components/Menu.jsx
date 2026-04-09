import React, { useContext } from "react";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa1,
  fa2,
  fa3,
  fa4,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import pizzaApp from "../Context/Context";
import pizzaSmall from "../../public/sixslicepizza.png";
import pizzaMedium from "../../public/eightslicepizza.png";
import pizzaLarge from "../../public/tenslicepizza.png";
import pizzaExtraLarge from "../../public/twelveslicepizza.png";

export default function Menu() {
  const { activeSlider } = useContext(pizzaApp);
  return (
    <section className="menu-section">
      <div className="menu-heading">
        <h3>Build Your Pizza</h3>
        <p>Customize every detail to your taste</p>
      </div>

      <div className="menu-sliders">
        <div
          className={`sliders-box ${activeSlider === "size" ? "slider-box-active" : ""}`}
        >
          <div className="number-icon-box">
            <FontAwesomeIcon icon={fa1} className="number-icon" />
          </div>
          <span>Choose Size</span>
        </div>
        <span>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>

        <div
          className={`sliders-box ${activeSlider === "topping" ? "slider-box-active" : ""}`}
        >
          <div className="number-icon-box">
            <FontAwesomeIcon icon={fa2} className="number-icon" />
          </div>
          <span>Choose Crust & Toppings</span>
        </div>

        <span>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>

        <div
          className={`sliders-box ${activeSlider === "drinks" ? "slider-box-active" : ""}`}
        >
          <div className="number-icon-box">
            <FontAwesomeIcon icon={fa3} className="number-icon" />
          </div>
          <span>Add Sides & Drinks</span>
        </div>
        <span>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>

        <div
          className={`sliders-box ${activeSlider === "review " ? "slider-box-active" : ""}`}
        >
          <div className="number-icon-box">
            <FontAwesomeIcon icon={fa4} className="number-icon" />
          </div>
          <span>Review Order</span>
        </div>
      </div>

      <div className="menu-main">
        
        <div className="menu-size">
          <h3>Select Your Size</h3>
          <div className="menu-option-container">
            <div className="menu-option">
              <div className="menu-option-box">
                <div>
                  <span>8"</span>
                  <p>Small</p>
                </div>
                <span className="pizza-price">$8.99</span>
              </div>
              <img src={pizzaSmall} alt="" />
            </div>

            <div className="menu-option">
              <div className="menu-option-box">
                <div>
                  <span>12"</span>
                  <p>Medium</p>
                </div>
                <span className="pizza-price">$12.99</span>
              </div>
              <img src={pizzaMedium} alt="" />
            </div>

            <div className="menu-option">
              <div className="menu-option-box">
                <div>
                  <span>14"</span>
                  <p>Large</p>
                </div>
                <span className="pizza-price">$15.99</span>
              </div>
              <img src={pizzaLarge} alt="" />
            </div>

            <div className="menu-option">
              <div className="menu-option-box">
                <div>
                  <span>16"</span>
                  <p>Extra Large</p>
                </div>
                <span className="pizza-price">$18.99</span>
              </div>
              <img src={pizzaExtraLarge} alt="" />
            </div>
          </div>
        </div>

        <div className="order-preview">
          <h5>Order Preview</h5>
          <ul className="order-list">
            <li>
              <p>Base (Small)</p>
              <span>$8.99</span>
            </li>
            <hr className="order-preview-hr" />
          </ul>
          <div className="total-box">
            <span className="total-name">Total</span>
            <span className="total-bill">$12.99</span>
          </div>
        </div>
      </div>
    </section>
  );
}
