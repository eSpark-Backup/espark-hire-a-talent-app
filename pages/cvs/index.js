import React from 'react';
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import Image from 'next/image';

const client = createClient({
  projectId: '93d1bm1e',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
});

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function CV({ candidates }) {
  return (
    <div className="container cv-main-area">
      <div className="row">
        {candidates.map((candidate, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 col" key={index}>
            <GridView candidate={candidate} />
          </div>
        ))}
      </div>
    </div>
  );
}

const GridView = ({ candidate }) => {
  const { firstName, lastName, objective, profileImage, role } = candidate;

  return (
    <div className="cv-banner cv-grid">
      <div className="main-box-banner">
        <div className="cv-banner-area cv-grid-banner-area">
          <div className="banner-image grid-banner-image">
            <Image
              src={urlFor(profileImage).url()}
              alt={`${firstName} ${lastName}`}
              width={300}
              height={300}
            />
          </div>

          <div className="banner-details">
            <h1 className="employee-name grid-employee-name">{`${firstName} ${lastName}`}</h1>
            <div className="employee-post grid-employee-post">
              <span>{role}</span>
            </div>
            <div className="emoployee-tag grid-emoployee-tag">
              <span>{objective}</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-3">
          {/* Add your functionality here */}
          <Link href={`/cvs/${candidate._id}`}>
            <button className="cv-view-more">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    // Fetch specific fields (profileImage, firstName, lastName, objective, role) from Sanity at build time
    const candidates = await client.fetch(
      '*[_type == "candidate"]{profileImage, firstName, lastName, objective, role, _id}'
    );

    console.log('candidates', candidates);
    return {
      props: {
        candidates,
      },
    };
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    return {
      props: {
        candidates: [],
      },
    };
  }
}
