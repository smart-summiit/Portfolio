// src/components/Contact.js
import React from 'react';

function Contact({ isArabic, isDark }) {
  const t = (en, ar) => (isArabic ? ar : en);

  return (
    <section id="contact" className={`py-5 ${isDark ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <div className="container text-center">
        <h2 className="mb-4" style={{ color: 'var(--second-color)' }}>
          {t("Contact Us", "اتصل بنا")}
        </h2>
        <p className='section-subtitle'>{t("Are you ready to transform your business operations? Contact our team to schedule a demo or learn more about our solutions.", "هل أنت مستعد لتطوير عمليات شركتك؟ تواصل مع فريقنا لحجز عرض توضيحي أو لمعرفة المزيد عن حلولنا!")}</p>

        <form
          className="mx-auto mt-4"
          style={{ maxWidth: '500px' }}
          action="https://formspree.io/f/xyznklrp" // ← غيّر هذا إلى رابطك الخاص
          method="POST"
        >
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className={`form-control `}
              placeholder={t("Name", "الاسم")}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className={`form-control `}
              placeholder={t("Email", "البريد الإلكتروني")}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              rows="4"
              className={`form-control `}
              placeholder={t("Message", "رسالتك")}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: isDark ? 'var(--second-color)' : 'var(--primary-color)',
              color: isDark ? '#000' : '#fff',
              fontWeight: 'bold',
            }}
          >
            {t("Send Message", "أرسل الرسالة")}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
