import React from "react";
import Link from "next/link";

const PageTitle = ({ pageTitle, homeText, pageSubTitle }) => {
  return (
    <div className="page-title-area">
      <div className="container">
        <div className="page-title-content text-center">
          <h1>{pageTitle}</h1>
          <ul>
            <li>
              <Link href="/">{homeText}</Link>
            </li>
            <li>{pageSubTitle}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
