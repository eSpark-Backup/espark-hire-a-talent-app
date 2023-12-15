import React from "react";

const LetsTalk = () => {
  return (
    <div className="last-section-area">
      <div className="meeting-last-section container">
        <h1 className="last-section-heading">
          Don’t Miss Out The Opportunity To Hire Tech Professionals in Minutes
        </h1>

        <button
          className="meeting-button"
          onClick={() =>
            window.open(
              "https://calendly.com/esparktalents/60min?month=2023-09",
              "_blank"
            )
          }
        >
          Let’s Talk
        </button>
      </div>
    </div>
  );
};

export default LetsTalk;
