import React from "react";
import Logo from "../img/logo.png";
import PhoneIcon from "../img/phone-icon.png";
import { Link } from "react-router-dom";

function Header() {
  const handleClick = () => {
  	document.querySelector('.nav-links').classList.toggle('active');
  	document.querySelector(".hamburger--squeeze").classList.toggle("is-active");
  }

  return (
    <nav className="navigation">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="nav-links">
        <div className="links">
          <Link to="/" className="nav-link active">
            <p> Главная </p>
          </Link>
          <Link to="/about" className="nav-link">
            <p> О компании </p>
          </Link>
          <Link to="/product" className="nav-link">
            <p> Продукты </p>
          </Link>
        </div>
        <div className="links">
          <Link to="/connect" className="nav-link">
            <p> Оставить заявку </p>
          </Link>
          <a href="tel:+998910099536" className="nav-link">
            <div className="img">
              <img src={PhoneIcon} alt="phone-icon" />
            </div>
            <p> +998910099536 </p>
          </a>
          <div className="nav-link">
            <p className="active">Ru</p>
            <span>/</span>
            <Link to="/en" className="lang">
              En
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
