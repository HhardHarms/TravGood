import React from "react";
import "./clients.css";
export default function Clients() {
  return (
    <section className="Clients">
      <div className="Clint">
        <div className="ClintTxt">
          <h2>your preferred travel company</h2>
          <h4>
            At TravGood we offer a complete travel management and everything
            from planning to execution of tours. <br /> We provide travel
            services to small to mid-size enterprise, private or listed company
            and also leisure <br /> clients through our network of member
            agencies.
          </h4>
          <br />
          <h4>
            When making travel arrangement, we at TravGood understand the
            importance of having a <br /> seamless travel experience. Our
            quality services and product covers outbound, inbound, <br />{" "}
            domestic holidays and various airlines ticketing are delivered with
            the financial strength, <br /> experienced team mates, advanced
            systems and innovations you would expect from a leader.
          </h4>
          <br />
          <h4>
            Let us make the magic happen while you step seamlessly into <br />{" "}
            an unforgettable adventure.
          </h4>
        </div>
      </div>

      <div className="Goals">
        <div className="Mish">
          <i class="fa fa-tasks" aria-hidden="true"></i>
          <h3>mission</h3>
          <p>
            To be a one stop travel central <br /> to deliver <br /> premium
            quality of travel solutions <br /> to customers.
          </p>
        </div>
        <div className="Vish">
          <i class="fa fa-eye" aria-hidden="true"></i>
          <h3>vision</h3>
          <p>
            To be a leading respected and trusted <br /> player in the travel &
            tourism segment <br /> and strive to be the best we can be to <br />
            achieve long term sustainable <br /> growth.​
          </p>
        </div>
      </div>

      <div className="Goal-list">
        <div className="List-up">
          <i class="fa fa-list-ul" aria-hidden="true"></i>
          <h3>Objectives</h3>
        </div>
        <div className="List-dwn">
          <ul>
            <li>
              To manage all the travel requirements while providing ease and
              sort <br /> of convenience to customers.
            </li>
            <li>To offer value for money travel services to customers.</li>
            <li>
              Produce expeditions and memories that would satisfy each <br />{" "}
              and every single customers.
            </li>
            <li>
              To help customers understanding on a particular country cultural,{" "}
              <br />
              history and local community through inbound and outbound tour.
            </li>
            <li>
              Provide a high standard of services suitable for individuals or
              groups <br /> seeking relaxing, comfortable and memorable
              experiences in the <br /> tourism industry.
            </li>
          </ul>
        </div>
      </div>

      <h1>what clients say</h1>
      <div className="Clie-nts">
        <div className="Client1">
          <i class="fa fa-quote-left" aria-hidden="true"></i>
          <h4>
            I would like to thank you <br /> and TravGood for the excellent{" "}
            <br /> service provided, the <br /> reservation process was good and
            flexible.
          </h4>
          <p>-akpos efe-</p>
        </div>
        <div className="Client2">
          <i class="fa fa-quote-left" aria-hidden="true"></i>
          <h4>
            Everything was well planned, <br /> well organized and perfect,{" "}
            <br />
            the cabins were well maintained and good <br /> hospitality.
          </h4>
          <p>-eze chuks-</p>
        </div>
        <div className="Client3">
          <i class="fa fa-quote-left" aria-hidden="true"></i>
          <h4>
            I wanted to express my
            <br />
            appreciation for the amazing
            <br />
            experience, i'm happy with the arrangements TravGood.
            <br />
            Cheers!!!
          </h4>
          <p>-odiong eno-</p>
        </div>
      </div>
    </section>
  );
}
