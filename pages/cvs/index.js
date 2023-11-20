import React, { useEffect } from "react";

import Detail from "@/components/Cv/Detail";
import TechTools from "@/components/Cv/TechTools";
import WorkExperience from "@/components/Cv/WorkExperience";
import Expertise from "@/components/Cv/Expertise";
import Tools from "@/components/Cv/Tool";
import Feedback from "@/components/Cv/Feedback";
import EducationCertificate from "@/components/Cv/EducationCertificate";
import Banner from "@/components/Cv/Banner";

import { cvData } from "constants/cvsConstants";

export default function CV() {
  useEffect(() => {
    let header = document.querySelector("header");
    let footer = document.querySelector("footer");

    header.style.display = "none";
    footer.style.display = "none";
  });

  return (
    <div className="cv-area">
      {cvData.map((cv, index) => (
        <>
          <Banner banner={cv.banner} />

          <Detail
            description={cv.aboutMe.description}
            profileDetail={cv.profileDetail}
          />

          <TechTools tools={cv.techTools} />

          <WorkExperience experience={cv.workExperience} />

          <Expertise expertise={cv.expertise} />

          <Tools tools={cv.tools} />

          <EducationCertificate
            education={cv.education}
            certification={cv.certification}
          />

          <Feedback feedbacks={cv.feedback} />
        </>
      ))}
    </div>
  );
}
