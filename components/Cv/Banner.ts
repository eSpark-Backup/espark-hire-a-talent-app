import React from 'react';
import Image from 'next/image';
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

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
const Banner = (props) => {
  const { windowWidth, profileImage, firstName, lastName, objective, role } =
    props;

  return (
    <div className={`cv-banner ${windowWidth < 767 ? 'potrait-view' : null}`}>
      <div className="cv-banner-area">
        <div className="banner-image">
          <Image
            src={urlFor(profileImage).url()}
            alt={`${firstName} ${lastName}`}
            width={300}
            height={300}
          />
        </div>

        <div>
          <h1 className="employee-name">{`${firstName} ${lastName}`}</h1>
          <div className="employee-post">
            <span>{role}</span>
          </div>
          <h6 className="emoployee-tag">{objective}</h6>

          <button
            className="hire-me"
            onClick={() =>
              window.open(
                'https://calendly.com/esparktalents/60min?month=2023-09',
                '_blank'
              )
            }
          >
            Hire {firstName} {lastName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
