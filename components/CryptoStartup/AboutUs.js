import React from 'react';
import Link from 'next/link';

const AboutUs = ({ title, paragraph, data, image }) => {
  return (
    <>
      <div className="about-area ptb-100 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="cryptocurrency-about-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img
                  src={image}
                  alt="Hire app developer - Freelance mobile app developer - Hire dedicated mobile app developers - Hire cross platform app developer - Hire a mobile app developer – eSpark Talent"
                  width={'600px'}
                  height={'600px'}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="cryptocurrency-about-content"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <h2>{title}</h2>
                <p>{paragraph}</p>
                {data?.map((items, i) => (
                  <ul className="about-list" key={i}>
                    <li>
                      <i className="ri-check-fill"></i> {items}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
