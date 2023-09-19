import React from "react";
import Link from "next/link";
import NewsletterForm2 from "@/components/Common/NewsletterForm2";

function Career() {
  return (
    <>
      <div className="coming-soon-main">
        <h1 className="text-center">Great things coming soon.</h1>
        <img
          src="/images/coming-soon.png"
          style={{ width: "auto", height: "300px" }}
        />
        <br />
        <Link href="/">
          <a className="coming-soon-button text-center py-2">Go To Home</a>
        </Link>
      </div>
      <NewsletterForm2 />
    </>
  );
}

export default Career;
