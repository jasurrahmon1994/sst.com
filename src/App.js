import React from "react";
import "./main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import IndexPageEn from "./pages/en/IndexPageEn";
import AboutPage from "./pages/AboutPage";
import AboutPageEn from "./pages/en/AboutPageEn";
import ConnectPage from "./pages/ConnectPage";
import ConnectPageEn from "./pages/en/ConnectPageEn";
import ProductPage from "./pages/ProductPage";
import ProductPageEn from "./pages/en/ProductPageEn";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<IndexPage />}></Route>
        <Route exact path="/en" element={<IndexPageEn />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/about/en" element={<AboutPageEn />} />
        <Route exact path="/connect" element={<ConnectPage />} />
        <Route exact path="/connect/en" element={<ConnectPageEn />} />
        <Route exact path="/product" element={<ProductPage />} />
        <Route exact path="/product/en" element={<ProductPageEn />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
