import React from "react";
import { createClient } from "next-sanity";
import PageTitle from "@/components/Common/PageTitle";
import BlogsCards from "@/components/Blog/BlogsCards";
import { blogData } from "constants/blogConstants";
import NewsletterForm2 from "@/components/Common/NewsletterForm2";

export default function Blog({ blogsData }) {
  return (
    <>
      <PageTitle homeText="Home" pageTitle="Blogs" pageSubTitle={"Blogs"} />
      <BlogsCards item={blogData} blogs={blogsData} />
      <NewsletterForm2 />
    </>
  );
}

const fetchBlogs = async () => {
  const client = createClient({
    projectId: "93d1bm1e",
    dataset: "production",
    useCdn: true,
  });

  let query;

  query = `*[_type == "blog"]`;

  const data = await client.fetch(query);
  return data;
};

export const getServerSideProps = async () => {
  const blogsData = await fetchBlogs();

  return {
    props: {
      blogsData,
    },
  };
};
