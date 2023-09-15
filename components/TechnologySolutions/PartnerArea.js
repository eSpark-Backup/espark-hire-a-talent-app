import React from "react";
import PartnerSlider from "./PartnerSlider";

const PartnerArea = () => {
  return (
    <>
      <div className="partner-area pt-100">
        <div className="container">
          <div className="section-title style-two">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                {/* <span className="sub-title">OUR PARTNERS</span> */}
                <h2 className="fw-semibold">We Have Worked With <br/> Notable Brands Worldwide​</h2>
              </div>
              <div className="col-lg-7 col-md-12">
                <p>
                  Our offered professional hiring services have supported brands
                  to improve their digital presence and grow in the market. You
                  can also join us like our trusted partners
                </p>
              </div>
            </div>
          </div>

          <PartnerSlider />
        </div>
      </div>
    </>
  );
};

export default PartnerArea;
