import React from "react";

const ContentSection = () => {
  return (
    <div className="top-content-area">
      <h1 className="top-heading">
        Grow global teams in minutes, with eSpark talent
      </h1>

      <div className="points-div">
        <p className="points-para">
          Employ, onboard, pay and manage the best global talent - without
          leaving your zip code.
        </p>

        <div className="demo-contents">
          <div className="points">
            <div className="">
              <div className="checked-icon">
                <img src="/images/book-a-meeting/icons/checked.png" />
              </div>
            </div>

            <div className="points-div">
              <h6>Legally Sound Contracts</h6>
              <p>
                Our contracts are tailored to meet local compliance standards.
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
              <h6>Payroll Compliance Simplified</h6>
              <p>
                Experience the freedom, accuracy, and efficiency that we deliver
                when it comes to running payroll.
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
              <h6>Best-in-Class Benefits</h6>
              <p>
                Ensure the well-being of your employees and attract best talents
                by offering curated & customized benefits that’s best in class.
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
