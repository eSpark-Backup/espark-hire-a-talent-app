import React from "react";

import ContentSection from "./ContentSection";
import ImageSection from "./ImageSection";

const TopSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <ContentSection />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <ImageSection />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
