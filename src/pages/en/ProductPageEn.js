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
        <div className="product-in" id="mining">
          <div className="text">
            <h3>Mining equipment</h3>
            <ul>
              <li> Stackers (spreaders) </li>
              <li> Bucket wheel reclaimer</li>
              <li> Belt conveyors </li>
              <li> Warehouse equipment </li>
              <li> Ball mills </li>
              <li> Surface excavation machines </li>
              <li> Underground wheel loaders (LHD) </li>
              <li> Underground mining trucks  </li>
              <li> Underground carrying vehicles</li>
            </ul>
          </div>
          <div className="img">
            <img src={Product3} alt="product" />
          </div>
        </div>
        <div className="product-in" id="aerodrome">
          <div className="text">
            <h3>Aerodrome equipment</h3>
            <ul>
              <li> Aircraft tractor  </li>
              <li> Airport towing tractor  </li>
              <li> Cargo high loaders </li>
              <li> Snowsweeper </li>
              <li> Airport sweeper  </li>
              <li> Refueling equipment  </li>
              <li> Apron bus  </li>
              <li> Aircraft de-icing machine  </li>
              <li> Airport fire engines </li>
              <li> Passenger boarding bridges </li>
            </ul>
          </div>
          <div className="img">
            <img src={Product2} alt="product" />
          </div>
        </div>
        <div className="product-in" id="lubricant">
          <div className="text">
            <h3>Industrial lubricants</h3>
            <ul>
              <li> Emulsions for drawing copper and aluminum wire</li>
              <li> Aluminum wire drawing oils and service products</li>
              <li> Food grade lubricants with H1 approval</li>
              <li> Lubricants for cement industry</li>
              <li> Lubricants for mining industry</li>
              <li> Lubricants for textile industry</li>
              <li> Turbine and compressor oils</li>
            </ul>
          </div>
          <div className="img">
            <img src={Product1} alt="product" />
          </div>
        </div>
        <div className="product-in" id="services">
          <div className="text">
            <h3>Our services</h3>
            <ul>
              <li>
                <b>Engineering</b> - our concept is high profitability and smooth
                processes through individual problem solving are our concept. We
                benefit from over 9 years of experience. And our solutions have
                already proven their effectiveness in practice.
              </li>
              <li>
                <b>Service</b> - regular service is more than just maintenance:
                Precaution ensures the operational readiness of your systems and
                guarantees long-term economic efficiency.
              </li>
              <li>
                <b>Assembly</b> - precise planning, perfect organization, and the
                untiring willingness of our fitters ensure that the plants are
                erected on site on time and in the proper manner, even under the
                most difficult conditions.
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
