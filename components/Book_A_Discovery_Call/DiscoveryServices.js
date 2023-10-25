import React from 'react';
import Link from 'next/link';

const DiscoveryServices = ({ title, para, items }) => {
  return (
    <>
      <div className="services-area ptb-70">
        <div className="container-xl">
          <div className="section-title">
            <h2 className="fw-semibold">{title}</h2>
            <p>{para}</p>
          </div>
          <div className="row justify-content-center">
            {items?.map((eachCard, i) => (
              <div
                key={i}
                className={
                  eachCard.homeComponent
                    ? 'col-lg-4 single-services-item with-boxshadow size-change'
                    : 'col-lg-4 single-services-item with-boxshadow'
                }
              >
                <div className="d-flex align-items-center">
                  <img
                    src={eachCard.imageLink}
                    alt="Global Recruitment - global recruitment agency - worldwide recruiting agency - global recruitment services - global recruitment solutions - eSpark Talent"
                  />
                  <h3>{eachCard.title}</h3>
                </div>
                <p>{eachCard.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoveryServices;
