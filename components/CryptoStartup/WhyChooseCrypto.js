import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination } from 'swiper'
import { Autoplay } from 'swiper'
const WhyChooseCrypto = ({ image, title, paragraph, Items, backGround, shape }) => {
  return (
    <React.Fragment>
      <div className={backGround ? "about-area bg-gradient-image ptb-100" : "cryptocurrency-choose-area ptb-100 overflow-hidden "}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="cryptocurrency-choose-image about-image"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img
                  src={image}
                />
                <div className="shape5">
                  <img src={shape} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="cryptocurrency-choose-content"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                {/* <span className="sub-title">Why Choose Crypto</span> */}
                <h2>{title}</h2>
                <p className='my-4'>{paragraph}</p>
                <Swiper
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 5000,
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
                      slidesPerView: 1,
                    },
                    1200: {
                      slidesPerView: 1,
                    },
                  }}
                  modules={[Autoplay]}
                  className="mySwiper aboutUs-Services-slides"
                >
                  {Items?.map((slide, i) => (
                    <SwiperSlide key={i}>
                      <div className="choose-inner-box">
                        <div className="image">
                          <img
                            src={slide.image}
                          />
                        </div>
                        <h3>{slide.heading}</h3>
                        <p>
                          {slide.paragraph}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* <div className="choose-inner-box">
                  <div className="image">
                    <img
                      src="/images/crypto-startup/choose/image-1.png"
                      alt="image"
                    />
                  </div>
                  <h3>Full Interoperability</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo lacinia eget consectetur sed convallis at tellus.
                  </p>
                </div>
                <div className="choose-inner-box with-some-left">
                  <div className="image">
                    <img
                      src="/images/crypto-startup/choose/image-2.png"
                      alt="image"
                    />
                  </div>
                  <h3>Contract Level Security</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo lacinia eget consectetur sed convallis at tellus.
                  </p>
                </div>
                <div className="choose-inner-box">
                  <div className="image">
                    <img
                      src="/images/crypto-startup/choose/image-3.png"
                      alt="image"
                    />
                  </div>
                  <h3>Live Human Support</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo lacinia eget consectetur sed convallis at tellus.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default WhyChooseCrypto
