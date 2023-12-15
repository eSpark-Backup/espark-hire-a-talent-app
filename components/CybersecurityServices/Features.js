import React from 'react';
import Image from 'next/image';

const Features = ({ title, para, items }) => {
  return (
    <>
      <div className="features-style-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2 className="text-center">{title}​</h2>
            <p className="text-center">{para}</p>
          </div>
          <div className="row justify-content-center">
            {items.map((eachCard, i) => (
              <div
                key={i}
                className="col-lg-4 col-sm-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <div className="single-features-card">
                  <div className="image">
                    <Image
                      src={eachCard.imageLink}
                      width={70}
                      height={70}
                      alt="HR consultant - human resource planning - HR service - HR solutions - HR recruitment - HR outsourcing – eSpark talent"
                    />
                  </div>
                  <h3 className="fw-semibold">{eachCard.title}</h3>
                  <p>{eachCard.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
