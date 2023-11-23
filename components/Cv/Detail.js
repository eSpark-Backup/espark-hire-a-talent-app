import React from "react";

import CvCard from "./CvCard";

const Detail = (props) => {
  const { para, profileDetail, windowWidth } = props;
  const { expertise, englishLevel, experienceYear, tags, icon } = profileDetail;

  return (
    <CvCard>
      <div className="divide">
        {/* About me */}
        <div className="cv-aboutme-area">
          <h1 className="cv-heading aboutme">About me</h1>
          <div>
            <p className="aboutme-description">{para?.firstParagraph}</p>
            <p className="aboutme-description">{para?.secondParagraph}</p>
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
              <div className="expertise common-flex">
                <h4 className="profile-detail-heading">Expertise</h4>
                <div className="with-icon">
                  <p className="profile-info">{expertise}</p>
                  <div className="image-badge">
                    <img src={icon} alt="" />
                  </div>
                </div>
              </div>

              <div className="english-level common-flex">
                <h4 className="profile-detail-heading">English Level</h4>
                <div className="with-icon">
                  <p className="profile-info">{englishLevel}</p>
                  <div className="image-badge">
                    <img src={icon} />
                  </div>
                </div>
              </div>

              <div className="experience common-flex">
                <h4 className="profile-detail-heading">Years of Experience</h4>
                <p className="profile-info">{experienceYear}</p>
              </div>
            </div>

            <div className="tag-list">
              {tags?.map((tag) => (
                <span key={tag} className="tags">
                  {tag}
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
