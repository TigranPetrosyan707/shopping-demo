import { useState } from "react";

import "./style.css";

const Registration = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  return (
    <div className="main-container">
      <label className="dark-light-mode">
        <input type="checkbox" />
        <span className="check"></span>
      </label>
      <div
        className={showSignIn ? "register-container" : "right-panel-active"}
        id="register-container"
      >
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="infield">
              <input type="text" placeholder="Name" />
              <label></label>
            </div>
            <div className="infield">
              <input type="email" placeholder="Email" name="email" />
              <label></label>
            </div>
            <div className="infield">
              <input type="password" placeholder="Password" />
              <label></label>
            </div>
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="infield">
              <input type="email" placeholder="Email" name="email" />
              <label></label>
            </div>
            <div className="infield">
              <input type="password" placeholder="Password" />
              <label></label>
            </div>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container" id="overlayCon">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start shopping with us</p>
              <button>Sign Up</button>
            </div>
          </div>
          <button
            id="overlayBtn"
            onClick={() => setShowSignIn(!showSignIn)}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
