import Link from "next/link";
import React from "react";

const NewsletterForm2 = () => {
  return (
    <>
      <div className="subscribe2-area pt-100">
        <div className="container-fluid px-0">
          <div className="page-title-area2">
            <div className="subscribe2-inner">
              {/* <span className="sub-title">READY TO GET STARTED</span> */}
              <h2>
                Boosts Your Company Faster <br /> with Amazing eSpark Talent
              </h2>
              <p>
                Accelerate your projects and reach your goals quickly with
                highly experienced <br /> tech experts with in-depth knowledge
                of the industry.
              </p>
              <div className="newsletter-form">
                <Link href="https://calendly.com/esparktalents/60min?month=2023-09">
                  <a>
                    <button type="submit">Schedule a Meeting</button>
                  </a>
                </Link>
              </div>
            </div>
            <div className="shape1">
              <img src="/images/cta/ctaImage1.png" alt="image" />
            </div>
            <div className="shape3">
              <img src="/images/cta/ctaImage2.png" alt="image" />
            </div>
            <div className="shape4">
              <img src="/images/cta/ctaImage3.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterForm2;
