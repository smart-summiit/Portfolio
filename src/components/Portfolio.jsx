import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import imegE_c from '../image/E-Com.png';
import imegApp from '../image/Appimg.jpg';
import imgDashborad from '../image/Dashboard.png';

function Portfolio({ isArabic, isDark }) {
    const [selectedImage, setSelectedImage] = useState(null);

  const t = (en, ar) => (isArabic ? ar : en);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      title: t("E-Commerce Website", "موقع تجارة إلكترونية"),
      description: t("A modern responsive shop for online sales.", "متجر عصري متجاوب للبيع عبر الإنترنت."),
      image: imegE_c,
    },
    {
      title: t("Real Estate App", "تطبيق عقاري"),
      description: t("Mobile application for managing a restaurant and ordering meals.", "تطبيق جوال لادارة مطعم وطلب وجبات."),
      image: imegApp,
    },
    {
      title: t("Company Dashboard", "لوحة تحكم شركة"),
      description: t("Management system to operate a cashier and display the report.", "نظام ادارة لتشغيل كاشير واظهار التقرير."),
      image: imgDashborad,
    },
  ];

 return (
    <section
      id="portfolio"
      className={`py-5 ${isDark ? 'bg-dark text-white' : 'bg-light text-dark'}`}
    >
      <div className="container text-center">
        <h2 className="mb-4" style={{ color:'var(--second-color)' }}>
          {t("Our Portfolio", "أعمالنا")}
        </h2>
        <p>{t("Here are some of the projects we’ve delivered to our happy clients.", "بعض من مشاريعنا التي نفذناها لعملائنا.")}</p>
        
        <div className="row g-4 mt-4">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <div className={`card shadow-sm`} style={{ height: '60vh' }}>
                <div 
                  style={{ width: '100%', height: '100%', overflow: 'hidden', cursor: 'pointer' }}
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img
                    src={project.image}
                    className="card-img-top w-100 h-100"
                    alt={project.title}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: 'var(--second-color)' }}>
                    {project.title}
                  </h5>
                  <p className="card-text" style={{ color: isDark ? '#fff' : '' }}>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* نافذة تكبير الصورة */}
        {/* {sel
         */}
      </div>
    </section>
  );
}

export default Portfolio;