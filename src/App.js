import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Resume from './components/Resume/Resume.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import { BrowserRouter as Routes, Route,} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Resume" element={<Resume />} />
    </Routes>
    <Footer />
</BrowserRouter>
  );
}

export default App;
