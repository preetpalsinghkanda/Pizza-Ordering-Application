import React, { useContext, useState } from "react";
import pizzaApp from "./Context";

function PizzaProvider({ children }) {
  const [userName, setUserName] = useState("");

  const [email, setEmail] = useState("");

  const [phoneNo, setPhoneNo] = useState("");

  const [pass, setPass] = useState("");

  const [passConfirm, setPassConfirm] = useState("");

  const [gender, setGender] = useState("");

  const [isCheckBox, setIsCheckBox] = useState(false);

  const [isPassIcon, setIsPassIcon] = useState(false);

  const [isPassConfirmIcon, setIsPassConfirmIcon] = useState(false);

  const [activeSlider, setActiveSlider] = useState("size");

  const [size, setSize] = useState("");
  const [crust, setCrust] = useState("");
  const [toppings, setToppings] = useState([]);
  const [price, setPrice] = useState(0);




function handleNext(){
  if(activeSlider === "size"){
    setActiveSlider("topping");
  }else if(activeSlider === "topping"){
    setActiveSlider("drinks");
  }else if(activeSlider==="drinks"){
    setActiveSlider("review");
  }
}

function handleBack(){
  if(activeSlider === "review"){
    setActiveSlider("drinks");
  }else if(activeSlider==="drinks"){
    setActiveSlider("topping");
  }else if(activeSlider === "topping"){
    setActiveSlider("size");
  }
}













  return (
    <pizzaApp.Provider
      value={{
        userName,
        setUserName,
        email,
        setEmail,
        phoneNo,
        setPhoneNo,
        pass,
        setPass,
        passConfirm,
        setPassConfirm,
        gender,
        setGender,
        isCheckBox,
        setIsCheckBox,
        isPassIcon,
        setIsPassIcon,
        isPassConfirmIcon,
        setIsPassConfirmIcon,
        activeSlider,
        setActiveSlider,
        size,
        setSize,
        handleNext,
        handleBack,
        crust,
        setCrust,
        toppings,
        setToppings,
        price,
        setPrice,
      }}
    >
      {children}
    </pizzaApp.Provider>
  );
}

export default PizzaProvider;
