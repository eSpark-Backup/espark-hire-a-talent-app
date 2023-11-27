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
              <div className="expertise common-flex col-xs-8">
                <h4 className="profile-detail-heading">Expertise</h4>
                <div className="with-icon row marg-0">
                  <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 pad-0">
                    <p className="profile-info">{expertise}</p>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 pad-0">
                    <div className="image-badge first-badge">
                      <img src={icon} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="english-level common-flex col-xs-4">
                <h4 className="profile-detail-heading">English Level</h4>
                <div className="with-icon row marg-0">
                  <div className="col-lg-8 col-md-6 col-sm-7 col-xs-6 pad-0">
                    <p className="profile-info">{englishLevel}</p>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-5 col-xs-6 pad-0">
                    <div className="image-badge">
                      <img src={icon} />
                    </div>
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
