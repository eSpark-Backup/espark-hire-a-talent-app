import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import PartnerSlider from "../../components/TechnologySolutions/PartnerSlider";

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
          {/* <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper partner-slides"
          >
            <SwiperSlide>
              <div className="partner-card-box">
                <img
                  src="/images/cybersecurity-services/partner/partner-7.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card-box">
                <img
                  src="/images/cybersecurity-services/partner/partner-8.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card-box">
                <img
                  src="/images/cybersecurity-services/partner/partner-9.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card-box">
                <img
                  src="/images/cybersecurity-services/partner/partner-10.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card-box">
                <img
                  src="/images/cybersecurity-services/partner/partner-11.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card-box">
                <img
                  src="/images/cybersecurity-services/partner/partner-12.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card-box">
                <img
                  src="/images/cybersecurity-services/partner/partner-8.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>
          </Swiper> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default IndustryPartners;
