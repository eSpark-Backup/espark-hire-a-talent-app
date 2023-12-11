import React, { useCallback, useEffect, useRef, useState } from "react";

const CustomDropdown = (props) => {
  const {
    data,
    value,
    setCompany,
    setCountry,
    country,
    error,
    flag,
    setFlag,
    inter,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDocumentClick = useCallback(
    (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    },
    [dropdownRef]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen, handleDocumentClick]);

  return (
    <div
      className={`custom-dropdown ${isOpen ? "open" : ""}`}
      ref={dropdownRef}
    >
      <div
        className={`dropdown-header ${inter.className}`}
        onClick={toggleDropdown}
      >
        <span className="country-span">
          {country && flag ? (
            <div className="country-flag" style={{ marginRight: "10px" }}>
              <img src={flag} alt="flag" />
            </div>
          ) : null}
          {value}
        </span>
        <div className="custom-arrow">
          <img src="/images/book-a-meeting/icons/down-arrow.png" alt="icon" />
        </div>
      </div>

      {error ? (
        <p className="error-para">
          Please select {!country ? "Company Size" : "Country"}
        </p>
      ) : null}

      <div className={`dropdown-options ${error ? "error-options" : ""}`}>
        {isOpen && (
          <div className="options-container">
            <div className={`single-option ${inter.className} disabled-opt`}>
              Please Select
            </div>
            {data.map((opt) =>
              country ? (
                <div
                  key={opt.id}
                  className={`countries-options single-option ${inter.className}`}
                  onClick={() => {
                    setCountry(opt.option);
                    setFlag(opt.image);
                    setIsOpen(false);
                  }}
                >
                  <div className="country-name">{opt.option}</div>
                  <div className="country-flag">
                    <img src={opt.image} alt="flag" />
                  </div>
                </div>
              ) : (
                <div
                  key={opt.id}
                  className={`single-option ${inter.className}`}
                  onClick={() => {
                    setCompany(opt.option);
                    setIsOpen(false);
                  }}
                >
                  {opt.option}
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
