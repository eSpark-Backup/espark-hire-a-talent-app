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
              <Image src="/images/banner.png" alt="banner-image" />
            </div>
          </div>
        </div>
        <div className="shape1">
          <Image src="/images/shape/shape1.png" alt="image" />
        </div>
        <div className="shape2">
          <Image src="/images/shape/shape2.png" alt="image" />
        </div>
        <div className="shape3">
          <Image src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape4">
          <Image src="/images/shape/shape4.png" alt="image" />
        </div>
        <div className="shape9">
          <Image src="/images/shape/shape8.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
