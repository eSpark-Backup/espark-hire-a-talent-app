import React from 'react'
import Navbar from '@/components/Layout/Navbar'
import BlogDetailsContent from '@/components/Blog/BlogDetailsContent'
import Footer from '@/components/Layout/Footer'

export default function BlogDetails() {
  return (
    <>
      <Navbar />
      
      <BlogDetailsContent />

      <Footer />
    </>
  )
}
