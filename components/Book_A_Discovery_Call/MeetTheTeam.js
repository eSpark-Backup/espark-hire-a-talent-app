import React from "react";

const MeetTheTeam = ({ data }) => {
  const { heading, items } = data;
  return (
    <>
      <div className="meet-the-team-area pt-70 pb-70">
        <div className="container">
          <div className="section-title style-two">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5 col-md-12 text-center">
                <h2>{heading}</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {items?.map((item, i) => (
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="meet-the-team-box">
                  <div
                    className="image"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                    data-aos-once="true"
                  >
                    <img src={item.image} alt="image" />
                  </div>
                  <div
                    className="content"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                    data-aos-once="true"
                  >
                    <h3>{item.text}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetTheTeam;
