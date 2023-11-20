import React from "react";

import ProgressSection from "./ProgressSection";

const Feedback = ({ feedbacks }) => {
  return <ProgressSection data={feedbacks} heading="FEEDBACKS" feedback />;
};

export default Feedback;
