import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaInfoCircle } from 'react-icons/fa';
import aboutImg from '../image/image.png';

const About = ({ isArabic, isDark }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [activeTab, setActiveTab] = useState('vision');

  const tabs = {
    vision: {
      en: `(Smart Summit) Website Development and App Design 📱
Our company develops websites and designs mobile applications with the highest standards of quality, ease of use, and security.

Since technology has become an integral part of our lives, it's a parallel universe to our own. We must keep up with it by all means.

As you know, competition is fierce and options are plentiful. Either rise to the challenge or settle for what you have until you lose your footing.

We offer:
✔ Website Development
✔ App Design and Development
✔ Professional Solutions for All Fields.`,
      ar: `(Smart Summit ) لتطوير موقع الويب و تصميم التطبيقات 📱
شركتنا تعمل على تطوير مواقع الويب وتصميم تطبيقات الهاتف الجوال بأعلى معايير الجودة وسهولة في الاستخدام والأمان.
نظرًا لأن التكنولوجيا أصبحت شيئًا مهمًا في حياتنا، بل هي عالم موازٍ لعالمنا، فعلينا مجاراتها بكل الوسائل.

كما تعلم، أصبحت المنافسة قوية والخيارات متاحة، فإما أن تكون على قدر التحدي أو تكتفي بما وصلت إليه حتى تفقد صلاحيتك.

نقدم:
✔ تطوير مواقع Web
✔ تصميم وتطوير التطبيقات
✔ حلول احترافية لجميع المجالات
`,
    },
    
  };

  const currentContent = tabs[activeTab][isArabic ? 'ar' : 'en'];

  return (
    <section
      id="about"
      className={`py-5 ${isDark ? 'bg-dark text-white' : 'bg-light text-dark'}`}
    >
      <div className="container">
        <div className={`row align-items-center ${isArabic ? 'flex-row-reverse' : ''}`}>
          {/* النص */}
          <div className="col-md-6" data-aos="fade-up">
            <h2
              className="mb-4 d-flex align-items-center gap-2"
              style={{ color:'var(--second-color)'  }}
              data-aos="fade-down"
            >
              <FaInfoCircle size={28} />
              {isArabic ? 'من نحن' : 'About Us'}
            </h2>
    {/* المحتوى */}
            <p
              style={{
                textAlign: isArabic ? 'right' : 'left',
                direction: isArabic ? 'rtl' : 'ltr',
                whiteSpace: 'pre-line',
                 // لون النص أبيض في الداكن
              }}
              className='bbbbbfff'
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {currentContent}
            </p>
          </div>

          {/* الصورة */}
          <div className="col-md-6 text-center" data-aos="zoom-in">
            <img
              src={aboutImg}
              alt="About Us"
              className="img-fluid rounded shadow about-img"
              style={{
                maxHeight: '400px',
                transition: 'transform 0.3s ease-in-out',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

