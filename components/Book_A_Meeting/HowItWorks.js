import React from 'react';

const HowItWorks = ({ howItWorks }) => {
  return (
    <div className="container">
      <div className="how-it-works-area">
        <h1 className="book-meeting-heading less-margin">How it Works?</h1>
        <p className="how-it-works-p">
          Discover how rapid can help you streamline onboarding, compliance, and
          payroll for your international team in just a few steps.
        </p>

        <div className="row to-center">
          {howItWorks?.map((point) => (
            <div className="col-lg-6 col-md-6 col-sm-6" key={point?.id}>
              <CommonBox id={point?.id} text={point?.point} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CommonBox = (props) => {
  const { id, text, className } = props;
  return (
    <div className={`meeting-round-box ${className}`}>
      <h1 className="left-ids">{id}</h1>
      <h3 className="right-p">{text}</h3>
    </div>
  );
};

export default HowItWorks;
