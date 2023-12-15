import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { socialLinks } from "constants/constants";

const BlogDetailsContent = ({ data }) => {
  return (
    <>
      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="blog-details-header row align-items-top justify-content-top">
            <div className="col-lg-6 col-md-12">
              <div className="content">
                <h1>{data[0]?.mainHeading}</h1>
                <p>{data[0]?.mainParagraph}</p>
                <div className="post-author-meta">
                  <div className="d-flex align-items-center">
                    <Image
                      src={data[0]?.postedBy?.image}
                      alt={data[0]?.postedBy?.alt}
                      width={300}
                      height={300}
                    />
                    <div className="title">
                      <span className="name">
                        By <Link href="#">{data[0]?.postedBy?.name}</Link>
                      </span>
                      <span className="date">{data[0]?.postedBy?.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="image">
                <Image
                  src={data[0]?.bigImageLink}
                  alt={data[0]?.altTag}
                  width={860}
                  height={570}
                />
              </div>
            </div>
          </div>

          <div className="blog-details-desc">
            <div className="article-content">
              <ul className="social-links">
                <ul className="social-links">
                  {socialLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={item.className}
                      >
                        <Image
                          src={item?.src}
                          className={item?.className}
                          width={36}
                          height={36}
                          alt="social-icons"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </ul>
              <div dangerouslySetInnerHTML={{ __html: data[0]?.content }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
