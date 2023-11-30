import React from "react";
import Image from "next/image";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { socialLinks } from "constants/constants";
import { PortableText } from "@portabletext/react";

const builder = imageUrlBuilder(
  createClient({
    projectId: "93d1bm1e",
    dataset: "production",
    useCdn: true,
  })
);

function urlFor(source) {
  return builder.image(source);
}

const BlogDetailsContent = ({ blogPost }) => {
  return (
    <>
      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="blog-details-header row align-items-top justify-content-top">
            <div className="col-lg-6 col-md-12">
              <div className="content">
                <h1>{blogPost.title}</h1>
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
                        By{" "}
                        <a href="#">
                          {blogPost.author.firstName +
                            " " +
                            blogPost.author.lastName}
                        </a>
                      </span>
                      <span className="date">
                        {Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "2-digit",
                        }).format(new Date(blogPost.publishedAt))}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="image">
                <Image
                  src={urlFor(blogPost.featureImage).url()}
                  alt={blogPost.title}
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          <div className="blog-details-desc">
            <div className="article-content">
              <ul className="social-links">
                {socialLinks.map((item, index) => (
                  <li key={index} className="my-1">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={item.className}
                    >
                      <div className={item?.className}>
                        <Image
                          src={item?.src}
                          width={40}
                          height={40}
                          alt="social-icons"
                        />
                      </div>
                    </a>
                  </li>
                ))}
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
