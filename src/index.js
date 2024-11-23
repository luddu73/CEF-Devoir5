import React from 'react';
import ReactDOM from 'react-dom/client';
import './component/style.css';
import Home from './Home';
import Header from './component/header';
import Footer from './component/footer';
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
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
