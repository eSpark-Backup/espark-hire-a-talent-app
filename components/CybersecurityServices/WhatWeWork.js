import React from "react";

const WhatWeWork = ({ paragraph, Items, title, image, shape }) => {
  return (
    <React.Fragment>
      <div className={"what-we-work-area ptb-100"}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 text-center">
              <div
                className={"what-we-work-image"}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img src={image} width={"500px"} height={"500px"} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="what-we-work-content">
                {/* <span className="sub-title">What We Work</span> */}
                <h2>{title}</h2>
                <p className="my-4">{paragraph}</p>
                {Items?.map((eachItems, i) => (
                  <div className="we-work-inner-box" key={i}>
                    <div className="image">
                      <img src={eachItems.icon} alt="image" />
                    </div>
                    <h3>{eachItems.title}</h3>
                    <p>{eachItems.description}</p>
                  </div>
                ))}
                {/* <div className="we-work-inner-box">
                  <div className="image">
                    <img
                      src="/images/cybersecurity-services/what-we-work/image-1.png"
                      alt="image"
                    />
                  </div>
                  <h3>Trusted Partner</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo lacinia eget consectetur sed convallis at tellus.
                  </p>
                </div>

                <div className="we-work-inner-box with-some-left">
                  <div className="image">
                    <img
                      src="/images/cybersecurity-services/what-we-work/image-2.png"
                      alt="image"
                    />
                  </div>
                  <h3>System Security</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo lacinia eget consectetur sed convallis at tellus.
                  </p>
                </div>

                <div className="we-work-inner-box">
                  <div className="image">
                    <img
                      src="/images/cybersecurity-services/what-we-work/image-3.png"
                      alt="image"
                    />
                  </div>
                  <h3>Product Security</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo lacinia eget consectetur sed convallis at tellus.
                  </p>
                </div>
                 */}
              </div>
            </div>
          </div>
        </div>
        <div className="what-we-work-shape">
          <img src={shape} alt="image" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhatWeWork;
