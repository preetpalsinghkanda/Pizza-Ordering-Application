import React, { useContext } from "react";
import "./Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faCircle,
  faUser,
  faEnvelope,
  faPhone,
  faLock,
  faCircleCheck,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import pizzaApp from "../Context/Context";

export default function Signup() {
  const {
    userName,
    setUserName,
    setEmail,
    email,
    setPhoneNo,
    phoneNo,
    pass,
    setPass,
    setPassConfirm,
    passConfirm,
    gender,
    setGender,
    isCheckBox,
    setIsCheckBox,
    isPassIcon,
    setIsPassIcon,
    setIsPassConfirmIcon,
    isPassConfirmIcon,
  } = useContext(pizzaApp);
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
                name="fullName"
                id="name"
                placeholder="Preetpal Singh Kanda"
                value={userName}
                onChange={(x) => {
                  setUserName(x.target.value);
                }}
              />
            </div>
            <p className="error ">Full name is required</p>
          </div>

          <div className="input-box">
            <label htmlFor="email">Email</label>
            <div className="input-icon-box">
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="text"
                id="email"
                placeholder="preet@gmail.com"
                value={email}
                onChange={(x) => {
                  setEmail(x.target.value);
                }}
              />
            </div>
            <p className="error">Email is required</p>
          </div>

          <div className="input-box">
            <label htmlFor="phone-no">Phone Number</label>
            <div className="input-icon-box">
              <FontAwesomeIcon icon={faPhone} />
              <input
                type="tel"
                name="phoneNo"
                id="phone-no"
                placeholder="+1 999 999 9999"
                value={phoneNo}
                onChange={(x) => setPhoneNo(x.target.value)}
              />
            </div>
            <p className="error">Invalid phone number</p>
          </div>

          <div className="input-pass-container">
            <div className="input-box ">
              <label htmlFor="pass">Password</label>
              <div className="pass-input input-icon-box">
                <FontAwesomeIcon icon={faLock} />
                <input
                  type="password"
                  id="pass"
                  placeholder="#Preet1234&&"
                  value={pass}
                  onChange={(x) => setPass(x.target.value)}
                />

                <FontAwesomeIcon
                  onClick={() => setIsPassIcon(!isPassIcon)}
                  icon={isPassIcon ? faEyeSlash : faEye}
                  className="eye-icon"
                />
              </div>
              <p className="error">Password must be at least 6 characters</p>
            </div>

            <div className="input-box ">
              <label htmlFor="pass-confirm">Confirm Password</label>
              <div className="pass-input input-icon-box">
                <FontAwesomeIcon icon={faLock} />
                <input
                  type="password"
                  id="pass-confirm"
                  placeholder="#Preet1234&&"
                  value={passConfirm}
                  onChange={(x) => setPassConfirm(x.target.value)}
                />

                <FontAwesomeIcon
                  onClick={() => setIsPassConfirmIcon(!isPassConfirmIcon)}
                  icon={isPassConfirmIcon ? faEyeSlash : faEye}
                  className="eye-icon"
                />
              </div>
              <p className="error">Passwords do not match</p>
            </div>
          </div>

          <div className="input-box">
            <label htmlFor="gender">Gender</label>
            <div className="gender-boxes">
              <button
                className={gender === "male" ? "selected-gender" : ""}
                onClick={() => setGender("male")}
              >
                Male
              </button>
              <button
                className={gender === "female" ? "selected-gender" : ""}
                onClick={() => setGender("female")}
              >
                Female
              </button>
              <button
                className={gender === "other" ? "selected-gender" : ""}
                onClick={() => setGender("other")}
              >
                Other
              </button>
            </div>
          </div>

          <div
            className="terms_condition"
            onClick={() => setIsCheckBox(!isCheckBox)}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon
              icon={isCheckBox ? faCircleCheck : faCircle}
              className={isCheckBox ? "check-box-icon" : ""}
            />
            <p>I accept the terms and conditions</p>
          </div>
        </div>

        <button className="signup-btn">Sign Up</button>
      </div>
    </div>
  );
}
