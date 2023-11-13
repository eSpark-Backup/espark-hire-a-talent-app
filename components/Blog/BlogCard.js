import React, { useState, useEffect } from "react";
import Link from "next/link";

const BlogCard = ({ item }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const allCategories = [
    ...new Set(item?.flatMap((eachCard) => eachCard.title)),
  ];

  const filtereditem =
    selectedCategory === "All"
      ? item
      : item.filter((eachCard) => eachCard.title.includes(selectedCategory));

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filtereditem?.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filtereditem?.length / postsPerPage);
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
  }, [item]);

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
          <a href="#"
            key={page}
            className={isSelected ? "current page-numbers" : "page-numbers"}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </a>
        );
      } else if (buttons[buttons.length - 1] !== ellipsis) {
        buttons.push(ellipsis);
      }
    }
    return buttons;
  };
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {currentPosts?.map((eachCard, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-blog-post">
                  <div className="image">
                    <Link href={`/blogs/${eachCard.slug}`}>
                      <a className="d-block">
                        <img src={eachCard.imageLink} alt={eachCard.altTag} />
                      </a>
                    </Link>
                    <span className="date">{eachCard?.postedBy?.date}</span>
                  </div>

                  <div className="content">
                    <h3>
                      <Link href={`/blogs/${eachCard.slug}`}>
                        <a>{eachCard?.title}</a>
                      </Link>
                    </h3>
                    <p>{eachCard?.mainParagraph}</p>

                    {/* <Link href="/blog-details"> */}
                    <Link href={`/blogs/${eachCard.slug}`}>
                      <a className="default-btn">
                        <span className="ri-arrow-right-s-line"></span>
                        Read More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {filtereditem?.length > postsPerPage ? (
          <nav className="pagination-area">
            <ul className="nav-links">
              <li>
                <a href="#"
                  onClick={handlePreviousClick}
                  className={
                    currentPage === 1 ? "page-numbers disabled" : "page-numbers"
                  }
                  style={{
                    cursor: currentPage === 1 ? "default" : "pointer",
                  }}
                >
                  <i className="ri-arrow-left-line"></i>
                </a>
              </li>
              {renderPaginationButtons()}
              <li>
                <a href="#"
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
                </a>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </>
  );
};

export default BlogCard;
