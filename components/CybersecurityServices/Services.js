import React from "react";
import Link from "next/link";

const Services = ({ ServicesPara, ServicesTitle, cardsItems }) => {
  return (
    <>
      <div className="cyber-security-services-area ptb-100">
        <div className="container">
          <div className="section-title with-max-width">
            <h2 className="fw-semibold">{ServicesTitle}</h2>
            <p>{ServicesPara}</p>
          </div>
          <div className="row justify-content-center">
            {cardsItems.map((eachCard, i) => (
              <div className="col-lg-6 col-md-12" key={i}>
                <div className="cyber-security-services-card">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                      <div className="services-image">
                        <img
                          src={eachCard.imageLink}
                          alt="HR consultant - human resource planning - HR service - HR solutions - HR recruitment - HR outsourcing – eSpark talent"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="services-content">
                        <h3>
                          <Link href="/service-details">
                            {eachCard.heading}
                          </Link>
                        </h3>
                        <p>{eachCard.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cyber-security-services-shape">
          <img
            src="/images/cybersecurity-services/services/shape.png"
            alt="HR consultant - human resource planning - HR service - HR solutions - HR recruitment - HR outsourcing – eSpark talent"
          />
        </div>
      </div>
    </>
  );
};

export default Services;
