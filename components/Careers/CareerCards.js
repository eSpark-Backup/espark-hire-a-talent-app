import React, { useState, useEffect } from "react";
import Link from "next/link";

const CareerCards = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);
  const allCategories = [
    ...new Set(data.flatMap((eachCard) => eachCard.category)),
  ];
  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((eachCard) => eachCard.category.includes(selectedCategory));
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handlePrevious = (pageNumber) => {
    if (currentPage == 1) {
      return null;
    } else {
      setCurrentPage(pageNumber);
    }
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setSelectedCategory("All");
    setCurrentPage(1);
  }, [data]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  return (
    <>
      <div>
        <select
          className="dropdown"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option className="option" value="All">
            All
          </option>
          {allCategories.map((category, index) => (
            <option className="option" key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        {currentPosts.map((eachCard, index) => (
          <div className="row career-card" key={index}>
            <div className="col-lg-3 col-sm-12 career-card-title">
              <h3>{eachCard?.heading}</h3>
              <p>
                {eachCard.location[0]}
                <br />
                {eachCard.date}
              </p>
            </div>
            <hr className="horizonal-line" />
            <div className="col-lg-6 col-sm-12 career-card-description">
              <h3>Description</h3>
              <p>{eachCard?.description}</p>
            </div>
            <div className="col-lg-3 col-sm-12 career-card-button">
              <Link href={eachCard?.link}>
                <a className="default-btn style-two" target="_blank">
                  <span className="ri-arrow-right-s-line"></span>
                  Apply Now
                </a>
              </Link>
            </div>
          </div>
        ))}
        {currentPosts.length >= 1 ? (
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="pagination-area">
              <div className="nav-links">
                {pageNumbers.map((pageNumber) => (
                  <span
                    key={pageNumber}
                    className={
                      pageNumber === currentPage
                        ? "current page-numbers"
                        : "page-numbers"
                    }
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </span>
                ))}
                {currentPage < pageNumbers.length && (
                  <a
                    className="next page-numbers"
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    <i className="ri-arrow-right-line"></i>
                  </a>
                )}
                {currentPage >= pageNumbers.length && (
                  <a
                    className="next page-numbers"
                    onClick={() => handlePrevious(currentPage - 1)}
                  >
                    <i className="ri-arrow-left-line"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CareerCards;
