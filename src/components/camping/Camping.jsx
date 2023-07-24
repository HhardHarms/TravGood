import React from 'react'
import "./camping.css"
export default function Camping() {
  return (
    <>
      <section className="Camping">
        <div className="camp1">
          <div className="camp1-icon">
            <i class="fa fa-fire" aria-hidden="true"></i>
          </div>
          <h3>camping & day use</h3>
          <p>
            Return to your favorite <br /> spot or discover a new <br /> one
            that's right for you
          </p>
        </div>
        <div className="camp2">
          <div className="camp2-icon">
            <i class="fa fa-ticket" aria-hidden="true"></i>
          </div>
          <h3>tours & tickets</h3>
          <p>
            Reserve tours and <br /> tickets to participate <br /> in events
          </p>
        </div>
        <div className="camp3">
          <div className="camp3-icon">
            <i class="fa fa-universal-access" aria-hidden="true"></i>
          </div>
          <h3>permits</h3>
          <p>
            Obtain permits for <br /> access to high demand <br /> locations
          </p>
        </div>
        <div className="camp4">
          <div className="camp4-icon">
            <i class="fa fa-compass" aria-hidden="true"></i>
          </div>
          <h3>recreation activites</h3>
          <p>
            Find the best spots for <br /> hunting, fishing & <br />{" "}
            recreational shooting
          </p>
        </div>
      </section>

      <section className="Camping2">
        <div className="camp5">
          <div className="camp5-icon">
            <i class="fa fa-check-square-o" aria-hidden="true"></i>
          </div>
          <h3>visa application</h3>
          <p>
            Return to your favorite <br /> spot or discover a new <br /> one
            that's right for you
          </p>
        </div>
        <div className="camp6">
          <div className="camp6-icon">
            <i class="fa fa-plane" aria-hidden="true"></i>
          </div>
          <h3>airline ticketing</h3>
          <p>
            Return to your favorite <br /> spot or discover a new <br /> one
            that's right for you
          </p>
        </div>
        <div className="camp7">
          <div className="camp7-icon">
            <i class="fa fa-globe" aria-hidden="true"></i>
          </div>
          <h3>worldwide reservation</h3>
          <p>
            Return to your favorite <br /> spot or discover a new <br /> one
            that's right for you
          </p>
        </div>
      </section>
    </>
  );
}
