// App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhatsAppPhoneFloat from './components/WhatsAppPhoneFloat';



function App() {
  const [isArabic, setIsArabic] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.lang = isArabic ? 'ar' : 'en';
    document.getElementById('root').dir = isArabic ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = isArabic ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    });

    document.body.classList.toggle("arabic", isArabic);
    document.body.classList.toggle("english", !isArabic);
  }, [isArabic]);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark);
  }, [isDark]);

  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  const toggleLanguage = () => setIsArabic(!isArabic);
  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <div className="bg-light" id="page">
      <Navbar toggleLanguage={toggleLanguage} toggleDarkMode={toggleDarkMode} isArabic={isArabic} isDark={isDark} />
      <Hero isArabic={isArabic} isDark={isDark}/>
      <About isArabic={isArabic} isDark={isDark} />
      <Services isArabic={isArabic} isDark={isDark} />
      <Portfolio isArabic={isArabic} isDark={isDark} />
      <Contact isArabic={isArabic} isDark={isDark}/>
      <Footer isArabic={isArabic} isDark={isDark} />
            <WhatsAppPhoneFloat isDark={isDark} />

    </div>
  );
}

export default App;
