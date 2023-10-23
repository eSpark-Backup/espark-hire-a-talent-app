import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Autoplay } from "swiper";
import Link from "next/link";

const OurServices = ({ title, para, items }) => {
  return (
    <>
      <div className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            {/* <span className="sub-title">OUR SERVICES</span> */}
            <h2 className="fw-semibold">{title}</h2>
            <p>{para}</p>
          </div>

          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              425: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper services-slides-two"
          >
            {items?.map((eachCard, i) => (
              <SwiperSlide key={i}>
                <div
                  className={
                    eachCard.homeComponent
                      ? "single-services-item with-boxshadow size-change"
                      : "single-services-item with-boxshadow"
                  }
                >
                  <div className="d-flex align-items-center">
                    <img src={eachCard.imageLink} alt="Global Recruitment - global recruitment agency - worldwide recruiting agency - global recruitment services - global recruitment solutions - eSpark Talent" />
                    {/* <h3>
                      <Link href={slide.link}>
                        <a>{slide.title}</a>
                      </Link>
                    </h3> */}
                    <h3>{eachCard.title}</h3>
                  </div>
                  <p>{eachCard.content}</p>
                  {eachCard.homeComponent ? (
                    <Link
                      href={
                        "hire" +
                        "/" +
                        eachCard.slug
                      }
                    >
                      <a className="default-btn align-self-end">
                        <span className="ri-arrow-right-s-line"></span>
                        {eachCard.buttonText}
                      </a>
                    </Link>
                  ) : null}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OurServices;
