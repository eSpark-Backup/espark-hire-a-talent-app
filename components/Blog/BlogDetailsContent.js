import React from 'react';
import Link from 'next/link';

import { socialLinks } from 'constants/constants';

const BlogDetailsContent = ({ data }) => {
  return (
    <>
      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="blog-details-header row align-items-top justify-content-top">
            <div className="col-lg-6 col-md-12">
              <div className="content">
                <h1>{blogPost.bannerTitle}</h1>
                <p>{blogPost.subtitle}</p>
                <div className="post-author-meta">
                  <div className="d-flex align-items-center">
                    <Image
                      src={urlFor(blogPost.author.avatar).url()}
                      alt={
                        blogPost.author.firstName +
                        " " +
                        blogPost.author.lastName
                      }
                      width={80}
                      height={80}
                    />
                    <div className="title">
                      <span className="name">
                        By <Link href="#">{data[0]?.postedBy?.name}</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="image">
                <Image
                  src={urlFor(blogPost.bannerImage).url()}
                  alt={blogPost.bannerTitle}
                  width={500}
                  height={500}
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
                        <img
                          src={item?.src}
                          width={40}
                          height={40}
                          alt="social-icons"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </ul>
              <div className="blogs-content">
                <PortableText value={blogPost.body} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
