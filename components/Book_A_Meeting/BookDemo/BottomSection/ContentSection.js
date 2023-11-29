import React from "react";

const ContentSection = () => {
  return (
    <div className="bottom-content-area">
      <h1 className="bottom-heading">Scale your Business Seamlessly</h1>

      <div className="points-div">
        <p className="points-para">
          Manage your whole workforce with eSpark Talent, tailored to every
          country and employee.
        </p>

        <div className="demo-contents">
          <div className="points">
            <div className="">
              <div className="checked-icon">
                <img src="/images/book-a-meeting/icons/checked.png" />
              </div>
            </div>

            <div className="points-div">
              <h6>Lightning-Fast Onboarding</h6>
              <p>
                eSpark Talent streamlined onboarding process gets your new hires
                up and running in record time, ensuring they hit the ground
                running on day one!
              </p>
            </div>
          </div>

          <div className="points">
            <div className="">
              <div className="checked-icon">
                <img src="/images/book-a-meeting/icons/checked.png" />
              </div>
            </div>

            <div className="points-div">
              <h6>Global Service, Local Touch</h6>
              <p>
                We are not just another faceless service provider. eSpark talent
                combines a global service approach with local expertise,
              </p>
            </div>
          </div>

          <div className="points">
            <div className="">
              <div className="checked-icon">
                <img src="/images/book-a-meeting/icons/checked.png" />
              </div>
            </div>

            <div className="points-div">
              <h6>Unbeatable Cost Efficiency</h6>
              <p>
                Forget about hidden fees and surprise expenses. eSpark offers
                transparent pricing and unbeatable value for your money.
              </p>
            </div>
          </div>

          <button
            className="book-demo-second"
            onClick={() =>
              window.open(
                "https://calendly.com/esparktalents/60min?month=2023-09",
                "_blank"
              )
            }
          >
            Book a demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
