import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const CareerCards = ({ jobs, jobCategories }) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const totalPages = Math.ceil(jobs.length / postsPerPage);
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    setSelectedCategory("All");
    setCurrentPage(1);
  }, [jobs]);

  const renderPaginationButtons = () => {
    const buttons = [];
    let ellipsis = "...";

    for (let page = 1; page <= totalPages; page++) {
      const isSelected = page === currentPage;

      if (
        page === 1 ||
        page === totalPages ||
        Math.abs(page - currentPage) <= 1
      ) {
        buttons.push(
          <button
            key={page}
            className={isSelected ? "current page-numbers" : "page-numbers"}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        );
      } else if (buttons[buttons.length - 1] !== ellipsis) {
        buttons.push(ellipsis);
      }
    }
    return buttons;
  };

  const handleJobCategoryChange = (e) => {
    // set query param to selected category

    router.push({
      pathname: router.pathname,
      query: { ...router.query, jobCategory: e.target.value },
    });

    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <div>
        <select className="dropdown" onChange={handleJobCategoryChange}>
          <option className="option" value="all" key="all">
            All
          </option>
          {jobCategories.map((category, index) => (
            <option
              className="option"
              key={`job-category-${index}`}
              value={category._id}
            >
              {category.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        {jobs.map((job, index) => (
          <div className="row career-card" key={index}>
            <div className="col-lg-3 col-sm-12 career-card-title">
              <h3>{job.title}</h3>
              <p>
                {job.location}
                <br />
                {job.date}
              </p>
            </div>
            <hr className="horizonal-line" />
            <div className="col-lg-6 col-sm-12 career-card-description">
              <h3>Description</h3>
              <p>{job.description}</p>
            </div>
            <div className="col-lg-3 col-sm-12 career-card-button">
              <Link href={job.applyLink}>
                <span className="default-btn style-two" target="_blank">
                  <span className="ri-arrow-right-s-line"></span>
                  Apply Now
                </span>
              </Link>
            </div>
          </div>
        ))}
        {jobs.length > postsPerPage ? (
          <nav className="pagination-area">
            <ul className="nav-links">
              <li>
                <button
                  onClick={handlePreviousClick}
                  className={
                    currentPage === 1 ? "page-numbers disabled" : "page-numbers"
                  }
                  style={{
                    cursor: currentPage === 1 ? "default" : "pointer",
                  }}
                >
                  <i className="ri-arrow-left-line"></i>
                </button>
              </li>
              {renderPaginationButtons()}
              <li>
                <button
                  className={
                    currentPage === totalPages
                      ? "page-numbers disabled"
                      : "page-numbers"
                  }
                  style={{
                    cursor: currentPage === totalPages ? "default" : "pointer",
                  }}
                  onClick={handleNextClick}
                >
                  <i className="ri-arrow-right-line"></i>
                </button>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </>
  );
};

export default CareerCards;
