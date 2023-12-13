import React from "react";
import { useRouter } from "next/router";
import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";

import { blogData } from "constants/blogConstants";

const BlogDetails = ({ blogPost }) => {
  const router = useRouter();
  const getId = router.query.eachId;
  const filterData = blogData?.filter((item) => item?.slug === getId);
  const props = {
    title: "set default title",
    metaDescription: "set default metaDescription",
  };

  return (
    <>
      <BlogDetailsContent data={filterData} blogPost={blogPost} />
    </>
  );
};

const client = createClient({
  projectId: "93d1bm1e",
  dataset: "production",
  useCdn: true,
});

export const dynamic = "force-dynamic";

export const getStaticPaths = async () => {
  try {
    // Fetch slugs from Sanity
    const slugs = await client.fetch(
      '*[_type == "blog"] { "slug": slug.current }'
    );

    // Create paths with the retrieved slugs
    const paths = slugs.map((slug) => ({
      params: { eachId: slug.slug },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching slugs from Sanity:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async ({ params }) => {
  const { eachId } = params;

  try {
    // Fetch data from Sanity for the specific blog post
    const sanityData = await client.fetch(
      `*[_type == "blog" && slug.current == $slug][0] {
        ...,
        'slug': slug.current,
        'author': author-> {...}
      }`,
      { slug: eachId }
    );

    return {
      props: {
        blogPost: sanityData || null,
      },

      // Revalidate the data at most once every 10 minutes
      revalidate: 60 * 10,
    };
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return {
      notFound: true,
    };
  }
};

export default BlogDetails;
