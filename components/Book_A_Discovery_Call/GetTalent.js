import Link from 'next/link';
import React from 'react';

const GetTalent = ({ data }) => {
  return (
    <div className="GetTalent subscribe2-area pt-0">
      <div className="container-fluid px-0">
        <div className="get-talent">
          <div className="get-talent-content">
            {/* <span className="sub-title">READY TO GET STARTED</span> */}
            <h3>Let’s assemble your team.</h3>

            <div className="newsletter-form">
              <Link legacyBehavior href="https://calendly.com/esparktalents/60min?month=2023-09">
                <a target="_blank">
                  <button type="submit">Get Talent Now</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTalent;
