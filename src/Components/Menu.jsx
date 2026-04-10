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

import cocacola from "../../public/cocacola.png";
import water from "../../public/waterglass.png";
import orange from "../../public/orangejuice.png";

import mushroom from "../../public/musroom.png";
import onion from "../../public/onion.png";
import pepperoni from "../../public/Pepperoni.png";
import sausage from "../../public/Sausage.png";
import bacon from "../../public/Bacon.png";
import chesse from "../../public/chesse.png";

import garlicbread from "../../public/garlicBread.png";
import chicken from "../../public/chicken.png";
import sticks from "../../public/MozzarellaSticks.png";

export default function Menu() {
  const {
    activeSlider,
    setActiveSlider,
    setSize,
    setPrice,
    handleNext,
    handleBack,
    size,
    drinks,
    price,
    setCrust,
    toppings,
    setToppings,
    handleDrinks,
    crust,
    sides,

    handleSides,
  } = useContext(pizzaApp);

  function handleToppings(item) {
    if (toppings.includes(item)) {
      setToppings(toppings.filter((x) => x !== item));
    } else {
      setToppings([...toppings, item]);
    }
  }

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
          className={`sliders-box ${activeSlider === "review" ? "slider-box-active" : ""}`}
        >
          <div className="number-icon-box">
            <FontAwesomeIcon icon={fa4} className="number-icon" />
          </div>
          <span>Review Order</span>
        </div>
      </div>

      <div className="menu-main">
        <div className="menu-left">
          {activeSlider === "size" && (
            <div className="menu-size">
              <h3>Select Your Size</h3>
              <div className="menu-option-container">
                <div
                  className={`menu-option ${size === "small" ? "active" : ""}`}
                  onClick={() => {
                    setSize("small");
                    setPrice(8.99);
                  }}
                >
                  <div className="menu-option-box">
                    <div>
                      <span>8"</span>
                      <p>Small</p>
                    </div>
                    <span className="pizza-price">$8.99</span>
                  </div>
                  <img src={pizzaSmall} alt="" />
                </div>

                <div
                  className={`menu-option ${size === "medium" ? "active" : ""}`}
                  onClick={() => {
                    setSize("medium");
                    setPrice(12.99);
                  }}
                >
                  <div className="menu-option-box">
                    <div>
                      <span>12"</span>
                      <p>Medium</p>
                    </div>
                    <span className="pizza-price">$12.99</span>
                  </div>
                  <img src={pizzaMedium} alt="" />
                </div>

                <div
                  className={`menu-option ${size === "large" ? "active" : ""}`}
                  onClick={() => {
                    setSize("large");
                    setPrice(15.99);
                  }}
                >
                  <div className="menu-option-box">
                    <div>
                      <span>14"</span>
                      <p>Large</p>
                    </div>
                    <span className="pizza-price">$15.99</span>
                  </div>
                  <img src={pizzaLarge} alt="" />
                </div>

                <div
                  className={`menu-option ${size === "extraLarge" ? "active" : ""}`}
                  onClick={() => {
                    setSize("extraLarge");
                    setPrice(18.99);
                  }}
                >
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
                <button className="back-btn" onClick={() => handleBack()}>
                  <FontAwesomeIcon icon={faAngleLeft} />
                  Back
                </button>
                <button
                  className="next-btn active-build-btn"
                  onClick={() => handleNext()}
                >
                  Next <FontAwesomeIcon icon={faAngleRight} />{" "}
                </button>
              </div>
            </div>
          )}

          {activeSlider === "topping" && (
            <div className="menu-crust">
              <div>
                <h3>Choose Crust</h3>
                <div className="crust-option-container">
                  <div
                    className={`crust-option ${crust === "thin crust" ? "active" : ""}`}
                    onClick={() => setCrust("thin crust")}
                  >
                    <h6>Thin Crust</h6>
                    <p>Crispy & light</p>
                  </div>
                  <div
                    className={`crust-option ${crust === "classic crust" ? "active" : ""}`}
                    onClick={() => setCrust("classic crust")}
                  >
                    <h6>Classic</h6>
                    <p>Our Signature</p>
                  </div>
                  <div
                    className={`crust-option ${crust === "thick crust" ? "active" : ""}`}
                    onClick={() => setCrust("thick crust")}
                  >
                    <h6>Thick Crust</h6>
                    <p>Soft & Chewy</p>
                  </div>
                  <div
                    className={`crust-option ${crust === "stuffed crust" ? "active" : ""}`}
                    onClick={() => setCrust("stuffed crust")}
                  >
                    <h6>Stuffed</h6>
                    <p>Cheese-filled</p>
                  </div>
                </div>
              </div>

              <div className="topping-container">
                <h3>Pick Toppings</h3>
                <div className="topping-box">
                  <div
                    className={`topping ${toppings.includes("mushrooms") ? "active" : ""}`}
                    onClick={() => handleToppings("mushrooms")}
                  >
                    <div>
                      <img src={mushroom} alt="" />
                      <span className="topping-name">Mushrooms</span>
                    </div>
                    <span>+$1.00</span>
                  </div>

                  <div
                    className={`topping ${toppings.includes("onions") ? "active" : ""}`}
                    onClick={() => handleToppings("onions")}
                  >
                    <div>
                      <img src={onion} alt="" />
                      <span className="topping-name">Onions</span>
                    </div>
                    <span>+$1.00</span>
                  </div>

                  <div
                    className={`topping ${toppings.includes("bacon") ? "active" : ""}`}
                    onClick={() => handleToppings("bacon")}
                  >
                    <div>
                      <img src={bacon} alt="" />{" "}
                      <span className="topping-name">Bacon</span>
                    </div>
                    <span>+$1.00</span>
                  </div>

                  <div
                    className={`topping ${toppings.includes("pepperoni") ? "active" : ""}`}
                    onClick={() => handleToppings("pepperoni")}
                  >
                    <div>
                      <img src={pepperoni} alt="" />
                      <span className="topping-name">Pepperoni</span>
                    </div>
                    <span>+$1.00</span>
                  </div>

                  <div
                    className={`topping ${toppings.includes("sausage") ? "active" : ""}`}
                    onClick={() => handleToppings("sausage")}
                  >
                    <div>
                      <img src={sausage} alt="" />
                      <span className="topping-name">Sausage</span>
                    </div>
                    <span>+$1.00</span>
                  </div>

                  <div
                    className={`topping ${toppings.includes("chesse") ? "active" : ""}`}
                    onClick={() => handleToppings("chesse")}
                  >
                    <div>
                      <img src={chesse} alt="" />
                      <span className="topping-name">Chesse</span>
                    </div>
                    <span>+$1.00</span>
                  </div>
                </div>
                <hr className="order-preview-hr" />
                <div className="build-btn">
                  <button className="back-btn" onClick={() => handleBack()}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                    Back
                  </button>
                  <button
                    className="next-btn active-build-btn"
                    onClick={() => handleNext()}
                  >
                    Next <FontAwesomeIcon icon={faAngleRight} />{" "}
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSlider === "drinks" && (
            <div className="menu-drinks">
              <div>
                <h3>Add Sides</h3>
                <div className="crust-option-container">

                  <div className={`crust-option drink-option ${sides.includes("garlic") ? "active" : ""}`} onClick={()=>handleSides("garlic")}>
                    <div className="drink-option-box">
                      <div><h6>Garlic Bread</h6>
                      <p>Crispy & light</p></div>
                      <p>$3.00</p>
                    </div>
                    <img src={garlicbread} alt="" />
                  </div>
                  <div className={`crust-option drink-option ${sides.includes("sticks")? "active" : ""}`} onClick={()=> handleSides("sticks")}>
                    <div className="drink-option-box">
                      <div>
                      <h6>Mozzarella Sticks</h6>
                      <p>Our Signature</p></div>
                      <p>$3.00</p>
                    </div>
                    <img src={sticks} alt="" />
                  </div>
                  <div className={`crust-option drink-option ${sides.includes("chicken") ? "active" : ""} `} onClick={()=> handleSides("chicken")}>
                    <div className="drink-option-box">
                      <div>
                      <h6>Chicken Wings(6ps)</h6>
                      <p>Soft & Chewy</p></div>
                      <p>$3.00</p>
                    </div>
                    <img src={chicken} alt="" />
                  </div>
                  <div className={`crust-option drink-option ${sides.includes("rings")? "active" : ""}`} onClick={()=>handleSides("rings")}>
                     <div className="drink-option-box">
                      <div>
                        <h6>Onion Rings</h6>
                      <p>Cheese-filled</p>
                      </div>
                      <p>$3.00</p>
                    </div>
                    <img src={onion} alt="" />
                  </div>
                </div>
              </div>

              <div className="topping-container">
                <h3>Add Drinks</h3>
                <div className="drink-box">

                  <div className={`topping ${drinks.includes("coke") ? "active" : ""}`} onClick={()=> handleDrinks("coke")}>
                    <div>
                      <img src={cocacola} alt="" />
                      <span className="topping-name">Cocacola</span>
                    </div>
                    <span>+$2.00</span>
                  </div>

                  <div className={`topping ${drinks.includes("water")? "active": ''}`} onClick={()=> handleDrinks("water")}>
                    <div>
                      <img src={water} alt="" />
                      <span className="topping-name">Water</span>
                    </div>
                    <span>+$2.00</span>
                  </div>

                  <div className={`topping ${drinks.includes("juice") ? "active" : ""}`} onClick={()=> handleDrinks("juice")}>
                    <div>
                      <img src={orange} alt="" />
                      <span className="topping-name">Orange Juice</span>
                    </div>
                    <span>+$2.00</span>
                  </div>
                </div>
                <hr className="order-preview-hr" />
                <div className="build-btn">
                  <button className="back-btn" onClick={() => handleBack()}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                    Back
                  </button>
                  <button
                    className="next-btn active-build-btn"
                    onClick={() => handleNext()}
                  >
                    Next <FontAwesomeIcon icon={faAngleRight} />{" "}
                  </button>
                </div>
              </div>
            </div>
        
          )}
        </div>

        

        <div className="order-preview">
          <h5>Order Preview</h5>
          <ul className="order-list">
            {size && (
              <li>
                <p>Base({size})</p>
                <span>
                  {size === "small"
                    ? 8.99
                    : size === "medium"
                      ? 12.99
                      : size === "large"
                        ? 15.99
                        : 18.99}
                </span>
              </li>
            )}
            {toppings.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
                <span>+$1</span>
              </li>
            ))}
            <hr className="order-preview-hr" />
          </ul>
          <div className="total-box">
            <span className="total-name">Total</span>
            <span className="total-bill">${price.toFixed(2)}</span>
          </div>
          <hr className="order-preview-hr" />

{activeSlider === "review" && (
    <div className="build-btn">
      <button className="back-btn" onClick={handleBack}>
        Back
      </button>

      <button
        className="next-btn active-build-btn"
        onClick={() => alert("Order Placed (u will get in 20 minutes)")}
      >
        Buy Now
      </button>
    </div>)}


        </div>
      </div>
    </section>
  );
}
