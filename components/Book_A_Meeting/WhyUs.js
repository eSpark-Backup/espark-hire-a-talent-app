import React from "react";

const WhyUs = ({ whyUs }) => {
  return (
    <div className="why-us-area">
      <div className="container">
        <h1 className="book-meeting-heading">Why eSpark Talent?</h1>

        <div className="row">
          {whyUs?.map((data) => (
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6" key={data.id}>
              <h2 className="our-counts">{data.count}</h2>
              <h6 className="by-content">{data.content}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
