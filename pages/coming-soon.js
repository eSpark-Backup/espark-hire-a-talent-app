import React from "react";
import Link from "next/link";
// import img from '../public/images/coming-soon.png'

function comingSoon() {
  return (
    <div className="coming-soon-main">
      <h1 className="text-center">Great things coming soon.</h1>
      <img src="/images/coming-soon.png" style={{width:"400px", height:"300px"}}/>
      {/* <br /> */}
      <Link href="/">
        <a className="coming-soon-button text-center py-2">Go To Home</a>
      </Link>
    </div>
  );
}

export default comingSoon;
