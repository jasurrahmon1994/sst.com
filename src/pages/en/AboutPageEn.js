import React from "react";
import Footer from "../../components/en/Footer";
import Header from "../../components/en/Header";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Tick from "../../img/tick.svg";
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

function AboutPage() {
  return (
    <>
      <Header />
      <div className="about-page">
        <main>
          <div className="sec-title left">
            <h3 className="title">About us</h3>
            <div className="line"></div>
            <p>
              SWISS SAFE TRADE - dynamically developing companies in the region,
               carrying out activities in the direction of supply of a wide
               range of industrial equipment, special equipment and lubricants
               materials to the Republic of Uzbekistan. The company operates as
               and supply, and provides a range of consulting services
               when selecting equipment with subsequent service support.
            </p>
          </div>
          <div className="img-text">
            <div className="text">
              <div className="point">
              <h3>Reliable partner:</h3>
                 <p>
                   Thanks to the teamwork of professionals, our company
                   offers competitive prices and guarantees delivery on time. We
                   works to grow your business.
                 </p>
              </div>
              <div className="point">
              <h3>High quality:</h3>
                 <p>
                   A team of professionals offers customized solutions
                   taking into account the requirements and wishes of the corporate customer.
                 </p>
              </div>
              <div className="point">
              <h3>Our experience:</h3>
                 <p>
                   Thanks to the teamwork of professionals, our company
                   offers competitive prices and guarantees delivery on time. We
                   works to grow your business.
                 </p>
              </div>
            </div>
          </div>
          <ul className="product-list">
            <div className="sec-title left">
              <h3>Products</h3>
              <div className="line"></div>
            </div>
            <li>
              <img src={Tick} alt="tick" />
              <p>Mining equipment</p>
            </li>
            <li>
              <img src={Tick} alt="tick" />
              <p>Airfield equipment</p>
            </li>
            <li>
              <img src={Tick} alt="tick" />
              <p>Industrial lubricants</p>
            </li>
          </ul>
          <div className="partners">
            <div className="sec-title left">
              <h3>Our partners</h3>
              <div className="line"></div>
            </div>
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
        </main>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
