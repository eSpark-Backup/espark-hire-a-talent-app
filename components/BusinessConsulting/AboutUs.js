import React from 'react';

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
                  alt="Global Recruitment - global recruitment agency - worldwide recruiting agency - global recruitment services - global recruitment solutions - eSpark Talent"
                  width={'75%'}
                  height={'100%'}
                />
                <div className="shape5">
                  <img
                    src="/images/shape/shape5.png"
                    alt="Global Recruitment - global recruitment agency - worldwide recruiting agency - global recruitment services - global recruitment solutions - eSpark Talent"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h2 className="fw-semibold">{title}</h2>
                <p>{content}</p>
                <ul className="features-list">
                  {items.map((eachItem, i) => (
                    <li key={i}>
                      <div className="d-flex align-items-center">
                        <div className="icon bg-f9f9f9">
                          <img
                            src={eachItem.imageLink}
                            alt="Global Recruitment - global recruitment agency - worldwide recruiting agency - global recruitment services - global recruitment solutions - eSpark Talent"
                          />
                        </div>
                        <span>{eachItem.item}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="shape6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
