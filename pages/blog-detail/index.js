import React from "react";
import PageTitle from "@/components/Common/PageTitle";
import BlogCard from "@/components/Blog/BlogCard";
import GetStarted from "@/components/Common/GetStarted";
import { blogData } from "constants/blogConstants";

export default function Blog() {
  return (
    <>
      <PageTitle homeText="Home" pageTitle="Blog" pageSubTitle={"Blog"} />

      <BlogCard item={blogData} />

      {/* <GetStarted /> */}
    </>
  );
}
