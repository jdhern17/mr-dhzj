import React from "react";

// imports DOM bindings for React Router for route-based code splitting
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="container-fluid">
        <Sidebar/>
        <Routes>          
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path=":linkId" element={<MainContent/>} />
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
