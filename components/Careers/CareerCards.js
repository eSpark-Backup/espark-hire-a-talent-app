import React, { useState, useEffect } from "react";
import Link from "next/link";

const CareerCards = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const allCategories = [
    ...new Set(data.flatMap((eachCard) => eachCard.heading)),
  ];

  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((eachCard) => eachCard.heading.includes(selectedCategory));

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredData.length / postsPerPage);
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
  }, [data]);

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

  return (
    <>
      <div>
        <select
          className="dropdown"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option className="option" value="All" key="all">
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
        {currentPosts?.map((eachCard, index) => (
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
              <Link legacyBehavior href={eachCard?.link}>
                <a className="default-btn style-two" target="_blank">
                  <span className="ri-arrow-right-s-line"></span>
                  Apply Now
                </a>
              </Link>
            </div>
          </div>
        ))}
        {filteredData.length > postsPerPage ? (
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
