import React from "react";
import "./signup.css";

export default function Sign() {
  return (
    <section className="Sign">
      <div className="Sign-up">
        <div className="Sign-upTxt">
          <p>welcome,</p>
          <h3>sign up</h3>
        </div>
        <div className="Sign-up-icons">
          <div className="Sign-up-icons1">
            <i class="fa fa-google" aria-hidden="true"></i>
          </div>
          <div className="Sign-up-icons2">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </div>
          <div className="Sign-up-icons3">
            <i class="fa fa-github" aria-hidden="true"></i>
          </div>
        </div>
        <div className="allt">
          <div className="spaan"></div>
          <p>or</p>
          <div className="spaan"></div>
        </div>
        <div className="Sign-upDwn">
          <div className="Sign-upDwn-input">
            <div className="Sign-upDwn-input1">
              <input
                className="emaal"
                type="name"
                placeholder="Username"
                required="required"
              />
            </div>
            <div className="Sign-upDwn-input2">
              <input
                className="emaal"
                type="email"
                placeholder="Email"
                required="required"
              />
            </div>
            <div className="Sign-upDwn-input3">
              <input
                className="emaal"
                type="number"
                placeholder="Phone Number"
                required="required"
              />
            </div>
            <div className="Sign-upDwn-input4">
              <input
                className="psswwd"
                type="password"
                placeholder="Password"
                required="required"
              />
            </div>
          </div>
          <button>log in</button>
          <div className="Sign-upDwn-bttm">
            <input className="chekk" type="checkbox" />
            <p>
              I accept the <span>policy and terms</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
