import React from "react";

const HowItWorks = () => {
  return (
    <div className="container">
      <div className="how-it-works-area">
        <h1 className="book-meeting-heading less-margin">How it Works?</h1>
        <p className="how-it-works-p">
          Discover how rapid can help you streamline onboarding, compliance, and
          payroll for your international team in just a few steps.
        </p>

        <div className="row to-center">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <CommonBox
              id="1"
              text="Find and Recruit your candidate from pakistan with setting up and entity."
            />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">
            <CommonBox
              id="2"
              text="We manage employment contracts and onboarding of your candidates."
              className="add-left-margin"
            />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">
            <CommonBox
              id="3"
              text="We handle payroll, benefits and tex compliance of your workforce."
            />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">
            <CommonBox
              id="4"
              text="We manage employment contracts and onboarding of your candidates."
              className="add-left-margin"
            />
          </div>
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
