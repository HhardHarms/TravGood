import React from 'react'
import "./footer.css";
export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-icons">
        <a href="">
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="">
          <i class="fa fa-youtube" aria-hidden="true"></i>
        </a>
        <a href="">
          <i class="fa fa-telegram" aria-hidden="true"></i>
        </a>
        <a href="">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
      </div>
      <div className="FooterTxt">
        <p>Copyright © adamsgodwin993@gmail.com</p>
        <p>All Rights Reserved | Designed by: HhardHarmsDesigns.com</p>
      </div>
    </footer>
  );
}
