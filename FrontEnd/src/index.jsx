import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Pages importées
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";
//Import du style du corps de la page
import "./index.css";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
