import React from 'react';

const HeroSection = () => {
  return (
    <div className="partners-title-area">
      <div className="container">
        <div className="row">
          {/* <div className="partners-titile-body"> */}
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="partners-body-contained">
              <h1>Make Introductions, Earn Commissions</h1>
              <p>
                Our partners have earned over $1000 by simply making
                introductions to our team.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-5 col-lg-5">
            <div className="partners-body-image">
              <img
                src="/images/partners/map.svg"
                alt="map_img"
                width={'100%'}
                height={'100%'}
              />
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
