import React from "react";

import CvCard from "./CvCard";

const icon = "/images/cvs/badge.png";

const Detail = (props) => {
  const { about, yearsOfExperience, expertise, englishLevel, windowWidth } =
    props;

  return (
    <CvCard>
      <div className="divide">
        {/* About me */}
        <div className="cv-aboutme-area">
          <h1 className="cv-heading aboutme">About me</h1>
          <div>
            <p className="aboutme-description">{about}</p>
          </div>
        </div>

        {/* Profile Detail */}

        <div className="profile-area">
          <h1 className="cv-heading profile-detail">Profile Detail</h1>

          <div className="">
            <div
              className={`profile-details-area ${
                windowWidth < 375 ? "justify-content-start" : ""
              }`}
            >
              <div className="expertise common-flex d-flex flex-column justify-content-between col-lg-4 col-md-6 col-sm-6 p-0">
                <h4 className="profile-detail-heading">Expertise</h4>
                <div className="col-12 d-flex align-items-center justify-content-start">
                  <span className="first-badge tick-icon">
                    <img className="mx-2" src={icon} alt="" />
                  </span>
                  <p className="profile-info mt-1">{expertise[0].name}</p>
                </div>
              </div>

              <div className="english-level common-flex col-lg-3 col-md-6 col-sm-6 p-0 d-flex flex-column justify-content-between">
                <h4 className="profile-detail-heading">English Level</h4>
                <div className="col-12  d-flex align-items-center justify-content-start p-0">
                  <span className="tick-icon">
                    <img className="mx-2" src={icon} />
                  </span>
                  <p className="profile-info mt-1">{englishLevel}</p>
                </div>
              </div>

              <div className="experience common-flex col-lg-5 col-md-12 col-sm-6 p-0">
                <h4 className="profile-detail-heading">Years of Experience</h4>
                <p className="profile-info">{yearsOfExperience}+ Years</p>
              </div>
            </div>

            <div className="tag-list">
              {expertise.slice(1, expertise.length).map((tag) => (
                <span key={tag.name} className="tags">
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CvCard>
  );
};

export default Detail;
