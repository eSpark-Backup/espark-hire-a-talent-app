import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Link from 'next/link';
// import SimpleContent from './content'

const HeroSlider = (props) => {
  const { data, setData } = props;
  return (
    <>
      <div className="home-area">
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper home-slides"
        >
          {data?.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="banner-item">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                      <div className="home-content">
                        {/* <span className="sub-title">{slide.subTitle}</span> */}
                        <h1>{slide.title}</h1>
                        <h5>{slide.para}</h5>
                        <Link legacyBehavior href="https://calendly.com/esparktalents/60min?month=2023-09">
                          <span className="default-btn style-two" target="_blank">
                            <span className="ri-arrow-right-s-line"></span>
                            {slide.buttonText}
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                      <div className="home-image mt-5">
                        <img src={slide.imagePath} alt={slide.altTag} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HeroSlider;
