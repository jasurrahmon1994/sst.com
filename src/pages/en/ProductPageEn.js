import React from "react";
import Header from "../../components/en/Header";
import Footer from "../../components/en/Footer";
import Product1 from "../../img/product-in-01.png";
import Product2 from "../../img/product-in-02.png";
import Product3 from "../../img/product-in-03.png";
import Product4 from "../../img/product-in-04.png";

function ProductPage() {
  return (
    <div className="product-page">
      <Header />
      <main>
        <div className="sec-title">
          <h3 className="title">Products</h3>
          <h4 className="subtitle"></h4>
          <div className="line"></div>
        </div>
        <div className="product-in">
          <div className="text">
            <h3>Mining equipment</h3>
            <ul>
              <li> Stackers (spreaders) </li>
              <li> Rotary Bucket Reclaimers</li>
              <li> Belt conveyors </li>
              <li> Warehouse equipment </li>
              <li> Ball mills </li>
              <li> Milling machines </li>
              <li> Loader </li>
              <li> Mining trucks </li>
              <li> Mining auxiliary equipment </li>
            </ul>
          </div>
          <div className="img">
            <img src={Product3} alt="product" />
          </div>
        </div>
        <div className="product-in">
          <div className="text">
            <h3>Aerodrome equipment</h3>
            <ul>
              <li> Airfield tractor </li>
              <li> Luggage tractor </li>
              <li> Pallet and Container Loader </li>
              <li> Snowplows </li>
              <li> Sweeping </li>
              <li> Refueling equipment </li>
              <li> Apron bus </li>
              <li> Vessel de-icing machine </li>
              <li>Fire fighting equipment</li>
              <li> Telescopic ladders </li>
            </ul>
          </div>
          <div className="img">
            <img src={Product2} alt="product" />
          </div>
        </div>
        <div className="product-in">
          <div className="text">
            <h3>Industrial lubricants</h3>
            <ul>
              <li> Emulsions for drawing copper and aluminum wire</li>
              <li>Aluminum wire drawing oils and service products</li>
              <li> Food grade lubricants with H1 approval</li>
              <li>Lubricants for the cement industry</li>
              <li> Mining lubricants </li>
              <li>Lubricants for the textile industry</li>
              <li>Turbine and compressor oils</li>
            </ul>
          </div>
          <div className="img">
            <img src={Product1} alt="product" />
          </div>
        </div>
        <div className="product-in">
          <div className="text">
            <h3>Our services</h3>
            <ul>
              <li>
                <bold>Engineering</bold> - our concept is high profitability and
                flawless processes as a result of individual solutions problems.
                Our advantage is more than 9 years of experience and repeatedly
                proven solutions in practice.
              </li>
              <li>
                <bold>Service</bold> – regular service is more than just
                maintenance. Regular preventive maintenance ensures high
                technical availability of your equipment and guarantee its
                profitability operation for a long time.
              </li>
              <li>
                <bold>Installation</bold> – detailed planning, excellent
                organization and the tireless readiness of our installers ensure
                professional and timely installation of your equipment on where
                it is installed – even under the most difficult conditions.
              </li>
            </ul>
          </div>
          <div className="img">
            <img src={Product4} alt="product" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;
