import React from "react";

import Content from "./Content";
import Form from "./Form";

const Banner = ({ companySize }) => {
  return (
    <div className="landing-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Content />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12">
            <Form companySize={companySize} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
