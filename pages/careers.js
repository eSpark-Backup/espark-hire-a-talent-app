import React from 'react';
import { createClient } from 'next-sanity';
import PageTitle from '@/components/Common/PageTitle';
import CareerCards from '@/components/Careers/CareerCards';

function Career({ jobsData, jobCategories }) {
  return (
    <>
      <PageTitle homeText="Home" pageTitle="Careers" pageSubTitle="Careers" />
      <div className="container-xxl career-section ptb-100">
        <CareerCards jobs={jobsData} jobCategories={jobCategories} />
      </div>
    </>
  );
}
export default Career;

const fetchJobs = async (jobCategory) => {
  const client = createClient({
    projectId: '93d1bm1e',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
  });

  let query;

  if (jobCategory !== null && jobCategory !== 'all') {
    query = `*[_type == "job" && references($jobCategory)]{..., "jobCategory": jobCategory->{_id, title}}`;
  } else {
    query = `*[_type == "job"]{..., "jobCategory": jobCategory->{_id, title}}`;
  }

  const data = await client.fetch(query, { jobCategory });
  return data;
};

const fetchJobCategories = async () => {
  const client = createClient({
    projectId: '93d1bm1e',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
  });

  const query = `*[_type == "jobCategory"]{ _id, title }`;

  const data = await client.fetch(query);
  return data;
};

export const getServerSideProps = async ({ query }) => {
  let jobCategory = query.jobCategory || null;
  const jobsData = await fetchJobs(jobCategory);
  const jobCategories = await fetchJobCategories();

  return {
    props: {
      jobsData,
      jobCategories,
    },
  };
};
