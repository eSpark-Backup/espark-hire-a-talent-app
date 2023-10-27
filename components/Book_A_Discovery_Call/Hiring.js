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
      {/* <div className="Hiring-box">
        <div className="row my-2 mt-md-3 mb-md-0 justify-content-center align-items-center">
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 px-0 text-align-left">
            <div className="Hiring-number">
              <h1>{i + 1}</h1>
            </div>
          </div>
          <div className="col-xl-10 col-lg-8 col-md-7 col-sm-12 px-0">
            <div className="Hiring-text">
              <h1
                className="ml-auto"
                dangerouslySetInnerHTML={{ __html: eachCard.title }}
              />
            </div>
          </div>
        </div>
        <div className="Hiring-description">
          <p>{eachCard.description}</p>
        </div>
      </div> */}
    </>
  );
};

export default HiringTab;
