import React from 'react';
import contact from './contactCopy';
import './Contact.scss';

const Contact = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact">
      <div className="contact__container">
        <h2 className="contact__heading">{contact.title}</h2>
        <div className="contact__content">
          <div className="contact__map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.957688932435!2d-93.63583648722245!3d41.58314182310965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee98e20d13d7ed%3A0x63bf0d9d8a66cc0e!2sCrane%20Artist%20Lofts!5e0!3m2!1spl!2spl!4v1588509108733!5m2!1spl!2spl"
              title="map"
              width="100%"
              height="100%"
              className="contact__map"
            ></iframe>
          </div>
          <div className="contact__form-container">
            <h3 className="contact__form-heading">
              {contact.subtitle}
            </h3>
            <p className="contact__form-paragraph">{contact.par}</p>
            <form
              className="contact__form"
              onSubmit={(e) => handleSubmit(e)}
            >
              <label className="contact__form-label contact__form-label--small">
                First Name
                <input
                  type="text"
                  name="firstName"
                  className="contact__form-input"
                />
              </label>
              <label className="contact__form-label contact__form-label--small">
                Last Name
                <input
                  type="text"
                  name="lastName"
                  className="contact__form-input"
                />
              </label>
              <label className="contact__form-label">
                E-mail
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                />
              </label>
              <label className="contact__form-label">
                Subject
                <input
                  type="text"
                  name="subject"
                  className="contact__form-input"
                />
              </label>
              <label className="contact__form-label">
                Message
                <input
                  type="text"
                  name="message"
                  className="contact__form-input"
                />
              </label>
              <button
                type="submit"
                className="contact__form-submit-button"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
