import React from "react";

import ContentSection from "./ContentSection";
import ImageSection from "./ImageSection";

const BottomSection = () => {
  return (
    <div className="container bottom-section">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <ImageSection />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <ContentSection />
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
