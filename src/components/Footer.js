import React from 'react';
import Phone from "../img/phone.svg";
import Email from "../img/mail.svg";
import Location from "../img/map-pin.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <div className="f-link">
            <div className="img">
                <img src={Phone} alt="phone" />
            </div>
            <a href="tel:+998910099536">+998910099536</a>
        </div>
        <div className="f-link">
            <div className="img">
                <img src={Email} alt="email" />
            </div>
            <a href="mailto:info@swiss-safe-trade.com">info@swiss-safe-trade.com</a>
        </div>
        <div className="f-link">
            <div className="img">
                <img src={Location} alt="location" />
            </div>
            <a href="https://goo.gl/maps/etges37Sic2Dnknz8">Ифтихор дом 1, Ташкент, Узбекистан</a>
        </div>
      </div>
      <div className="copyright">
        <p>©2023   ООО “SWISS-SAFE-TRADE”  | All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
