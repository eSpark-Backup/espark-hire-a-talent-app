import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GetStarted = (props) => {
  const { title, paragraph, text } = props;
  return (
    <>
      <div className="get-started-area bg-gradient-image pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div
                className="get-started-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <Image
                  src="/images/06.png"
                  alt="Outsourced Employee - Staff Outsourcing Solutions - Outsourced Staff - Global Employment Outsourcing - Employment Outsourcing Services – eSpark Talent"
                  className="pt-5"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 new-style">
              <div className="get-started-content pt-0">
                <h2 className="fw-semibold">{title}</h2>
                <p>{paragraph}</p>
                {text ? (
                  <Link
                    href="https://calendly.com/esparktalents/60min?month=2023-09"
                    className="default-btn style-two"
                    target="_blank"
                  >
                    <span className="ri-arrow-right-s-line"></span>
                    {text}
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
