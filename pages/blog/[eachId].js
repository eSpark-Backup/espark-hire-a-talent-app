import React from "react";
import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";
import { useRouter } from "next/router";
import { blogData } from "constants/blogConstants";

export default function BlogDetails() {

  const router = useRouter();
  const getId = router.query.eachId;
  const filterData = blogData?.filter((item) => item?.id === parseInt(getId));
  console.log("blog---",filterData)
  return (
    <>
      <BlogDetailsContent  data={filterData} />
    </>
  );
}
