import React from 'react';
import Link from 'next/link';

const ServiceSidebar = () => {
  return (
    <>
      <div className="service-sidebar">
        <div className="sidebar-box">
          <h3>Services List</h3>
          <ul>
            <li>
              <Link href="/service-details">
                Branding <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
            <li>
              <Link href="/service-details">
                Design <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
            <li>
              <Link href="/service-details">
                Content <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
            <li>
              <Link href="/service-details">
                Strategy <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
            <li>
              <Link href="/service-details">
                Marketing <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
            <li>
              <Link href="/service-details">
                Technology <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServiceSidebar;
