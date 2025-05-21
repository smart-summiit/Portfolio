import React from 'react';

const Hero = ({ isArabic, isDark }) => {
  const t = (en, ar) => (isArabic ? ar : en);

  const slides = [
    {
      titleEn: "We Build Digital Solutions",
      titleAr: "نُنشئ حلولاً رقمية",
      descEn: "Custom websites, apps, and systems tailored for your success.",
      descAr: "مواقع إلكترونية وتطبيقات وأنظمة مخصصة لنجاحك.",
    },
    {
      titleEn: "We Build Digital Solutions",
      titleAr: "نُنشئ حلولاً رقمية",
      descEn: "A company specialized in developing websites and designing mobile applications with high quality and professionalism, backed by extensive experience, to elevate your ideas to digital reality.",
      descAr: "شركة متخصصة في تطوير مواقع الويب وتصميم تطبيقات الهواتف المحمولة بجودة عالية، واحترافية مدعومة بخبرة طويلة لنرتقي بأفكارك إلى الواقع الرقمي.",
    },
    {
      titleEn: "We Build Digital Solutions",
      titleAr: "نُنشئ حلولاً رقمية",
      descEn: "Towards a future where digital ideas are crafted professionally we innovate in website development and smartphone app design, and we create integrated digital solutions to global standards, supported by deep expertise and an unquenchable passion for excellence.",
      descAr: "نحو مستقبل تُصنع فيه الأفكار الرقمية باحتراف  نُبدع في تطوير مواقع الويب وتصميم تطبيقات الهواتف الذكية، ونصنع حلولًا رقمية متكاملة بمعايير عالمية، مدعومة بخبرة عميقة وشغف لا يهدأ للتميّز.",
    },
  ];

  return (
    <section
      id="home"
      className="py-5 carousel slide text-white"
      style={{ backgroundColor: 'var(--primary-color)', height: "90vh" }}
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#home"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
            aria-current={i === 0 ? "true" : undefined}
            aria-label={`Slide ${i + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`carousel-item ${i === 0 ? "active" : ""}`}
            style={{ background: 'var(--primary-color)' }}
          >
            <div className="container text-center d-flex flex-column justify-content-around align-items-center" style={{ height: "80vh" , width:'80%'}}>
              <div className="typing-wrapper">
                <h1 className="display-5 typing text-center" >
                  {t(slide.titleEn, slide.titleAr)}
                </h1>
              </div>
              <p className="lead  mb-4"  style={{color:"#fff", fontSize:'32px'}}>
                {t(slide.descEn, slide.descAr)}
              </p>
              <a
                href="#contact"
                className="btn btn-light btn-lg"
              >
                {t("Contact Us", "تواصل معنا")}
              </a>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#home"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">{t("Previous", "السابق")}</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#home"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">{t("Next", "التالي")}</span>
      </button>
    </section>
  );
};

export default Hero;
