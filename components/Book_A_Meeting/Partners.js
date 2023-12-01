import React from "react";

import PartnerSlider from "../Common/PartnerSlider";

const LandingPartners = () => {
  return (
    <div className="landing-partners">
      <PartnerSlider
        heading="Trusted by the most successful businesses in the world."
        inifiniteLoop={true}
      />
    </div>
  );
};

export default LandingPartners;
