import React from "react";
import {
  Pagination,
  EffectFade,
  Autoplay,
  FreeMode,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Header from "../../components/en/Header";
import Footer from "../../components/en/Footer";
import IntroImg from "../../img/intro-01.webp";
import IntroImg2 from "../../img/intro-02.webp";
import IntroImg3 from "../../img/intro-03.webp";
import IntroImg4 from "../../img/intro-04.webp";
import WorkflowIcon1 from "../../img/workflow-icon-01.jpg";
import WorkflowIcon2 from "../../img/workflow-icon-02.jpg";
import WorkflowIcon3 from "../../img/workflow-icon-03.jpg";
import WorkflowIcon4 from "../../img/workflow-icon-04.jpg";
import WorkflowIcon5 from "../../img/workflow-icon-05.jpg";
import WorkflowIcon6 from "../../img/workflow-icon-06.jpg";
import WorkflowIcon7 from "../../img/workflow-icon-07.jpg";
import NumberBack from "../../img/number-back.webp";
import NumberIcon1 from "../../img/number-icon-01.svg";
import NumberIcon2 from "../../img/number-icon-02.svg";
import NumberIcon3 from "../../img/number-icon-03.svg";
import NumberIcon4 from "../../img/number-icon-04.svg";
import AdvIcon1 from "../../img/adv-icon-01.svg";
import AdvIcon2 from "../../img/adv-icon-02.svg";
import AdvIcon3 from "../../img/adv-icon-03.svg";
import AdvIcon4 from "../../img/adv-icon-04.svg";
import AdvIcon5 from "../../img/adv-icon-05.svg";
import ProductBack from "../../img/product-back.webp";
import Product1 from "../../img/product-01.webp";
import Product2 from "../../img/product-02.webp";
import Product3 from "../../img/product-03.webp";
import Product4 from "../../img/product-04.webp";
import Partner1 from "../../img/partner-01.jpg";
import Partner2 from "../../img/partner-02.jpg";
import Partner3 from "../../img/partner-03.jpg";
import Partner4 from "../../img/partner-04.jpg";
import Partner5 from "../../img/partner-05.jpg";
import Partner6 from "../../img/partner-06.jpg";
import Partner7 from "../../img/partner-07.jpg";
import Partner8 from "../../img/partner-08.jpg";
import Partner9 from "../../img/partner-09.jpg";
import Partner10 from "../../img/partner-10.jpg";
import Partner11 from "../../img/partner-11.jpg";
import { HashLink } from "react-router-hash-link";

function IndexPage() {
  return (
    <>
      <Header />
      <div className="show-section">
        <Swiper
          modules={[Pagination, EffectFade, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          speed={3000}
          loop={true}
          autoplay={true}
          effect={"fade"}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="img">
              <img src={IntroImg} alt="truba" />
            </div>
            <div className="text">
              <h2 className="main-title"> SWISS SAFE TRADE</h2>
              <h3>
              Dynamically developing companies in the region, carrying out
                Activities in the direction of supplies of a wide range of
                industrial equipment, special machinery and lubricants in
                The Republic of Uzbekistan. The company provides work on both
                supplies, and provides a range of consulting services for
                selection of equipment with subsequent service support.
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src={IntroImg2} alt="truba" />
            </div>
            <div className="text">
              <h2 className="main-title">Reliable partner</h2>
              <h3>
              With each client of our company - we build a partnership on the basis of time-tested trust
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src={IntroImg3} alt="truba" />
            </div>
            <div className="text">
              <h2 className="main-title">Top quality</h2>
              <h3>
              A team of professionals offers individual solutions, taking into account the requirements and wishes of a corporate customer
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src={IntroImg4} alt="truba" />
            </div>
            <div className="text">
              <h2 className="main-title">Our experience</h2>
              <h3>
              Thanks to the teamwork of professionals, our company offers competitive prices and guarantees delivery on time. We work to develop your business
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="workflow section">
        <div className="sec-title">
          <h3 className="title">HOW WE OPERATE</h3>
          <h4 className="subtitle">We work to develop your business</h4>
          <div className="line"></div>
        </div>
        <div className="steps">
          <div className="step">
            <div className="img">
              <img src={WorkflowIcon1} alt="workflow-icon-1" />
            </div>
            <h5>Ordering goods/services</h5>
            <p>
            Upon request, our manager takes the order and introduces our services and products
            </p>
          </div>
          <div className="step">
            <div className="img">
              <img src={WorkflowIcon2} alt="workflow-icon-2" />
            </div>
            <h5>Order Placement</h5>
             <p>
             Documents are provided and the project is launched
             </p>
          </div>
          <div className="step">
            <div className="img">
              <img src={WorkflowIcon3} alt="workflow-icon-3" />
            </div>
            <h5>Process monitoring</h5>
             <p>
             Monitoring of all project implementation processes
             </p>
          </div>
          <div className="step">
            <div className="img">
              <img src={WorkflowIcon4} alt="workflow-icon-4" />
            </div>
            <h5>Shipping process</h5>
             <p>
             Pre-shipment tests together with the Customer
             </p>
          </div>
          <div className="step">
            <div className="img">
              <img src={WorkflowIcon5} alt="workflow-icon-5" />
            </div>
            <h5>Transportation</h5>
             <p>
             Organization of transportation and delivery of cargo to the destination
             </p>
          </div>
          <div className="step">
            <div className="img">
              <img src={WorkflowIcon6} alt="workflow-icon-6" />
            </div>
            <h5>Commissioning</h5>
             <p>
             Commissioning is carried out by our engineering department under the supervision of a representative of the manufacturer
             </p>
          </div>
          <div className="step">
            <div className="img">
              <img src={WorkflowIcon7} alt="workflow-icon-7" />
            </div>
            <h5>Delivery of the project to the recipient</h5>
             <p>
             Long-term customer support
             </p>
          </div>
        </div>
      </div>
      <div className="numbers section">
        <div className="back">
          <img src={NumberBack} alt="back" />
        </div>
        <div className="stats">
          <div className="stat">
            <div className="img">
              <img src={NumberIcon4} alt="number" />
            </div>
            <span>22+</span>
            <p>Successful projects</p>
          </div>
          <div className="stat">
            <div className="img">
              <img src={NumberIcon3} alt="number" />
            </div>
            <span>650+</span>
            <p>Products and services</p>
          </div>
          <div className="stat">
            <div className="img">
              <img src={NumberIcon2} alt="number" />
            </div>
            <span>3+</span>
            <p>Warehouses in the Republic of Uzbekistan</p>
          </div>
          <div className="stat">
            <div className="img">
              <img src={NumberIcon1} alt="number" />
            </div>
            <span>10+</span>
            <p>And more satisfied big partners</p>
          </div>
        </div>
      </div>
      <div className="advantages section">
        <div className="sec-title">
          <h3 className="title">Why we are chosen</h3>
          <h4 className="subtitle"></h4>
          <div className="line"></div>
        </div>
        <div className="cards">
          <div className="card">
            <img src={AdvIcon5} alt="Cycle" />
            <p>Individual approach to each client</p>
          </div>
          <div className="card">
            <img src={AdvIcon4} alt="Collobaration" />
             <p>24 hours a day, 7 days a week in touch with clients</p>
          </div>
          <div className="card">
            <img src={AdvIcon3} alt="Technical" />
            <p>Favorable terms of cooperation</p>
          </div>
          <div className="card">
            <img src={AdvIcon2} alt="Location" />
            <p>Quality assurance of services and goods</p>
          </div>
          <div className="card">
            <img src={AdvIcon1} alt="Delivery" />
            <p>A wide range of services and products from world market leaders</p>
          </div>
        </div>
      </div>
      <div className="products section">
        <div className="back">
          <img src={ProductBack} alt="back" />
        </div>
        <div className="sec-title">
          <h3 className="title">Products</h3>
          <h4 className="subtitle"></h4>
          <div className="line"></div>
        </div>
        <div className="productSwiper">
          <HashLink smooth to="/product/en/#mining" className="product">
            <div className="img">
              <img src={Product1} alt="product" />
            </div>
            <div className="info">
              <h6 className="product-title">Mining equipment</h6>
            </div>
          </HashLink>
          <HashLink smooth to="/product/en/#aerodrome" className="product">
            <div className="img">
              <img src={Product2} alt="product" />
            </div>
            <div className="info">
              <h6 className="product-title">Aerodrome equipment</h6>
            </div>
          </HashLink>
          <HashLink smooth to="/product/en/#lubricant" className="product">
            <div className="img">
              <img src={Product3} alt="product" />
            </div>
            <div className="info">
              <h6 className="product-title">
                Industrial lubricants
              </h6>
            </div>
          </HashLink>
          <HashLink smooth to="/product/en/#services" className="product">
            <div className="img">
              <img src={Product4} alt="product" />
            </div>
            <div className="info">
              <h6 className="product-title">Services</h6>
            </div>
          </HashLink>
        </div>
      </div>
      <div className="our-partners section">
        <div className="sec-title">
        <h3 className="title">WE ARE TRUSTED BY MORE THAN 10 BIG COMPANIES</h3>
           <h4 className="subtitle">
             Leading companies in the market cooperate with us. Jointly executed
             successful projects speak for our company.
           </h4>
          <div className="line"></div>
        </div>
        <div className="partners">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            speed={1500}
            loop={true}
            autoplay={true}
            className="partnerSwiper"
            breakpoints={{
              1200: {
                width: 1200,
                slidesPerView: 4.5,
              },
              768: {
                width: 768,
                slidesPerView: 3.5,
              },
              600: {
                width: 600,
                slidesPerView: 3.5,
              },
              350: {
                width: 250,
                slidesPerView: 2.5,
              },
            }}
          >
            <SwiperSlide>
              <div className="img">
                <img src={Partner1} alt="partner" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img">
                <img src={Partner2} alt="partner" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img">
                <img src={Partner3} alt="partner" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img">
                <img src={Partner4} alt="partner" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img">
                <img src={Partner5} alt="partner" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img">
                <img src={Partner6} alt="partner" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img">
                <img src={Partner7} alt="partner" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img">
                <img src={Partner8} alt="partner" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img">
                <img src={Partner9} alt="partner" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img">
                <img src={Partner10} alt="partner" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img">
                <img src={Partner11} alt="partner" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default IndexPage;
