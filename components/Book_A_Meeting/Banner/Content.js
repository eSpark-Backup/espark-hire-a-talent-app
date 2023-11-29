import React from "react";

import StarRating from "../StarRating";

const Content = () => {
  return (
    <div className="meeting-banner-content">
      <h1 className="content-heading">
        Grow Smarter, Not Harder Scale your Business Seamlessly
      </h1>

      <p className="content-detail">
        Choose eSpark Talent and take your scale-up to new heights with our
        scalable Employer of Record Solution.
      </p>

      <div className="our-ratings row">
        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="ratings-in">
            <StarRating stars={4.5} />
            <p className="ratings-by">Google</p>
            <p className="our-rank">4.5 Star Rating</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="ratings-in">
            <StarRating stars={4.7} />
            <p className="ratings-by trustpilot">Trustpilot</p>
            <p className="our-rank">4.7 Star Rating</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="ratings-in">
            <StarRating stars={4.7} />
            <p className="ratings-by">Clutch</p>
            <p className="our-rank">4.7 Star Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
