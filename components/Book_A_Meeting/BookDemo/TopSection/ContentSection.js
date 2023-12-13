import React from "react";

const ContentSection = ({ globalTeams }) => {
  return (
    <div className="top-content-area">
      <h1 className="top-heading">{globalTeams?.mainHeading}</h1>

      <div className="points-div">
        <p className="points-para">{globalTeams?.description}</p>

        <div className="demo-contents">
          {globalTeams?.points?.map((point) => (
            <div className="points" key={point.id}>
              <div className="">
                <div className="checked-icon">
                  <img src={point.icon} />
                </div>
              </div>

              <div className="points-div">
                <h6>{point.heading}</h6>
                <p>{point?.content}</p>
              </div>
            </div>
          ))}

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
