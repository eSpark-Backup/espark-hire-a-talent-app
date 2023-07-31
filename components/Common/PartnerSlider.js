import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const PartnerSlider = () => {
  return (
    <>
      <div className="partner-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2 className="text-center">We Value Our Admirable Clients </h2>
          </div>
          {/* <br />
          <br /> */}
          <Swiper
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
              <div className="partner-item">
                <img src="/images/partner/new-partner-1.jpg" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/new-partner-2.jpg" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/new-partner-3.jpg" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/new-partner-4.jpg" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/new-partner-5.jpg" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/new-partner-6.jpg" alt="image" />
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/partner7.png" alt="image" />
              </div>
            </SwiperSlide> */}
          </Swiper>
          {/* <br />
          <br />
          <div className="text-center">
            <button className="align-center">Schedule a Meeting</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PartnerSlider;
