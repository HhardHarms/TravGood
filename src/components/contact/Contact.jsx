import React from "react";
import "./contact.css";
import jesse from "../../images/frmimg.jpg";

export default function Contact() {
  return (
    <section className="Contact">
      <div className="CntctIcons">
        <div className="CntctIcon-1">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <h4>
            <span>addrress:</span> plot 2/4, adams <br /> boulevard, lagos
            100265
          </h4>
        </div>
        <div className="CntctIcon-2">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <h4>
            <span>phone:</span> <br />
            +234 906 896 4699
          </h4>
        </div>
        <div className="CntctIcon-3">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
          <h4>
            <span>email:</span> <br />
            adamsgodwin993@gmail.com
          </h4>
        </div>
        <div className="CntctIcon-4">
          <i class="fa fa-globe" aria-hidden="true"></i>
          <h4>
            <span>email:</span> <br />
            adamsgodwin993@gmail.com
          </h4>
        </div>
      </div>
      <div className="CntctBttm">
        <div className="Cntct-bttm">
          <div className="FormImage">
            <img src={jesse} alt="" />
          </div>
          <div className="FrrmTble">
            <form action="">
              <h3>contact us</h3>
              <div className="FrrmTble-up">
                <div className="FrrmName">
                  <h4>full name</h4>
                  <input className="name" type="text" placeholder="" required />
                </div>
                <div className="FrrmEmail">
                  <h4>email</h4>
                  <input
                    className="mail"
                    type="email"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="FrrmTble-dwn">
                <div className="FrrmNumbr">
                  <h4>phone number</h4>
                  <input
                    className="phone"
                    type="number"
                    placeholder=""
                    required
                  />
                </div>
                <div className="FrrmCmmnt">
                  <h4>message</h4>
                  {/* <input
                    className="comment"
                    type="text"
                    placeholder=""
                    required
                  /> */}
                  <textarea name="" className="comment" id=""></textarea>
                </div>
                <button>submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
