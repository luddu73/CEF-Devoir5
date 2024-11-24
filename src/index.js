import React from 'react';
import ReactDOM from 'react-dom/client';
import './component/style.css';
import Home from './Home';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Legals from './pages/legals';
import Header from './component/header';
import Footer from './component/footer';
import Modale from './component/modale';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"; // J'importe le router, puis le créer les balises BrowserRouter pour entourer le module App qui est ma page principale
import {Routes, Route} from "react-router-dom"; // J'importe le système de route ; Link pour éviter le rechargement de page, on remplace les a par link

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Services" element={<Services/>}></Route>
          <Route path="/Portfolio" element={<Portfolio/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Legals" element={<Legals/>}></Route>
      </Routes>
      <Modale />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
