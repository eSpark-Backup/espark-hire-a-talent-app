import React from 'react';
import Image from 'next/image';

const ReliableAndSecure = ({ data }) => {
  const { title, subHeading, description, image } = data;
  return (
    <>
      <div className="ReliableAndSecure reliable-and-secure-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-10 mx-auto">
              <div
                className="reliable-and-secure-content"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <h3>{title}</h3>
                <h2>{subHeading}</h2>
                <p>{description}</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-10 mx-auto">
              <div
                className="reliable-and-secure-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <Image src={image} alt="image" width={687} height={786} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReliableAndSecure;
