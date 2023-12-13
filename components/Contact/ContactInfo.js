import React from 'react';

const ContactInfo = ({ data }) => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {data?.map((contactData, i) => (
              <div className="col-lg-3 col-sm-6 col-md-6" key={i}>
                <div className="single-contact-info-box text-center">
                  <div className="icon">
                    <i className={contactData.icon}></i>
                  </div>
                  <h3>{contactData.heading}</h3>
                  <p>
                    {contactData.paragraph} <br />
                    {contactData.item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
