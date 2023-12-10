import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function ComingSoon() {
  return (
    <div className="coming-soon-main">
      <h1 className="text-center">Great things coming soon.</h1>
      <Image src="/images/coming-soon.png" width={300} height={300} />
      <br />
      <Link href="/" className="coming-soon-button text-center py-2">
        Go To Home
      </Link>
    </div>
  );
}

export default ComingSoon;
