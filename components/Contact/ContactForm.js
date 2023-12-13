import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import emailjs from '@emailjs/browser';
const MySwal = withReactContent(Swal);

import { configDotenv } from 'dotenv';

const userid = process.env.NEXT_PUBLIC_CONTECT_US_EMAILJS_USER_ID;
const templeteid = process.env.NEXT_PUBLIC_CONTECT_US_EMAILJS_TEMPLATE_ID;
const serviceid = process.env.NEXT_PUBLIC_CONTECT_US_EMAILJS_SERVICE_ID;

configDotenv();
const alertContent = () => {
  MySwal.fire({
    title: 'Congratulations!',
    text: 'Your message was successfully sent and will be back to you soon',
    icon: 'success',
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};
// Form initial state
const INITIAL_STATE = {
  name: '',
  email: '',
  number: '',
  subject: '',
  text: '',
};
const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    if (name === 'number') {
      // Phone number validation
      const phonePattern = /^[0-9]{11}$/; // Adjust this pattern as needed
      setIsValidPhoneNumber(phonePattern.test(value));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, number, subject, text } = contact;
    if (isValidPhoneNumber) {
      emailjs.init(userid);
      emailjs
        .send(serviceid, templeteid, {
          client_name: name,
          client_email: email,
          client_subject: subject,
          client_message: text,
          client_number: number,
          to_name: 'eSpark Talent',
        })
        .then(
          (result) => {
            alertContent();
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  return (
    <>
      <div className="contact-area ptb-100 bg-f9f9f9">
        <div className="container">
          <div className="contact-form">
            <div className="section-title">
              <h2>Get In Touch!</h2>
              <p>Contact us with your details & get ready to start with us</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      value={contact.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="@email.com"
                      value={contact.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Enter your subject"
                      value={contact.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>Phone *</label>
                    <input
                      type="text"
                      name="number"
                      className={`form-control ${
                        !isValidPhoneNumber ? 'is-invalid' : ''
                      }`}
                      value={contact.number}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                    {!isValidPhoneNumber && (
                      <div className="invalid-feedback">
                        Please enter a valid 11-digit phone number.
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea
                      name="text"
                      cols="30"
                      rows="6"
                      className="form-control"
                      placeholder="Your message..."
                      value={contact.text}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="default-btn">
                    <span className="ri-arrow-right-s-line"></span> Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactForm;
