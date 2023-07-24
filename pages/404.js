import React from 'react'
import Link from 'next/link'

export default function Custom404Page() {
  return (
    <>
      <div className='container text-center ptb-100'>
        <img 
          src="/images/404Error.png" 
          alt="404 Error" 
        />

        <h1 className='mt-4 mb-3'>Error 404 : Page Not Found</h1>

        <p className='mb-4'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

        <Link href="/">
          <a className="default-btn style-two">
            Back to Homepage 
            <span className='ri-arrow-right-s-line'></span>
          </a>
        </Link>
      </div>
    </>
  )
}
