import React, { useState, useEffect, useRef } from "react";
import { Collapse } from "bootstrap";
import imagedark from '../image/ChatGPT_Image_May_17__2025__01_21_08_PM-removebg-preview.png';
import image from '../image/logo_transparent.png';

const Navbar = ({ isArabic, toggleLanguage, toggleDarkMode, isDark }) => {
  const [activeSection, setActiveSection] = useState("home");
  const collapseRef = useRef(null);

  const navItems = [
    { id: "home", en: "Home", ar: "الرئيسية" },
    { id: "about", en: "About", ar: "من نحن" },
    { id: "services", en: "Services", ar: "خدماتنا" },
    { id: "portfolio", en: "Portfolio", ar: "أعمالنا" },
    { id: "contact", en: "Contact", ar: "اتصل بنا" },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    if (collapseRef.current && collapseRef.current.classList.contains("show")) {
      const bsCollapse = Collapse.getInstance(collapseRef.current) || new Collapse(collapseRef.current, { toggle: false });
      bsCollapse.hide();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        collapseRef.current &&
        !collapseRef.current.contains(event.target) &&
        collapseRef.current.classList.contains("show")
      ) {
        const bsCollapse = Collapse.getInstance(collapseRef.current) || new Collapse(collapseRef.current, { toggle: false });
        bsCollapse.hide();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top navbardarkmode">
      <div className="container-fluid">
        {/* Logo and Brand */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img
            src={image}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top"
            style={{ borderRadius: '50px',backgroundColor:`${isDark ? "transparent" : "#2a2a2a"}` }}
          />
          <span className="fw-bold" style={{ color: isDark ? "#ffff":'var(--primary-color)' }}>
            SmartSummit
          </span>
        </a>

        {/* Mobile toggle button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{backgroundColor: isDark? '#f0f0f0':''}}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse menu */}
        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
          {/* Close button (only on mobile) */}
          <button
            className="btn btn-close d-lg-none ms-auto mb-3"
            aria-label="Close"
            onClick={() => {
              const navbarCollapse = collapseRef.current;
              if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = Collapse.getInstance(navbarCollapse) || new Collapse(navbarCollapse, { toggle: false });
                bsCollapse.hide();
              }
            }}
            style={{backgroundColor: isDark? '#f0f0f0':''}}
          ></button>

          {/* Navigation items */}
          <ul className="w-100 navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
            {navItems.map(({ id, en, ar }) => (
              <li className="nav-item" key={id}>
                <a
                  className={`nav-link text-center ${activeSection === id ? "active" : ""}`}
                  href={`#${id}`}
                  onClick={() => handleNavClick(id)}
                >
                  {isArabic ? ar : en}
                </a>
              </li>
            ))}
          </ul>

          {/* Language and Theme toggles */}
          <div className="d-flex gap-2">
            <button onClick={toggleLanguage} className="btn btn-sm btn-primary" style={{ backgroundColor: 'var(--primary-color)' }}>
              {isArabic ? "EN" : "AR"}
            </button>
            {/* <button onClick={toggleDarkMode} className="btn btn-sm btn-outline-secondary">🌙</button> */}
            {/* <button onClick={toggleDarkMode} className="btn btn-sm btn-outline-secondary">{isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}</button> */}
            <button onClick={toggleDarkMode} className="btn btn-sm btn-outline-secondary">{isDark ? '☀️' : '🌙'}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
