import React, { useEffect } from "react";
import { FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = ({ isArabic, isDark }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      icon: <FaLaptopCode />,
      title: { en: "Web Development", ar: "تطوير الويب" },
      desc: {
        en: "Responsive and scalable websites built with modern technologies.",
        ar: "مواقع متجاوبة وقابلة للتطوير باستخدام تقنيات حديثة.",
      },
    },
    {
      icon: <FaMobileAlt />,
      title: { en: "Mobile Apps", ar: "تطبيقات الجوال" },
      desc: {
        en: "iOS & Android apps tailored to your business goals.",
        ar: "تطبيقات iOS و Android مصممة خصيصًا لأهدافك.",
      },
    },
    {
      icon: <FaPalette />,
      title: { en: "UI/UX Design", ar: "تصميم واجهات المستخدم" },
      desc: {
        en: "Clean and user-friendly interfaces that engage your customers.",
        ar: "واجهات نظيفة وسهلة الاستخدام تجذب عملاءك.",
      },
    },
  ];

  return (
    <section
      id="services"
      className={`py-5 ${isDark ? "bg-dark text-white" : "bg-light"}`}
      style={{ fontFamily: "'Poppins', 'Cairo', sans-serif" }}
    >
      <div className="container text-center">
        <h2
          className="mb-5 fw-semibold"
          style={{ color: 'var(--second-color)'  }}
        >
          {isArabic ? "خدماتنا" : "Our Services"}
        </h2>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index} data-aos="fade-up">
              <div
                className={`p-4 rounded-4 h-100 ${
                  isDark ? "bg-secondary text-white" : "bg-white"
                } shadow-sm service-card`}
                style={{
                  transition: "0.3s ease-in-out",
                  cursor: "pointer",
                }}
              >
                <div
  className="mb-3"
  style={{ fontSize: "2rem", color: isDark ? "#64b5f6" : 'var(--primary-color)' }}
>
  {service.icon}
</div>

                <h4
                  className="mb-2 "
                  style={{ color: isDark ? 'var(--second-color)' : 'var(--primary-color)' }}
                >
                  {isArabic ? service.title.ar : service.title.en}
                </h4>
                <p>{isArabic ? service.desc.ar : service.desc.en}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
