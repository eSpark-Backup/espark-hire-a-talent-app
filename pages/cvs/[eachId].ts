import React, { useEffect, useState } from 'react';
import { createClient } from 'next-sanity';

import Banner from '@/components/Cv/Banner';
import Detail from '@/components/Cv/Detail';
// import TechTools from "@/components/Cv/TechTools";
import WorkExperience from '@/components/Cv/WorkExperience';
import Expertise from '@/components/Cv/Expertise';
import Tools from '@/components/Cv/Tool';
import EducationCertificate from '@/components/Cv/EducationCertificate';
import Feedback from '@/components/Cv/Feedback';

const client = createClient({
  projectId: '93d1bm1e',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
});

const IndividualCV = ({ cv }) => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    let header = document.querySelector('header');
    let footer = document.querySelector('footer');

    header.style.display = 'none';
    footer.style.display = 'none';

    return () => {
      header.style.display = '';
      footer.style.display = '';
    };
  }, []);

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

  if (!cv) {
    // Handle the case where the CV is not found
    return <div>CV not found</div>;
  }

  console.log(cv);

  return (
    <div className="cv-area">
      <Banner
        firstName={cv.firstName}
        lastName={cv.lastName}
        objective={cv.objective}
        profileImage={cv.profileImage}
        role={cv.role}
        windowWidth={windowWidth}
      />

      <Detail
        about={cv.about}
        profileDetail={cv.profileDetail}
        windowWidth={windowWidth}
        englishLevel={cv.englishLevel}
        yearsOfExperience={cv.yearsOfExperience}
        expertise={cv.skills}
      />

      {/* <TechTools tools={cv.skills} /> */}

      <WorkExperience experience={cv.experience} />

      <Expertise expertise={cv.skills} windowWidth={windowWidth} />

      <Tools tools={cv.tools} windowWidth={windowWidth} />

      <EducationCertificate
        education={cv.education}
        certifications={cv.certifications}
      />

      <Feedback feedbacks={cv.feedback} windowWidth={windowWidth} />
    </div>
  );
};

export default IndividualCV;

export const getStaticPaths = async () => {
  const paths = await client.fetch('*[_type == "candidate"]._id');

  return {
    paths: paths.map((eachId) => ({
      params: { eachId: eachId.toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { eachId } = params;
  const cv = await client.fetch(
    '*[_type == "candidate" && _id == $eachId][0]',
    {
      eachId,
    }
  );

  return {
    props: {
      cv: cv || null,
    },
  };
};
