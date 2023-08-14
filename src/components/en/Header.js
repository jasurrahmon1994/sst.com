import React from "react";
import Logo from "../../img/logo.png";
import PhoneIcon from "../../img/phone-icon.png";
import { Link } from "react-router-dom";

function Header() {
  const handleClick = () => {
  	document.querySelector('.nav-links').classList.toggle('active');
  	document.querySelector(".hamburger--squeeze").classList.toggle("is-active");
  }

  return (
    <nav className="navigation">
      <Link to="/en" className="logo">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="nav-links">
        <div className="links">
          <Link to="/en" className="nav-link active">
            <p> Home </p>
          </Link>
          <Link to="/about/en" className="nav-link">
            <p> About us </p>
          </Link>
          <Link to="/product/en" className="nav-link">
            <p> Products </p>
          </Link>
        </div>
        <div className="links">
          <Link to="/connect/en" className="nav-link">
            <p> Submit request </p>
          </Link>
          <a href="tel:+998910099536" className="nav-link">
            <div className="img">
              <img src={PhoneIcon} alt="phone-icon" />
            </div>
            <p> +998910099536 </p>
          </a>
          <div className="nav-link">
            <p className="active">En</p>
            <span>/</span>
            <Link to="/" className="lang">
              Ru
            </Link>
          </div>
        </div>
      </div>
      <div className="mobile-btns" onClick={handleClick}>
				<button className="hamburger hamburger--squeeze" type="button">
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
				</button>
			</div>
    </nav>
  );
}

export default Header;
