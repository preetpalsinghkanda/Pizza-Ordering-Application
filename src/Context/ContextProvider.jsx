import React, { useContext, useState } from "react";
import pizzaApp from "./Context";

function PizzaProvider({ children }) {
  const [userName, setUserName] = useState("");

  const [email, setEmail] = useState("");

  const [phoneNo, setPhoneNo] = useState("");

  const [pass, setPass] = useState("");

  const [passConfirm, setPassConfirm] = useState("");

  const [gender, setGender] = useContext("");

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
      }}
    >
      {children}
    </pizzaApp.Provider>
  );
}

export default PizzaProvider;
