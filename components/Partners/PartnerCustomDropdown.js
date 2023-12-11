import React, { useState, useEffect, useRef } from 'react';

const PartnerCustomDropdown = ({
  option,
  selectedOption,
  setSelectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleDocumentClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleDocumentClick);
    } else {
      document.removeEventListener('click', handleDocumentClick);
    }

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isOpen]);

  return (
    <div
      className={`custom-dropdown ${isOpen ? 'open' : ''}`}
      ref={dropdownRef}
    >
      <div className="dropdown-header" onClick={toggleDropdown}>
        <div className="dropdown-header-title">{selectedOption}</div>
        <img
          src="/images/partners/arrow.svg"
          alt="arrow"
          className="custom-arrow"
        />
      </div>
      <div className="dropdown-options">
        {isOpen && (
          <div className="options-container">
            {option?.map((item, i) => (
              <div
                key={i}
                className="opt"
                onClick={() => handleOptionClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerCustomDropdown;
