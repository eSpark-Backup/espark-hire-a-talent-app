import React from "react";
import Link from "next/link";

const AboutUs = (props) => {
  const { title, content, items } = props;
  return (
    <>
      <div className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="about-img"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <img
                  src="/images/Mask group.png"
                  alt="image"
                  width={"75%"}
                  height={"100%"}
                />
                <div className="shape5">
                  <img src="/images/shape/shape5.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                {/* <span className="sub-title">ABOUT US</span> */}
                <h2>{title}</h2>
                <p>{content}</p>
                <ul className="features-list">
                  {items.map((eachItem, i) => (
                    <li key={i}>
                      <div className="d-flex align-items-center">
                        <div className="icon bg-f9f9f9">
                          <img src={eachItem.imageLink} alt="image" />
                        </div>
                        <span>{eachItem.item}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                {/* <ul className="features-list">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon bg-f9f9f9">
                        <img src="/images/icon/icon4.png" alt="image" />
                      </div>
                      <span>Brand Strategy</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon bg-f9f9f9">
                        <img src="/images/icon/icon5.png" alt="image" />
                      </div>
                      <span>Expert Team</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon bg-f9f9f9">
                        <img src="/images/icon/icon6.png" alt="image" />
                      </div>
                      <span>Fast Delivery</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon bg-f9f9f9">
                        <img src="/images/icon/icon7.png" alt="image" />
                      </div>
                      <span>Ongoing Report</span>
                    </div>
                  </li>
                </ul> */}
                {/* <Link href="/about-us">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>More About Us
                  </a>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="shape6">
          <img src="/images/shape/shape6.png" alt="image" width={"90%"} />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
