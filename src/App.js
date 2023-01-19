import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import About from './pages/about/About.js';
import Resume from './pages/resume/Resume.js';
import Contact from './pages/contact/Contact.js';
import Portfolio from './pages/portfolio/Portfolio.js';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/My-React-Portfolio" element={<About />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Resume" element={<Resume />} />
    </Routes>
    <Footer />
</BrowserRouter>
  );
}

export default App;
