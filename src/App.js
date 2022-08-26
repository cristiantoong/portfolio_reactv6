import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { useInView } from "react-intersection-observer";

//Pages
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const { ref: projectRef, inView: projectIsVisible } = useInView();
  const { ref: aboutRef, inView: aboutIsVisible } = useInView();

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" exact element={<ProjectPage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/contact" exact element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
