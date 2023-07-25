import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { Autoplay } from 'swiper'
import Link from 'next/link'

const OurServices = (props) => {
  const { title, para, data} = props
  return (
    <>
      <div className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            {/* <span className="sub-title">OUR SERVICES</span> */}
            <h2>{title}</h2>
            <p>
              {para}
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
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
            {data?.map((slide) => (
              <SwiperSlide>
                <div className="single-services-item with-boxshadow">
                  <div className="d-flex align-items-center">
                    <img src={slide.imagePath} alt="image" />
                    <h3>
                      <Link href={slide.link}>
                        <a>{slide.title}</a>
                      </Link>
                    </h3>
                  </div>
                  <p>
                    {slide.para}
                  </p>
                  <Link href={slide.link}>
                    <a className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>{slide.buttonText}
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default OurServices
