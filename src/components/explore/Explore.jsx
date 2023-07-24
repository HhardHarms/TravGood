import React from 'react'
import "./explore.css"
export default function Explore() {
  return (
    <>
      <section className="Explore">
        <div className="xplore-icon">
          <i class="fa fa-globe" aria-hidden="true"></i>
        </div>
        <h2>
          explore destinations <br /> & activities
        </h2>
        <div className="xploLoc">
          <div className="xploLoc1">
            <div className="xploLoc1-up">
              <button>$50/Night</button>
            </div>
            <div className="xploLoc1-dn">
              <h3>trickle creek ranch</h3>
            </div>
          </div>
          <div className="xploLoc2">
            <div className="xploLoc2-up">
              <button>$48/Night</button>
            </div>
            <div className="xploLoc2-dn">
              <h3>dragonfly tiny cabin</h3>
            </div>
          </div>
          <div className="xploLoc3">
            <div className="xploLoc3-up">
              <button>$46/Night</button>
            </div>
            <div className="xploLoc3-dn">
              <h3>tiny mountain cabins</h3>
            </div>
          </div>
          <div className="xploLoc4">
            <div className="xploLoc4-up">
              <button>$47/Night</button>
            </div>
            <div className="xploLoc4-dn">
              <h3>the stuga</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="Explore2">
        <div className="xplo-Loc1">
          <div className="xplo-Loc1-up">
            <button>$49/Night</button>
          </div>
          <div className="xplo-Loc1-dn">
            <h3>myanmar</h3>
          </div>
        </div>
        <div className="xplo-Loc2">
          <div className="xplo-Loc2-up">
            <button>$45/Night</button>
          </div>
          <div className="xplo-Loc2-dn">
            <h3>japan</h3>
          </div>
        </div>
        <div className="xplo-Loc3">
          <div className="xplo-Loc3-up">
            <button>$48/Night</button>
          </div>
          <div className="xplo-Loc3-dn">
            <h3>bali, indonesia</h3>
          </div>
        </div>
        <div className="xplo-Loc4">
          <div className="xplo-Loc4-up">
            <button>$50/Night</button>
          </div>
          <div className="xplo-Loc4-dn">
            <h3>cambodia</h3>
          </div>
        </div>
      </section>
    </>
  );
}
