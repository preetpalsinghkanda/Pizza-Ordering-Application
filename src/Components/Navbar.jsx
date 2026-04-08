import React from "react";
import "../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="justify-between min-w-5xl w-full mx-auto border-b-2 border-[#edf0ee] h-18 flex items-center  px-6 sticky top-0 bg-white/30 backdrop-blur-md ">
      <div className="flex items-center gap-1.5">
        <FontAwesomeIcon icon={faPizzaSlice} className="text-2xl" />
        <span className="text-2xl font-extrabold">PizzaFlux</span>
      </div>

      <div className="flex gap-8 items-center py-40 ">
        <FontAwesomeIcon icon={faCartShopping} />
        <div id="signup-box" className="flex items-center gap-2 hover:bg-[#f6a823] border px-4 py-2">
          <FontAwesomeIcon icon={faUser} />
          <span className="text-md border pt-2 text">Sign Up</span>
        </div>
      </div>
    </div>
  );
}
