import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import PartnerSlider from '../../components/TechnologySolutions/PartnerSlider';

const IndustryPartners = ({ title, paragraph }) => {
  return (
    <React.Fragment>
      <div className="industry-partner-area pt-70 pb-70">
        <div className="container">
          <div className="section-title with-max-width">
            <h2>{title}</h2>
            <p>{paragraph}</p>
          </div>
          <PartnerSlider />
        </div>
      </div>
    </React.Fragment>
  );
};

export default IndustryPartners;
