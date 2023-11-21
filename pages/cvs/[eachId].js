import React, { useEffect } from "react";

import { useRouter } from "next/router";
import { Inter } from "next/font/google";

import Banner from "@/components/Cv/Banner";
import Detail from "@/components/Cv/Detail";
import TechTools from "@/components/Cv/TechTools";
import WorkExperience from "@/components/Cv/WorkExperience";
import Expertise from "@/components/Cv/Expertise";
import Tools from "@/components/Cv/Tool";
import EducationCertificate from "@/components/Cv/EducationCertificate";
import Feedback from "@/components/Cv/Feedback";

import { cvData } from "constants/cvsConstants";

const inter = Inter({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
});

const IndividualCV = () => {
  const router = useRouter();
  const getId = router.query.eachId;
  const cv = cvData?.find((item) => item?.id === parseInt(getId));

  useEffect(() => {
    let header = document.querySelector("header");
    let footer = document.querySelector("footer");

    header.style.display = "none";
    footer.style.display = "none";

    return () => {
      header.style.display = "";
      footer.style.display = "";
    };
  }, []);

  return (
    <div className={`cv-area ${inter.className}`}>
      <Banner banner={cv.banner} />

      <Detail para={cv.aboutMe} profileDetail={cv.profileDetail} />

      <TechTools tools={cv.techTools} />

      <WorkExperience experience={cv.workExperience} />

      <Expertise expertise={cv.expertise} />

      <Tools tools={cv.tools} />

      <EducationCertificate
        education={cv.education}
        certification={cv.certification}
      />

      <Feedback feedbacks={cv.feedback} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = cvData.map((cv) => ({
    params: { eachId: cv.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { eachId } = params;
  const filterData = cvData.filter((item) => item.id === parseInt(eachId));

  return {
    props: {
      cv: filterData[0] || null,
    },
  };
};

export default IndividualCV;
