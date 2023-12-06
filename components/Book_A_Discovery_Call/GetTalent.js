import React from 'react';
import Link from 'next/link';

const GetTalent = ({ data }) => {
  return (
    <div className="GetTalent subscribe2-area pt-0">
      <div className="container-fluid px-0">
        <div className="get-talent">
          <div className="get-talent-content">
            <h3>Let’s assemble your team.</h3>

            <div className="newsletter-form">
              <Link
                href="https://calendly.com/esparktalents/60min?month=2023-09"
                target="_blank"
              >
                <button type="submit">Get Talent Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTalent;
