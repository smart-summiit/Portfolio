
import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css'; // تأكد من أنك أنشأت هذا الملف ووضعت فيه الأكواد أدناه

function Footer({ isArabic, isDark }) {
  const t = (en, ar) => (isArabic ? ar : en);
  const dir = isArabic ? 'rtl' : 'ltr';

  return (
    <footer
      className={`pt-5 pb-3 ${isDark ? "bg-dark text-white" : "bg-light"}`}
      dir={dir}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="container footer-content"
      >
        <div className="row">
          {/* القائمة الأساسية */}
          <div className="col-6 col-md-3 mb-4">
            <h5>{t('Quick Links', 'روابط سريعة')}</h5>
            <ul className="nav flex-column">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, idx) => (
                <li className="nav-item mb-2" key={idx}>
                  <a
                    href="#"
                    className="nav-link p-0 footer-link"
                    style={{ color: isDark ? '#ccc' : '#333' }}
                  >
                    {t(item, translateMenuItem(item))}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* وصف الشركة */}
          <div className="col-md-5 mb-4">
            <h5>{t('About Smart Summit', 'عن Smart Summit')}</h5>
            <p>
              {t(
                'Smart Summit is a leading tech company offering cutting-edge software solutions that drive success and innovation for businesses worldwide.',
                'Smart Summit هي شركة تقنية رائدة تقدم حلول برمجية مبتكرة تدفع النجاح والابتكار للشركات حول العالم.'
              )}
            </p>
            <p>
              {t(
                'We believe in delivering quality, creativity, and long-term value to our clients.',
                'نحن نؤمن بتقديم الجودة والإبداع والقيمة طويلة الأمد لعملائنا.'
              )}
            </p>
          </div>

          {/* نموذج الاشتراك */}
          <div className="col-md-4 mb-4">
            <form>
              <h5>{t('Subscribe to our newsletter', 'اشترك في النشرة البريدية')}</h5>
              <p>{t("Monthly digest of what's new and exciting from us.", 'ملخص شهري لما هو جديد لدينا.')}</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  {t('Email address', 'البريد الإلكتروني')}
                </label>
                <input
                  id="newsletter1"
                  type="email"
                  className="form-control"
                  placeholder={t('Email address', 'البريد الإلكتروني')}
                  required
                />
                <button
                  className="btn footer-btn"
                  type="submit"
                  style={{
                    backgroundColor: isDark ? 'var(--second-color)' : 'var(--primary-color)',
                    color: isDark ? '#000' : '#fff',
                    fontWeight: 'bold',
                  }}
                >
                  {t('Subscribe', 'اشترك')}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* الحقوق والأيقونات */}
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 mt-4 border-top">
          <p className="mb-0">
            {t('© 2025 Smart Summit. All rights reserved.', '© 2025 Smart Summit. جميع الحقوق محفوظة.')}
          </p>

<ul className="list-unstyled d-flex mt-3 mt-sm-0">
  {/* Instagram */}
  <li className="ms-3">
    <a className="text-decoration-none" href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <svg width="24" height="24" fill={isDark ? '#ccc' : '#000'} viewBox="0 0 24 24">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1..." />
        <path d="M12 5.8a6.2 6.2 0 1 0..." />
      </svg>
    </a>
  </li>

  {/* Facebook */}
  <li className="ms-3">
    <a className="text-decoration-none" href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <svg width="24" height="24" fill={isDark ? '#ccc' : '#000'} viewBox="0 0 24 24">
        <path d="M22 12a10 10 0 1 0-11.6..." />
      </svg>
    </a>
  </li>

  {/* TikTok */}
  <li className="ms-3">
    <a className="text-decoration-none" href="https://www.tiktok.com/@smartsummiit?_t=ZS-8wsaZOBwPvr&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
      <svg width="24" height="24" fill={isDark ? '#ccc' : '#000'} viewBox="0 0 48 48">
        <path d="M41.6 15.5v4.3c-2.5 0-5-0.7..." />
      </svg>
    </a>
  </li>

  {/* YouTube */}
  <li className="ms-3">
    <a className="text-decoration-none" href="https://youtube.com/@smartsummiit?si=Pjy3928_VPm6Un7D" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
      <svg width="24" height="24" fill={isDark ? '#ccc' : '#000'} viewBox="0 0 24 24">
        <path d="M19.6 3H4.4C3.1 3 2 4.1 2 5.4v13.2C2 19.9 3.1 21 4.4 21h15.2c1.3 0 2.4-1.1 2.4-2.4V5.4C22 4.1 20.9 3 19.6 3zM10 15.5v-7l6 3.5-6 3.5z" />
      </svg>
    </a>
  </li>
</ul>

        </div>
      </motion.div>
    </footer>
  );

  function translateMenuItem(item) {
    const translations = {
      Home: 'الرئيسية',
      About: 'من نحن',
      Services: 'خدماتنا',
      Portfolio: 'أعمالنا',
      Contact: 'اتصل بنا',
    };
    return translations[item] || item;
  }
}

export default Footer;
