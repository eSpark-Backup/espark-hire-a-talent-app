import React, { useEffect } from "react";
import PageTitle from "@/components/Common/PageTitle";
import BlogCard from "@/components/Blog/BlogCard";
import GetStarted from "@/components/Common/GetStarted";
import { blogData } from "constants/blogConstants";
import NewsletterForm2 from "@/components/Common/NewsletterForm2";

export default function Blog() {
  return (
    <>
      <PageTitle homeText="Home" pageTitle="Blogs" pageSubTitle={"Blogs"} />

      <BlogCard item={blogData} />
      <NewsletterForm2 />
      {/* <GetStarted /> */}
    </>
  );
}
