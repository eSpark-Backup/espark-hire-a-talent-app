import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AdaptTab = ({ data }) => {
  const { cardHeading, image, listItem, text, link } = data;
  return (
    <>
      <div className="AdaptTab background"></div>
      <div className="we-adapt-to-your-need-aera">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-5 col-lg-4 col-md-7">
              <div
                className="we-adapt-to-your-need-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <Image src={image} alt="image" />
              </div>
            </div>

            <div className="col-xl-6 col-lg-7 col-md-12 justify-content-center d-flex">
              <div className="we-adapt-to-your-need-content">
                <h2>
                  {cardHeading}
                  {cardHeading ? <span className="dot">.</span> : null}
                </h2>
                {listItem?.map((items, i) => (
                  <div key={i} className="row my-xl-4 my-lg-2 my-md-3 my-sm-3">
                    <div className="col-2 col-md-4 w-auto justify-content-center d-flex">
                      <Image src={items.logo} className="logo" />
                    </div>
                    <div className="col-9 col-md-8">
                      <h3>{items.heading}</h3>
                      <p>{items.paragraph}</p>
                    </div>
                  </div>
                ))}
                <Link href={link}>
                  <span className="default-btn style-two" target="_blank">
                    {text}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdaptTab;
