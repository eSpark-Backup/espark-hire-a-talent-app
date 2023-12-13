import React from "react";
import { useRouter } from "next/router";
import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";

import { blogData } from "constants/blogConstants";

const BlogDetails = () => {
  const router = useRouter();
  const getId = router.query.eachId;
  const filterData = blogData?.filter((item) => item?.slug === getId);

  const props = {
    title: "set default title",
    metaDescription: "set default metaDescription",
  };

  return (
    <>
      <BlogDetailsContent data={filterData} />
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = blogData.map((post) => ({
    params: { eachId: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { eachId } = params;
  const filterData = blogData.filter((item) => item.slug === eachId);

  return {
    props: {
      blogPost: filterData[0] || null,
    },
  };
};

export default BlogDetails;
