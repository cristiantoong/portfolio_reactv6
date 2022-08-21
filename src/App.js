import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import GlobalStyle from "./globalStyles";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";


//Pages
import Home from './pages/Home';
import ProjectPage from "./pages/ProjectPage";


function App() {
  
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
