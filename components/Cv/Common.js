import React, { useState, useEffect } from 'react';

import 'react-circular-progressbar/dist/styles.css';

import CvCard from './CvCard';
import ProgressBar from './Progressbar';

const Common = (props) => {
  const { heading, data, feedback } = props;

  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <CvCard>
      <h1 className="cv-heading">{heading}</h1>

      <div
        className={[
          'progress-info-area',
          windowWidth < 376 ? 'progress-info-area-small' : '',
        ].join(' ')}
      >
        {data.map((expert) => (
          <div className="progress-info">
            <h6 className={feedback ? 'feedback-name' : 'names'}>
              {expert.name}
            </h6>
            <ProgressBar endValue={expert.percentage} />
          </div>
        ))}
      </div>
    </CvCard>
  );
};

export default Common;
