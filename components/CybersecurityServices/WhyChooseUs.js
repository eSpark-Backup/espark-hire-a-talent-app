import React from 'react';
import Image from 'next/image';
// AiOutlineCheck
import { AiOutlineCheck } from 'react-icons/ai';

const WhyChooseUs = ({ title, para, items }) => {
  return (
    <>
      <div className="why-choose-us-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
                <h2 className="fw-semibold">{title}</h2>
                <p>{para}</p>

                <ul className="list">
                  {items.map((eachItem, i) => (
                    <li key={i}>
                      <AiOutlineCheck />
                      &nbsp; {eachItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="why-choose-us-image"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <Image
                  src="/images/cybersecurity-services/choose/09.png"
                  alt="HR consultant - human resource planning - HR service - HR solutions - HR recruitment - HR outsourcing – eSpark talent"
                  width={'100%'}
                  height={'90%'}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="why-choose-us-shape">
          <Image
            src="/images/cybersecurity-services/choose/shape.png"
            alt="HR consultant - human resource planning - HR service - HR solutions - HR recruitment - HR outsourcing – eSpark talent"
          />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
