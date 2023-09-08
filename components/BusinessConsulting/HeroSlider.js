import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import Link from 'next/link'
// import SimpleContent from './content'

const HeroSlider = (props) => {
  const { data, setData } = props
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
                    <div className="col-lg-6 col-md-12">
                      <div className="home-content">
                        {/* <span className="sub-title">{slide.subTitle}</span> */}
                        <h1>{slide.title}</h1>
                        <h5>{slide.para}</h5>
                        <Link href="https://calendly.com/esparktalent/espark-talent">
                          <a className="default-btn style-two">
                            <span className="ri-arrow-right-s-line"></span>
                            {slide.buttonText}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="home-image">
                        <img src={slide.imagePath} alt="banner-image" />
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
  )
}

export default HeroSlider;

