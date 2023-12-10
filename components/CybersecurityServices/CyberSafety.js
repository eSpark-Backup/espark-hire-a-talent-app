import React from 'react';
import Image from 'next/image';

const CyberSafety = ({ title, para }) => {
  return (
    <>
      <div className="cyber-safety-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="cyber-safety-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <Image
                  src="/images/cybersecurity-services/10.png"
                  alt="HR consultant - human resource planning - HR service - HR solutions - HR recruitment - HR outsourcing – eSpark talent"
                  width={'90%'}
                  height={'90%'}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cyber-safety-content">
                <h2 className="fw-semibold">{title}</h2>
                <p>{para}</p>

                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <ul className="safety-list">
                      <li>
                        <i className="ri-checkbox-circle-line"></i>24/7 Active
                        Human Resource Assistance.
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i>Rapid
                        Customer Service.
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i>Open to
                        Confirm All Queries
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <ul className="safety-list">
                      <li>
                        <i className="ri-checkbox-circle-line"></i>
                        Cost-Efficient Hiring Services.{' '}
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i>Full-Time
                        Support of Proven Professionals.
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i>On-Time HR
                        Managing Support.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CyberSafety;
