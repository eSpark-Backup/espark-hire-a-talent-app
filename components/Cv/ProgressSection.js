import React from 'react';

import CvCard from './CvCard';
import ProgressBar from './Progressbar';

const ProgressSection = (props) => {
  const { data, heading, feedback, windowWidth } = props;

  return (
    <CvCard>
      <h1 className="cv-heading">{heading}</h1>

      <div
        className={[
          'progress-info-area',
          feedback ? 'cv-feedback-area' : '',
          windowWidth <= 375 ? 'progress-info-area-small' : '',
        ].join(' ')}
      >
        {data?.map((elem, index) => (
          <div key={index} className={`progress-info ${data?.className}`}>
            <h6 className={feedback ? 'feedback-name' : 'names'}>
              {elem.name}
            </h6>
            <ProgressBar endValue={elem.level} />
          </div>
        ))}
      </div>
    </CvCard>
  );
};

export default ProgressSection;
