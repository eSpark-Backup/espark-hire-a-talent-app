import React from 'react';

const Features = ({ featuresTitle, featuresPara, cardsItems }) => {
  return (
    <>
      <div className="features-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>{featuresTitle}</h2>
            <p>{featuresPara}</p>
          </div>
          <div className="row justify-content-center">
            {cardsItems.map((eachCard, i) => (
              <div
                key={i}
                className="col-lg-4 col-sm-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="single-features-box">
                  <div className="icon">
                    <img src={eachCard.imageLink} alt="image" />
                  </div>
                  <h3>{eachCard.title}</h3>
                  <p>{eachCard.content} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
