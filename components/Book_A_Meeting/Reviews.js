import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, EffectFade } from 'swiper';

import StarRating from '../Book_A_Discovery_Call/StarRating';

const Reviews = ({ items }) => {
  return (
    <div className="mix-reviews-area">
      <div className="container">
        <div className="main-review-area container">
          <h1 className="reviews-heading">Reviews</h1>

          <div className="reviews-swiper">
            <Swiper
              effect={'coverflow'}
              fadeEffect={{ crossFade: true }}
              grabCursor={false}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 440,
                modifier: 2,
                slideShadows: true,
              }}
              pagination={true}
              navigation={true}
              loop={true}
              allowTouchMove={false}
              draggable={false}
              modules={[EffectCoverflow, Navigation, Pagination, EffectFade]}
              className="mySwiper reviews-swiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                425: {
                  slidesPerView: 1,
                },
                1200: {
                  slidesPerView: 'auto',
                },
              }}
            >
              {items?.map((items, i) => (
                <SwiperSlide key={i}>
                  <div className="reviews-area">
                    <div className="row h-100">
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="colored-div">
                          <div className="reviews-image">
                            <img src={items?.image} alt="img" />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-10 col-md-10 col-sm-12">
                        <div className="reviews-content">
                          <div className="">
                            <StarRating stars={4} />
                          </div>
                          <h1 className="review-title">{items?.title}</h1>
                          <h2 className="review-subtitle">{items?.subTitle}</h2>
                          <p className="review-description">
                            {items?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
