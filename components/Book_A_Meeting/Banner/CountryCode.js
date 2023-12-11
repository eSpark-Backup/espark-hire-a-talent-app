import React, { useCallback, useEffect, useRef, useState } from "react";

const CustomDropdown = (props) => {
  const {
    data,
    error,
    inter,
    numberCode,
    selectedFlag,
    setNumberCode,
    setSelectedFlag,
    setCurrentPhoneLength,
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
      className={`custom-dropdown code-dropdown ${
        isOpen ? "open" : ""
      } ${error}`}
      ref={dropdownRef}
    >
      <div
        className={`dropdown-header ${inter.className}`}
        onClick={toggleDropdown}
      >
        <span className="country-span">
          {selectedFlag && (
            <div className="country-flag" style={{ marginRight: "10px" }}>
              <img src={selectedFlag} alt="flag" />
            </div>
          )}
          {numberCode}
        </span>
        <div className="custom-arrow code-arrow">
          <img src="/images/book-a-meeting/icons/down-arrow.png" alt="icon" />
        </div>
      </div>

      <div className={`dropdown-options`}>
        {isOpen && (
          <div className="options-container">
            {data.map((opt) => (
              <div
                key={opt.id}
                className={`countries-options single-option ${inter.className}`}
                onClick={() => {
                  setNumberCode(opt.phone);
                  setSelectedFlag(opt.image);
                  setCurrentPhoneLength(opt.phoneLength);
                  setIsOpen(false);
                }}
              >
                <div className="country-flag">
                  <img src={opt.image} alt="flag" />
                </div>
                <div className="country-name">{opt.phone}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
