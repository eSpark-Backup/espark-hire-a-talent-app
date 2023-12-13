import React from 'react';

const HeroSection = ({ title, description, image, alt }) => {
  return (
    <div className="partners-title-area">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="partners-body-content">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-5 col-lg-5">
            <div className="partners-body-image">
              <img src={image} alt={alt} width={'100%'} height={'100%'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
