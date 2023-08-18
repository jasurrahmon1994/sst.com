import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product1 from "../img/product-in-01.webp";
import Product2 from "../img/product-in-02.webp";
import Product3 from "../img/product-in-03.webp";
import Product4 from "../img/product-in-04.webp";

function ProductPage() {
  return (
    <div className="product-page">
      <Header />
      <main>
        <div className="sec-title">
          <h3 className="title">Продукты</h3>
          <h4 className="subtitle"></h4>
          <div className="line"></div>
        </div>
        <div className="product-in" id="mining">
          <div className="text">
            <h3>Горно-шахтная техника</h3>
            <ul>
              <li> Cтакеры (отвалообразователи) </li>
              <li> Роторные ковшевые стакер-реклаймеры </li>
              <li> Ленточные конвейеры </li>
              <li> Техника для складских площадок </li>
              <li> Шаровые мельницы </li>
              <li> Фрезерные комбайны </li>
              <li> Погрузочно-доставочная машина </li>
              <li> Шахтые самосвалы </li>
              <li> Шахтная вспомогательная техника </li>
            </ul>
          </div>
          <div className="img">
            <img src={Product3} alt="product" />
          </div>
        </div>
        <div className="product-in" id="aerodrome">
          <div className="text">
            <h3>Аэродромная техника</h3>
            <ul>
              <li> Аэродромный тягач </li>
              <li> Багажный тягач </li>
              <li> Перегружатель палет и контейнеров </li>
              <li> Снегоуборочная техника </li>
              <li> Подметельная техника </li>
              <li> Топливозаправочная техника </li>
              <li> Перронный автобус </li>
              <li> Машина для противообледнительной обработки судна </li>
              <li>Пожарная техника</li>
              <li> Телескопические трапы </li>
            </ul>
          </div>
          <div className="img">
            <img src={Product2} alt="product" />
          </div>
        </div>
        <div className="product-in" id="lubricant">
          <div className="text">
            <h3>Индустриальные смазочные материалы</h3>
            <ul>
              <li> Эмульсии для волочения медной и алюминиевой проволоки</li>
              <li>
                Масла для волочения алюминиевой проволоки и сервисные продукты
              </li>
              <li> Пищевые смазочные материалы с допуском H1</li>
              <li> Смазочные материалы для цементной промышленности</li>
              <li> Смазочные материалы для горной промышленности </li>
              <li> Смазочные материалы для текстильной промышленности</li>
              <li> Турбинные и компрессорные масла</li>
            </ul>
          </div>
          <div className="img">
            <img src={Product1} alt="product" />
          </div>
        </div>
        <div className="product-in" id="services">
          <div className="text">
            <h3>Наши услуги</h3>
            <ul>
              <li>
                <b>Инжиниринг </b> – наша концепция – высокая рентабельность и
                безупречные процессы как результат индивидуального решения
                проблем. Наше преимущество – это свыше 9 лет опыта и многократно
                себя хорошо зарекомендовавшие на практике решения.
              </li>
              <li>
                <b>Сервис </b> – регулярное сервисное обслуживание – это больше, чем
                просто техническое обслуживание. Проведение регулярного
                профилактического обслуживания обеспечивает высокую техническую
                готовность вашего оборудования и гарантируют рентабельность его
                эксплуатации на протяжении длительного времени.
              </li>
              <li>
                <b>Монтаж </b> – детальное планирование, отличная организация и
                неустанная готовность наших монтажников обеспечивают
                профессиональный и своевременный монтаж вашего оборудования на
                месте его установки – даже в самых тяжелых условиях.
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
