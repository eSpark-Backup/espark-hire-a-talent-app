import React from 'react';

import CvCard from './CvCard';

const WorkExperience = ({ experience, inter }) => {
  return (
    <CvCard>
      <h1 className="cv-heading">Work Experience</h1>

      <div className="work-experience">
        {experience.map((exp, index) => (
          <div key={index}>
            <div className="position-heading">
              <div className="list-marker">
                <span className="list-marker-inner" />
              </div>
              <h2 className="work-position cv-pl">{exp.role}</h2>
            </div>

            <h5 className="work-company cv-pl">{exp.company}</h5>

            <ul className="experience-list">{exp.description}</ul>
          </div>
        ))}
      </div>
    </CvCard>
  );
};

export default WorkExperience;
