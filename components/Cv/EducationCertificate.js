import React from "react";

import CvCard from "./CvCard";

function formatDate(date) {
  const d = new Date(date);
  const month = d.toLocaleString("default", { month: "long" });

  return `${month} ${d.getFullYear()}`;
}

const EducationCertificate = (props) => {
  const { education, certifications, inter } = props;

  return (
    <CvCard>
      <div className="divider">
        <div className="education">
          <h1 className="cv-heading">EDUCATION</h1>
          {education.map((edu, index) => (
            <div className="detail-wrapper" key={index}>
              <div className="hat-icon">
                <img
                  src={`/images/cvs/outlined-hat.png`}
                  alt={"graduated student icon"}
                />
              </div>

              <div className="education-detail">
                <h4 className={`major ${inter?.className}`}>{edu.degree}</h4>
                <h5 className="institude-name">{edu.institute}</h5>
                <p className="time-period">
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </p>
              </div>
            </div>
          ))}
        </div>
        {education ? <div className="middle-border" /> : null}
        {certifications?.length > 0 ? (
          <div className="certificate">
            <h1 className="cv-heading">CERTIFICATION</h1>

            {certifications.map((cert, index) => {
              return (
                <div key={index} className="detail-wrapper">
                  <div className="hat-icon">
                    <img src={`/images/cvs/star.png`} alt={"star icon"} />
                  </div>

                  <div className="education-detail">
                    <h4 className={`major ${inter?.className}`}>
                      {cert?.name}
                    </h4>
                    <h5 className="institude-name">{cert?.authority}</h5>
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
