import React from "react";

const ContactSection = () => {
  return (
    <div className="contact section">
      <div className="text-center">
        <h2 className="section-heading display-3 text-secondary">Contact</h2>
        <h6 className="section-subheading fs-m fw-300 mb-5">
          ご連絡はこちらから
        </h6>
        <div className="contact-text">
          <p className="fs-s">
            ご連絡はメールにてお願いいたします。</p>
          <div className="d-flex justify-content-center">
            <p className="fs-s text-secondary">email：</p>
            <a className="fs-s text-secondary" href="mailto:address">
              shato.min0716@gmail.com
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <a
            href="https://twitter.com/Minori_Takeuchi"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="contact-icon"
              src="./twitter.svg"
              alt="Twitter"
            />
          </a>
          <a
            href="https://github.com/Minori-Takeuchi"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="contact-icon"
              src="./github.svg"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
