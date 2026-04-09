import React, { useContext, useState } from "react";
import pizzaApp from "./Context";

function PizzaProvider({ children }) {
  const [userName, setUserName] = useState("");

  const [email, setEmail] = useState("");

  const [phoneNo, setPhoneNo] = useState("");

  const [pass, setPass] = useState("");

  const [passConfirm, setPassConfirm] = useState("");

  const [gender, setGender] = useState("");

  const[isCheckBox , setIsCheckBox] = useState(false); 

  const[isPassIcon , setIsPassIcon ] = useState(false);

  const[isPassConfirmIcon , setIsPassConfirmIcon] = useState(false) 

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


      }}
    >
      {children}
    </pizzaApp.Provider>
  );
}

export default PizzaProvider;
