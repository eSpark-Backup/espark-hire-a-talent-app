import React from 'react';
import PageTitle from '@/components/Common/PageTitle';
import BlogCard from '@/components/Blog/BlogCard';
import NewsletterForm2 from '@/components/Common/NewsletterForm2';

import { blogData } from 'constants/blogConstants';

export default function Blog() {
  return (
    <>
      <PageTitle homeText="Home" pageTitle="Blogs" pageSubTitle={'Blogs'} />
      <BlogCard item={blogData} />
      <NewsletterForm2 />
    </>
  );
}
