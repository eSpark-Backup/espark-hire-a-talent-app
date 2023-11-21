import React from "react";

import CvCard from "./CvCard";

const EducationCertificate = (props) => {
  const { education, certification } = props;

  return (
    <CvCard>
      <div className="divider">
        {education ? (
          <div>
            <h1 className="cv-heading">EDUCATION</h1>

            <div className="detail-wrapper">
              <div className="hat-icon">
                <img
                  src={education?.university?.logo}
                  alt={education?.university?.logo}
                />
              </div>

              <div className="education-detail">
                <h4 className="major">{education?.university?.major}</h4>
                <h5 className="institude-name">
                  {education?.university?.name}
                </h5>
                <p className="time-period">
                  {education?.university?.fromDate} -{" "}
                  {education?.university?.toDate}
                </p>
              </div>
            </div>

            <div className="detail-wrapper">
              <div className="hat-icon">
                <img
                  src={education?.college?.logo}
                  alt={education?.college?.logo}
                />
              </div>

              <div className="education-detail">
                <h4 className="major">{education?.college?.major}</h4>
                <h5 className="institude-name">{education?.college?.name}</h5>
                <p className="time-period">
                  {education?.college?.fromDate} - {education?.college?.toDate}{" "}
                  {education?.college?.grade}
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {education ? <div className="middle-border" /> : null}

        {certification.length ? (
          <div className="certificate">
            <h1 className="cv-heading">CERTIFICATION</h1>

            {certification.map((cert, index) => {
              return (
                <div key={index} className="detail-wrapper">
                  <div className="hat-icon">
                    <img src={cert?.logo} alt={cert?.logo} />
                  </div>

                  <div className="education-detail">
                    <h4 className="major">{cert?.name}</h4>
                    <h5 className="institude-name">{cert?.from}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </CvCard>
  );
};

export default EducationCertificate;
