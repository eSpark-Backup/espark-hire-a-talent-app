import React from "react";

import CvCard from "./CvCard";

const EducationCertificate = (props) => {
  const { education, certification } = props;
  const { university, college } = education;

  return (
    <CvCard>
      <div className="divider">
        <div>
          <h1 className="cv-heading">EDUCATION</h1>

          <div className="detail-wrapper">
            <div className="hat-icon">
              <img src={university.logo} alt={university.logo} />
            </div>

            <div className="education-detail">
              <h4 className="major">{university.major}</h4>
              <h5 className="institude-name">{university.name}</h5>
              <p className="time-period">
                {university.fromDate} - {university.toDate}
              </p>
            </div>
          </div>

          <div className="detail-wrapper">
            <div className="hat-icon">
              <img src={college.logo} alt={college.logo} />
            </div>

            <div className="education-detail">
              <h4 className="major">{college.major}</h4>
              <h5 className="institude-name">{college.name}</h5>
              <p className="time-period">
                {college.fromDate} - {college.toDate}
              </p>
            </div>
          </div>
        </div>

        <div className="middle-border" />

        <div className="certificate">
          <h1 className="cv-heading">CERTIFICATION</h1>

          {certification.map((cert, index) => {
            return (
              <div key={index} className="detail-wrapper">
                <div className="hat-icon">
                  <img src={cert.logo} alt={cert.logo} />
                </div>

                <div className="education-detail">
                  <h4 className="major">{cert.name}</h4>
                  <h5 className="institude-name">{cert.from}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CvCard>
  );
};

export default EducationCertificate;
