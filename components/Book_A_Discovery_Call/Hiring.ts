import React from 'react';

const HiringTab = ({ data }) => {
  const { heading, description, items } = data;
  console.log(heading, 'ad');
  return (
    <>
      <div className="HiringTab Hiring-area">
        <div className="container-xl">
          <div className="section-title style-two">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-8 col-md-12 text-center">
                <h2>{heading}</h2>
                <p className="HiringTab-para">{description}</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {items?.map((eachCard, i) => (
              <div key={i} className="col-xl-5 col-lg-5 col-md-6 col-sm-6">
                <div className="Hiring-box">
                  <div>
                    <div className="hiring-box-header">
                      <div className="Hiring-number">
                        <h1>{i + 1}</h1>
                      </div>
                      <div className="Hiring-text">
                        <h1
                          className=""
                          dangerouslySetInnerHTML={{ __html: eachCard.title }}
                        />
                      </div>
                    </div>
                    <div className="Hiring-description">
                      <p>{eachCard.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HiringTab;
