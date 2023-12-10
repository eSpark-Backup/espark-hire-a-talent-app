import React from 'react';
import Image from 'next/image';

const WhatWeWork = ({ paragraph, Items, title, image, shape }) => {
  return (
    <>
      <div className={'what-we-work-area ptb-100'}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 text-center">
              <div
                className={'what-we-work-image'}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <Image
                  src={image}
                  width={'500px'}
                  height={'500px'}
                  alt="Outsourced Employee - Staff Outsourcing Solutions - Outsourced Staff - Global Employment Outsourcing - Employment Outsourcing Services – eSpark Talent"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="what-we-work-content">
                <h2>{title}</h2>
                <p className="my-4">{paragraph}</p>
                {Items?.map((eachItems, i) => (
                  <div className="we-work-inner-box" key={i}>
                    <div className="image">
                      <Image
                        src={eachItems.icon}
                        alt="Outsourced Employee - Staff Outsourcing Solutions - Outsourced Staff - Global Employment Outsourcing - Employment Outsourcing Services – eSpark Talent"
                      />
                    </div>
                    <h3>{eachItems.title}</h3>
                    <p>{eachItems.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="what-we-work-shape">
          <Image
            src={shape}
            alt="Outsourced Employee - Staff Outsourcing Solutions - Outsourced Staff - Global Employment Outsourcing - Employment Outsourcing Services – eSpark Talent"
          />
        </div>
      </div>
    </>
  );
};

export default WhatWeWork;
