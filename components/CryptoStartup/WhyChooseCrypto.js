import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
const WhyChooseCrypto = ({
  image,
  title,
  paragraph,
  Items,
  backGround,
  shape,
}) => {
  return (
    <>
      <div
        className={
          backGround
            ? 'about-area bg-gradient-image ptb-100'
            : 'cryptocurrency-choose-area ptb-100 overflow-hidden '
        }
      >
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
                  alt="Outsourced Employee - Staff Outsourcing Solutions - Outsourced Staff - Global Employment Outsourcing - Employment Outsourcing Services – eSpark Talent"
                />
                <div className="shape5">
                  <img
                    src={shape}
                    alt="Outsourced Employee - Staff Outsourcing Solutions - Outsourced Staff - Global Employment Outsourcing - Employment Outsourcing Services – eSpark Talent"
                  />
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
                <h2>{title}</h2>
                <p className="my-4">{paragraph}</p>
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
                            alt="Outsourced Employee - Staff Outsourcing Solutions - Outsourced Staff - Global Employment Outsourcing - Employment Outsourcing Services – eSpark Talent"
                          />
                        </div>
                        <h3>{slide.heading}</h3>
                        <p>{slide.paragraph}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseCrypto;
