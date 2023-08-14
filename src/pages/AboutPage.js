import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import AboutImg from "../img/about-comp.png";
import Tick from "../img/tick.svg";
import Partner1 from "../img/partner-01.jpg";
import Partner2 from "../img/partner-02.jpg";
import Partner3 from "../img/partner-03.jpg";
import Partner4 from "../img/partner-04.jpg";
import Partner5 from "../img/partner-05.jpg";
import Partner6 from "../img/partner-06.jpg";
import Partner7 from "../img/partner-07.jpg";
import Partner8 from "../img/partner-08.jpg";
import Partner9 from "../img/partner-09.jpg";
import Partner10 from "../img/partner-10.jpg";
import Partner11 from "../img/partner-11.jpg";

function AboutPage() {
  return (
    <>
      <Header />
      <div className="about-page">
        <main>
          <div className="sec-title left">
            <h3 className="title">О КОМПАНИИ</h3>
            <div className="line"></div>
            <p>
              SWISS SAFE TRADE - динамично развивающихся компания региона,
              осуществляющая деятельность по направлению поставок широкого
              спектра промышленного оборудования, спецтехники и смазочных
              материалов в Республику Узбекистан. Компания оказывает работу как
              и по поставкам, так и предоставляет спектр консалтинговых услуг
              при подборе техники с последующим сервисным сопровождением.
            </p>
          </div>
          <div className="img-text">
            <div className="text">
              <div className="point">
                <h3>Надежный партнер:</h3>
                <p>
                  Благодаря командной работе профессионалов наша компания
                  предлагает конкурентные цены и гарантирует доставку в срок. Мы
                  работает для развития Вашего бизнеса.
                </p>
              </div>
              <div className="point">
                <h3> Высшее качество:</h3>
                <p>
                  Команда профессионалов предлагает индивидуальные решения
                  учитывая требования и пожелания корпоративного Заказчика.
                </p>
              </div>
              <div className="point">
                <h3>Наш опыт:</h3>
                <p>
                  Благодаря командной работе профессионалов наша компания
                  предлагает конкурентные цены и гарантирует доставку в срок. Мы
                  работает для развития Вашего бизнеса.
                </p>
              </div>
            </div>
          </div>
          <ul className="product-list">
            <div className="sec-title left">
              <h3>Продукция</h3>
              <div className="line"></div>
            </div>
            <li>
              <img src={Tick} alt="tick" />
              <p>Горно-шахтная техника</p>
            </li>
            <li>
              <img src={Tick} alt="tick" />
              <p>Аэродромная техника</p>
            </li>
            <li>
              <img src={Tick} alt="tick" />
              <p>Индустриальные смазочные материалы</p>
            </li>
          </ul>
          <div className="partners">
            <div className="sec-title left">
              <h3>Наши партнёры</h3>
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
