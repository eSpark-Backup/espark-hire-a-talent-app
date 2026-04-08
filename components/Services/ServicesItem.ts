import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ServicesItem = ({ title, Paragraph, data, id }) => {
  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>{title}</h2>
            <p>{Paragraph}</p>
          </div>
          <div className="row justify-content-center">
            {data?.map((items, i) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-delay={items.delay}
                data-aos-duration="1200"
                data-aos-once="true"
                key={i}
              >
                <div className="single-services-box border">
                  <div className="d-flex align-items-center ">
                    <Image
                      src={items?.icons}
                      alt={items?.alt}
                      width={50}
                      height={50}
                    />
                    <h3>{items?.name}</h3>
                  </div>
                  <p>{items?.description}</p>
                  {items.list ? (
                    <ul className="features-list">
                      {items.list?.map((list, i) => (
                        <li key={i}>
                          <span>
                            <i className="ri-checkbox-circle-fill"></i> {list}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {items.buttonText ? (
                    <Link href="/service-details" className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>
                      {items.buttonText}
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesItem;
