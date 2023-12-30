import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Custom404Page() {
  return (
    <>
      <div className="container text-center ptb-100">
        <Image
          src="/images/404Error.png"
          alt="404 Error"
          width={500}
          height={200}
        />

        <h1 className="mt-4 mb-3">Error 404 : Page Not Found!</h1>

        <p className="mb-4">
          The page you are looking for might have been removed had its name
          changed or is temporarily.
        </p>

        <Link href="/" className="default-btn style-two">
          Back to Homepage
          <span className="ri-arrow-right-s-line"></span>
        </Link>
      </div>
    </>
  );
}
