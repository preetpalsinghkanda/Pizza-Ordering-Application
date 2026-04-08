import React from "react";
import "./Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCircle, faUser} from "@fortawesome/free-solid-svg-icons";

export default function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-heading">
          <h3>Create Account</h3>
          <p>Join us and start ordering</p>
        </div>

        <div>
          <div className="input-box">
            <label htmlFor="name">Full Name</label>
            <div><FontAwesomeIcon icon={faUser}  /><input type="text" name="" id="name" placeholder="Preetpal Singh Kanda" /></div>
          </div>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div className="input-box">
            <label htmlFor="phone-no">Phone Number</label>
            <input type="phone" id="phone-no" />
          </div>

          <div className="input-pass-container">
            <div className="input-box ">
              <label htmlFor="pass">Password</label>
              <div className="pass-input">
                <input type="password" id="pass" />

                <FontAwesomeIcon icon={faEye} />
              </div>
            </div>

            <div className="input-box ">
              <label htmlFor="pass-confirm">Confirm Password</label>
              <div className="pass-input">
                <input type="password" id="pass-confirm" />

                <FontAwesomeIcon icon={faEye} />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="gender">Gender</label>
            <div>
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
