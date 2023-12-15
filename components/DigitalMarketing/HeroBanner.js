import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <>
      <div className="banner-area">
        <div className="container">
          <div className="banner-content">
            <span className="sub-title">AWARD WINNING COMPANY</span>
            <h1>Make Your Business More Money With Team Of Experts</h1>
            <Link href="/contact" className="default-btn style-two">
              <span className="ri-arrow-right-s-line"></span>Get Started Now
            </Link>
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <Image
                src="/images/banner.png"
                alt="banner-image"
                width={966}
                height={542}
              />
            </div>
          </div>
        </div>
        <div className="shape1">
          <Image
            src="/images/shape/shape1.png"
            alt="image"
            width={150}
            height={150}
          />
        </div>
        <div className="shape2">
          <Image
            src="/images/shape/shape2.png"
            alt="image"
            width={103}
            height={110}
          />
        </div>
        <div className="shape3">
          <Image
            src="/images/shape/shape3.png"
            alt="image"
            width={130}
            height={130}
          />
        </div>
        <div className="shape4">
          <Image
            src="/images/shape/shape4.png"
            alt="image"
            width={162}
            height={129}
          />
        </div>
        <div className="shape9">
          <Image
            src="/images/shape/shape8.png"
            alt="image"
            width={250}
            height={530}
          />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
