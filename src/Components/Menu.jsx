import React, { useContext } from "react";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa1,
  fa2,
  fa3,
  fa4,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import pizzaApp from "../Context/Context";
import pizzaSmall from "../../public/sixslicepizza.png";
import pizzaMedium from "../../public/eightslicepizza.png";
import pizzaLarge from "../../public/tenslicepizza.png";
import pizzaExtraLarge from "../../public/twelveslicepizza.png";

import cocacola from '../../public/cocacola.png';
import water from '../../public/waterglass.png';
import orange from '../../public/orangejuice.png';

import mushroom from "../../public/musroom.png";
import onion from "../../public/onion.png";
import pepperoni from "../../public/Pepperoni.png";
import sausage from "../../public/Sausage.png";
import bacon from "../../public/Bacon.png";
import chesse from "../../public/chesse.png";

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
        {/* <div className="menu-size">
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
          <hr className="order-preview-hr" />

          <div className="build-btn">
            <button className="back-btn">
              <FontAwesomeIcon icon={faAngleLeft} />
              Back
            </button>
            <button className="next-btn active-build-btn">Next <FontAwesomeIcon icon={faAngleRight} /> </button>
          </div>
        </div> */}

        <div className="menu-crust">
          <div>
            <h3>Choose Crust</h3>
            <div className="crust-option-container">
              <div className="crust-option">
                <h6>Thin Crust</h6>
                <p>Crispy & light</p>
              </div>
              <div className="crust-option">
                <h6>Classic</h6>
                <p>Our Signature</p>
              </div>
              <div className="crust-option">
                <h6>Thick Crust</h6>
                <p>Soft & Chewy</p>
              </div>
              <div className="crust-option">
                <h6>Stuffed</h6>
                <p>Cheese-filled</p>
              </div>
            </div>
          </div>

          

          <div className="topping-container">
            <h3>Pick Toppings</h3>
            <div className="topping-box">


              <div className="topping">
                <div>
                  <img src={mushroom} alt="" />
                  <span className="topping-name">Mushrooms</span>
                </div>
                <span>+$1.00</span>
              </div>

              <div className="topping">
                <div><img src={onion} alt="" />
                <span className="topping-name">Onions</span></div>
                <span>+$</span>
              </div>

              <div className="topping">
                <div>
                <img src={bacon} alt="" /> <span className="topping-name">Bacon</span></div>
                <span>+$</span>
              </div>

              <div className="topping">
                <div><img src={pepperoni} alt="" />
                <span className="topping-name">Pepperoni</span></div>
                <span>+$</span>
              </div>

              <div className="topping">
                <div>
                <img src={sausage} alt="" />
                <span className="topping-name">Sausage</span></div>
                <span>+$</span>
              </div>


              <div className="topping">
                <div>
                <img src={chesse} alt="" />
                <span className="topping-name">Chesse</span></div>
                <span>+$</span>
              </div>
            </div>
            <hr className="order-preview-hr" />
             <div className="build-btn">
            <button className="back-btn">
              <FontAwesomeIcon icon={faAngleLeft} />
              Back
            </button>
            <button className="next-btn active-build-btn">Next <FontAwesomeIcon icon={faAngleRight} /> </button>
          </div>
            
          </div>
        </div>

          <div className="menu-drinks">
          <div>
            <h3>Add Sides</h3>
            <div className="crust-option-container">
              <div className="crust-option">
                <h6>Thin Crust</h6>
                <p>Crispy & light</p>
              </div>
              <div className="crust-option">
                <h6>Classic</h6>
                <p>Our Signature</p>
              </div>
              <div className="crust-option">
                <h6>Thick Crust</h6>
                <p>Soft & Chewy</p>
              </div>
              <div className="crust-option">
                <h6>Stuffed</h6>
                <p>Cheese-filled</p>
              </div>
            </div>
          </div>

          

          <div className="topping-container">
            <h3>Add Drinks</h3>
            <div className="topping-box">


              <div className="topping">
                <div>
                  <img src={cocacola} alt="" />
                  <span className="topping-name">Cocacola</span>
                </div>
                <span>+$1.00</span>
              </div>

              <div className="topping">
                <div><img src={water} alt="" />
                <span className="topping-name">Water</span></div>
                <span>+$</span>
              </div>


              <div className="topping">
                <div>
                <img src={orange} alt="" />
                <span className="topping-name">Orange Juice</span></div>
                <span>+$</span>
              </div>

            </div>
            <hr className="order-preview-hr" />
             <div className="build-btn">
            <button className="back-btn">
              <FontAwesomeIcon icon={faAngleLeft} />
              Back
            </button>
            <button className="next-btn active-build-btn">Next <FontAwesomeIcon icon={faAngleRight} /> </button>
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
