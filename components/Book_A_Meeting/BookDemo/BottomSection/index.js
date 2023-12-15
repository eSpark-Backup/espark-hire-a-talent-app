import React from "react";

import ContentSection from "./ContentSection";
import ImageSection from "./ImageSection";

const BottomSection = ({ scaleBusiness, benefits, countries }) => {
  return (
    <div className="container bottom-section">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <ImageSection benefits={benefits} countries={countries} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <ContentSection scaleBusiness={scaleBusiness} />
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
