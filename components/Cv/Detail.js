import React from "react";

import CvCard from "./CvCard";

const Detail = (props) => {
  const { description, profileDetail } = props;
  const { expertise, englishLevel, experienceYear, tags, icon } = profileDetail;

  return (
    <CvCard>
      <div className="divide">
        {/* About me */}
        <div className="cv-aboutme-area">
          <h1 className="cv-heading aboutme">About me</h1>
          <div>
            <p className="aboutme-description">{description}</p>
          </div>
        </div>

        {/* Profile Detail */}

        <div className="profile-area">
          <h1 className="cv-heading profile-detail">Profile Detail</h1>

          <div className="">
            <div className="profile-details-area">
              <div className="expertise">
                <h4 className="profile-detail-heading">Expertise</h4>
                {expertise.map((exp, index) => (
                  <div key={index} className="with-icon">
                    <p className="profile-info">{exp}</p>
                    <div className="image-badge">
                      <img src={icon} alt="" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="english-level">
                <h4 className="profile-detail-heading">English Level</h4>
                <div className="with-icon">
                  <p className="profile-info">{englishLevel}</p>
                  <div className="image-badge">
                    <img src={icon} />
                  </div>
                </div>
              </div>

              <div className="experience">
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
