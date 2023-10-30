import React from 'react';
const OurProcess = ({ data }) => {
  const { subHeading, description, image, Item } = data;
  return (
    <div className=" OurProcess our-process-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 mx-auto">
            <div
              className="our-process-image"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <img src={image} alt="image" />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 mx-auto mx-lg-0">
            <div
              className="our-process-content"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <h1>
                {subHeading}
                {subHeading ? <span className="dot">.</span> : null}
              </h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="row my-lg-3">
          {Item?.map((eachCard, i) => (
            <div
              key={i}
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="our-process-box">
                <hr
                  className={`our-process-box-hr ${eachCard?.hrStatus}`}
                  style={{
                    width: '100%',
                    height: '100px',
                    position: 'absolute',
                    top: 32,
                    borderTop: '2px solid #029894',
                    borderStyle: 'dashed',
                  }}
                />
                <div className="icon">
                  <img src={eachCard?.icon} alt="image" />
                </div>
                <h3>{eachCard?.heading}</h3>
                <p>{eachCard?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
