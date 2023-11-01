// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectFade,
  Autoplay,
} from 'swiper';
import StarRating from './StarRating';

const ClientFeedback = ({ data }) => {
  const { mainheading, items } = data;
  return (
    <div className="ClientFeedback container-lg pb-lg-5 pt-1">
      <div className="feedback-title">
        <h2 className="text-center my-5">{mainheading}</h2>
      </div>
      <Swiper
        // cssMode={true}
        spaceBetween={30}
        navigation={true}
        pagination={true}
        mousewheel={false}
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        fadeEffect={{ crossFade: true }}
        speed={500}
        modules={[
          Autoplay,
          Navigation,
          Pagination,
          Mousewheel,
          Keyboard,
          EffectFade,
        ]}
        className="mySwiper client-feedback"
      >
        {items?.map((items, i) => (
          <SwiperSlide key={i}>
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-11 col-lg-11 col-md-12 col-sm-12">
                <div className="client-feedback-card">
                  <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-5 col-md-4 col-sm-8 position-relative d-flex justify-content-center align-items-center">
                      <div className="feedback-bg"></div>
                      <div className="feedback-img">
                        <img src={items?.image} alt="img" />
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-8 col-sm-10 position-relative d-flex align-items-center">
                      <div className="feedback-content">
                        <div className="feedback-rating">
                          <StarRating stars={4} />
                        </div>
                        <h1>{items?.title}</h1>
                        <h2>{items?.subTitle}</h2>
                        <p>{items?.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientFeedback;
