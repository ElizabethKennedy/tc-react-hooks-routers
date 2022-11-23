import React from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import FilmsPage from "./pages/FilmsPage.jsx";
import './App.css';

export default App;

function App (props){

  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/films">Films</NavLink>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/films" element={<FilmsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );

};
