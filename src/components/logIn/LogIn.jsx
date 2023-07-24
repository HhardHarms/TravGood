import React from "react";
import "./logIn.css";

export default function Login() {
  return (
    <section className="login">
      <div className="LogUp">
        <div className="LogUpTxt">
          <p>welcome back,</p>
          <h3>log in</h3>
        </div>
        <div className="LogUp-icons">
          <div className="LogUp-icons1">
            <i class="fa fa-google" aria-hidden="true"></i>
          </div>
          <div className="LogUp-icons2">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </div>
          <div className="LogUp-icons3">
            <i class="fa fa-github" aria-hidden="true"></i>
          </div>
        </div>
        <div className="alt">
          <div className="span"></div>
          <p>or</p>
          <div className="span"></div>
        </div>
        <div className="LogDwn">
          <div className="LogDwn-input">
            <div className="LogDwn-input1">
              <input
                className="emal"
                type="email"
                placeholder="Email"
                required="required"
              />
            </div>
            <div className="LogDwn-input2">
              <input
                className="psswd"
                type="password"
                placeholder="Password"
                required="required"
              />
            </div>
          </div>
          <button>log in</button>
          <p>forgot password?</p>
        </div>
      </div>
    </section>
  );
}
