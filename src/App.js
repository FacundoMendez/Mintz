
import './App.css';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import { useEffect } from 'react';
import Preload from './components/preload/Preload';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/home/about/about';
import Contact from './components/home/contact/Contact';
import Technologys from './components/home/Technologys/Technologys';
import ServicesSection from './components/sections/ServicesSection/ServicesSection';
import ConctactSection from './components/sections/ConctactSection/ConctactSection';
import AboutSection from './components/sections/AboutSection/AboutSection';

function App() {

  
  useEffect(() => {

  },[])

  return (
    <BrowserRouter>
     <Preload/>
     <Nav/>
      <Routes>  
        <Route exact path="/About" element={<AboutSection />} />
        <Route exact path="/Services " element={<ServicesSection />} />
        <Route exact path="/Contact" element={<ConctactSection />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
/*     <div className="App">
      <Preload/>
      <Nav/>
      <Home/>
    </div> */
  );
}

export default App;
