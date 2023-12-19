import React from 'react';

import ProgressSection from './ProgressSection';

const Feedback = ({ feedbacks, windowWidth }) => {
  return (
    <ProgressSection
      data={feedbacks}
      heading="FEEDBACKS"
      feedback
      windowWidth={windowWidth}
    />
  );
};

export default Feedback;
