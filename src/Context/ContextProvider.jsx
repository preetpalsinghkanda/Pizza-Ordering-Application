import React, { useContext, useEffect, useState } from "react";
import pizzaApp from "./Context";

function PizzaProvider({ children }) {


  
const[errors , setErrors] = useState({});


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
  


  const [sides , setSides] = useState([]);
  const [size, setSize] = useState("");

  const[drinks , setDrinks] = useState([]);
  
  const [crust, setCrust] = useState("");
  const [toppings, setToppings] = useState([]);
  const [price, setPrice] = useState(0);


  function handleSides(item){
    if(sides.includes(item)){
      setSides(sides.filter((x)=> x !== item))

    }else{
      setSides([...sides , item])
    }
  }


  function validateForm(){

    let newErr  = {}

    let isValid = true;

    if(!userName.trim()){
      newErr.userName = "Full name is required";
      isValid = false ;
    }

    if(!email.includes("@")){
      newErr.email = "Vaild email required";
      isValid = false;
    }

    if (phoneNo.length < 10) {
    newErr.phone = "Invalid phone number";
    isValid = false; 
  }

  if (pass.length < 6) {
    newErr.pass = "Password must be at least 6 characters";
    isValid = false;
  }

  if (!gender) {
  newErr.gender = "Select gender";
  isValid = false;
}




  if (pass !== passConfirm) {
    newErr.passConfirm = "Passwords do not match";
    isValid = false;
  }


  if (!isCheckBox) {
    newErr.terms = "Accept terms first";
    isValid = false;
  }

  setErrors(newErr);
return isValid ; 
  }




  useEffect(() => {
 
      let total = 0;

  if (size === "small") total = 8.99;

  if (size === "medium") total = 12.99;
  if (size === "large") total = 15.99;

  if (size === "extraLarge") total = 18.99;
  

  total += toppings.length * 1;

  total += drinks.length*2

  total += sides.length*3 ;

  setPrice(total);
}, [size, toppings , drinks , sides]);


function handleDrinks(item){
  if(drinks.includes(item)){
    setDrinks(drinks.filter((x) => x !== item));

  }else{
    setDrinks([...drinks ,item  ])
  }

}

  function handleNext() {
    if (activeSlider === "size") {
      setActiveSlider("topping");
    } else if (activeSlider === "topping") {
      setActiveSlider("drinks");
    } else if (activeSlider === "drinks") {
      setActiveSlider("review");
    }
  }

  function handleBack() {
    if (activeSlider === "review") {
      setActiveSlider("drinks");
    } else if (activeSlider === "drinks") {
      setActiveSlider("topping");
    } else if (activeSlider === "topping") {
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
        errors,
        setErrors,
        isCheckBox,
        setIsCheckBox,
        isPassIcon,
        drinks,
        setDrinks,
        validateForm,
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
        sides,
setSides,
        setCrust,
        toppings,
        setToppings,
        price,
        setPrice,
        handleDrinks,
        handleSides,
      }}
    >
      {children}
    </pizzaApp.Provider>
  );
}

export default PizzaProvider;
