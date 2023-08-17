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
import Header from "../components/Header";
import Footer from "../components/Footer";
import IntroImg from "../img/intro-01.png";
import IntroImg2 from "../img/intro-02.png";
import IntroImg3 from "../img/intro-03.png";
import IntroImg4 from "../img/intro-04.png";
import WorkflowIcon1 from "../img/workflow-icon-01.jpg";
import WorkflowIcon2 from "../img/workflow-icon-02.jpg";
import WorkflowIcon3 from "../img/workflow-icon-03.jpg";
import WorkflowIcon4 from "../img/workflow-icon-04.jpg";
import WorkflowIcon5 from "../img/workflow-icon-05.jpg";
import WorkflowIcon6 from "../img/workflow-icon-06.jpg";
import WorkflowIcon7 from "../img/workflow-icon-07.jpg";
import NumberBack from "../img/number-back.png";
import NumberIcon1 from "../img/number-icon-01.svg";
import NumberIcon2 from "../img/number-icon-02.svg";
import NumberIcon3 from "../img/number-icon-03.svg";
import NumberIcon4 from "../img/number-icon-04.svg";
import AdvIcon1 from "../img/adv-icon-01.svg";
import AdvIcon2 from "../img/adv-icon-02.svg";
import AdvIcon3 from "../img/adv-icon-03.svg";
import AdvIcon4 from "../img/adv-icon-04.svg";
import AdvIcon5 from "../img/adv-icon-05.svg";
import ProductBack from "../img/product-back.png";
import Product1 from "../img/product-01.png";
import Product2 from "../img/product-02.png";
import Product3 from "../img/product-03.png";
import Product4 from "../img/product-04.png";
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
                Динамично развивающихся компания региона, осуществляющая
                деятельность по направлению поставок широкого спектра
                промышленного оборудования, спецтехники и смазочных материалов в
                Республику Узбекистан. Компания оказывает работу как и по
                поставкам, так и предоставляет спектр консалтинговых услуг при
                подборе техники с последующим сервисным сопровождением.
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src={IntroImg2} alt="truba" />
            </div>
            <div className="text">
              <h2 className="main-title">Надежный партнер</h2>
              <h3>
                С каждый клиентом нашей компании – мы строим партнерство на
                основах доверия проверенное временем
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src={IntroImg3} alt="truba" />
            </div>
            <div className="text">
              <h2 className="main-title">Высшее качество</h2>
              <h3>
                Команда профессионалов предлагает индивидуальные решения
                учитывая требования и пожелания корпоративного Заказчика
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src={IntroImg4} alt="truba" />
            </div>
            <div className="text">
              <h2 className="main-title">Наш опыт</h2>
              <h3>
                Благодаря командной работе профессионалов наша компания
                предлагает конкурентные цены и гарантирует доставку в срок. Мы
                работаем для развития Вашего бизнеса
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="workflow section">
        <div className="sec-title">
          <h3 className="title">КАК МЫ РАБОТАЕМ</h3>
          <h4 className="subtitle">Мы работаем для развития Вашего бизнеса</h4>
          <div className="line"></div>
        </div>
        <div className="steps">
          <div className="step">
            <div className="img">
              <img src={WorkflowIcon1} alt="workflow-icon-1" />
            </div>
            <h5>Заказ товара/услуги</h5>
            <p>
              При запросе наш менеджер принимает заказ и знакомит с нашими
              услугами и продуктами
            </p>
          </div>
          <div className="step">
            <div className="img">
              <img src={WorkflowIcon2} alt="workflow-icon-2" />
            </div>
            <h5>Размещение заказа</h5>
            <p>Предоставляются документы и дается старт проекту</p>
          </div>
          <div className="step">
            <div className="img">
              <img src={WorkflowIcon3} alt="workflow-icon-3" />
            </div>
            <h5>Мониторинг процессов</h5>
            <p>Мониторинг за всеми процессами реализации проекта</p>
          </div>
          <div className="step">
            <div className="img">
              <img src={WorkflowIcon4} alt="workflow-icon-4" />
            </div>
            <h5>Процесс отгрузки</h5>
            <p>Предотгрузочные испытания совместно с Заказчиком</p>
          </div>
          <div className="step">
            <div className="img">
              <img src={WorkflowIcon5} alt="workflow-icon-5" />
            </div>
            <h5>Перевозка</h5>
            <p>Организация перевозки и доставка груза в пункт назначения</p>
          </div>
          <div className="step">
            <div className="img">
              <img src={WorkflowIcon6} alt="workflow-icon-6" />
            </div>
            <h5>Ввод в эксплуатацию</h5>
            <p>
              Пусконаладка осуществляется нашим инженерным отделом при надзоре
              представителя завода-изготовителя
            </p>
          </div>
          <div className="step">
            <div className="img">
              <img src={WorkflowIcon7} alt="workflow-icon-7" />
            </div>
            <h5>Сдача проекта получателю</h5>
            <p>Долгосрочное сопровождение Заказчика</p>
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
            <p>Успешных проектов</p>
          </div>
          <div className="stat">
            <div className="img">
              <img src={NumberIcon3} alt="number" />
            </div>
            <span>650+</span>
            <p>Товаров и услуг</p>
          </div>
          <div className="stat">
            <div className="img">
              <img src={NumberIcon2} alt="number" />
            </div>
            <span>3+</span>
            <p>Складов по Республике Узбекистан</p>
          </div>
          <div className="stat">
            <div className="img">
              <img src={NumberIcon1} alt="number" />
            </div>
            <span>10+</span>
            <p>И более давольных крупных партнеров</p>
          </div>
        </div>
      </div>
      <div className="advantages section">
        <div className="sec-title">
          <h3 className="title">За что выбирают нас</h3>
          <h4 className="subtitle"></h4>
          <div className="line"></div>
        </div>
        <div className="cards">
          <div className="card">
            <img src={AdvIcon5} alt="Cycle" />
            <p>Индивидуальный подход к каждому клиенту</p>
          </div>
          <div className="card">
            <img src={AdvIcon4} alt="Collobaration" />
            <p>24 часа в день, 7 дней в неделю на связи с клиентами</p>
          </div>
          <div className="card">
            <img src={AdvIcon3} alt="Technical" />
            <p>Выгодные условия сотрудничества</p>
          </div>
          <div className="card">
            <img src={AdvIcon2} alt="Location" />
            <p>Гарантия качества услуг и товаров</p>
          </div>
          <div className="card">
            <img src={AdvIcon1} alt="Delivery" />
            <p>Большой спектр услуг и товаров от лидеров мирового рынка</p>
          </div>
        </div>
      </div>
      <div className="products section">
        <div className="back">
          <img src={ProductBack} alt="back" />
        </div>
        <div className="sec-title">
          <h3 className="title">Продукты</h3>
          <h4 className="subtitle"></h4>
          <div className="line"></div>
        </div>
        <div className="productSwiper">
          <HashLink smooth to="/product/#mining" className="product">
            <div className="img">
              <img src={Product1} alt="product" />
            </div>
            <div className="info">
              <h6 className="product-title">Горно-шахтная техника</h6>
            </div>
          </HashLink>
          <HashLink smooth to="/product/#aerodrome" className="product">
            <div className="img">
              <img src={Product2} alt="product" />
            </div>
            <div className="info">
              <h6 className="product-title">Аэродромная техника</h6>
            </div>
          </HashLink>
          <HashLink smooth to="/product/#lubricant" className="product">
            <div className="img">
              <img src={Product3} alt="product" />
            </div>
            <div className="info">
              <h6 className="product-title">
                Индустриальные смазочные материалы
              </h6>
            </div>
          </HashLink>
          <HashLink smooth to="/product/#services" className="product">
            <div className="img">
              <img src={Product4} alt="product" />
            </div>
            <div className="info">
              <h6 className="product-title">Услуги</h6>
            </div>
          </HashLink>
        </div>
      </div>
      <div className="our-partners section">
        <div className="sec-title">
          <h3 className="title">НАМ ДОВЕРЯЮТ БОЛЕЕ 10 КРУПНЫХ КОМПАНИЙ</h3>
          <h4 className="subtitle">
            С нами сотрудничают ведущие предприятия рынка. Совместно выполненные
            успешные проекты, говорят за нашу компанию.
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
