import React from "react";
import "./Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faCircle,
  faUser,
  faEnvelope,
  faPhone,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

export default function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-heading">
          <h3>Create Account</h3>
          <p>Join us and start ordering</p>
        </div>

        <div className="input-container">
          <div className="input-box">
            <label htmlFor="name">Full Name</label>
            <div className="input-icon-box">
              <FontAwesomeIcon icon={faUser} />
              <input
                type="text"
                name=""
                id="name"
                placeholder="Preetpal Singh Kanda"
              />
            </div>
          </div>

          <div className="input-box">
            <label htmlFor="email">Email</label>
            <div className="input-icon-box">
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="text" id="email" placeholder="preet@gmail.com" />
            </div>
          </div>

          <div className="input-box">
            <label htmlFor="phone-no">Phone Number</label>
            <div className="input-icon-box">
              <FontAwesomeIcon icon={faPhone} />
              <input type="phone" id="phone-no" placeholder="+1 999 999 9999" />
            </div>
          </div>

          <div className="input-pass-container">
            <div className="input-box ">
              <label htmlFor="pass">Password</label>
              <div className="pass-input input-icon-box">
                <FontAwesomeIcon icon={faLock} />
                <input type="password" id="pass" />

                <FontAwesomeIcon icon={faEye} className="eye-icon" />
              </div>
            </div>

            <div className="input-box ">
              <label htmlFor="pass-confirm">Confirm Password</label>
              <div className="pass-input input-icon-box">
                <FontAwesomeIcon icon={faLock} />
                <input type="password" id="pass-confirm" />

                <FontAwesomeIcon icon={faEye} className="eye-icon" />
              </div>
            </div>
          </div>

          <div className="input-box">
            <label htmlFor="gender">Gender</label>
            <div className="gender-boxes">
              <button>Male</button>
              <button>Female</button>
              <button>Other</button>
            </div>
          </div>

          <div className="terms_condition">
            <FontAwesomeIcon icon={faCircle} />
            <p>I accept the terms and conditions</p>
          </div>
        </div>

        <button className="signup-btn">Sign Up</button>
      </div>
    </div>
  );
}
