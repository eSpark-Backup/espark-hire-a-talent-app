import React from 'react';

const HiringTab = ({ data }) => {
  const { heading, description, items } = data;
  console.log(heading, 'ad');
  return (
    <>
      <div className="HiringTab Hiring-area pb-70">
        <div className="container-xl">
          <div className="section-title style-two">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-8 col-md-12 text-center">
                <h2>{heading}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center gap-lg-3">
            {items?.map((eachCard, i) => (
              <div
                key={i}
                className="col-xl-5 col-lg-5 col-md-6 col-sm-6 justify-content-center d-flex"
              >
                <div className="Hiring-box">
                  <div className="row my-2 mt-md-3 mb-md-0 justify-content-center align-items-center">
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                      <div className="Hiring-number">
                        <h1>{i + 1}</h1>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12">
                      <div className="Hiring-text">
                        <h1 className="ml-auto">{eachCard.title}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="Hiring-description">
                    <p>{eachCard.description}</p>
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
