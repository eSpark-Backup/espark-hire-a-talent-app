import React, { useState, useEffect, useRef } from 'react';

const PartnerFlagDropdown = ({
  option,
  selectedFlag,
  countryCode,
  selectedCode,
  setSelectedCode,
  findCountryName,
  setSelectedFlag,
  setSelectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedFlag(option);
    setIsOpen(false);
  };

  React.useEffect(() => {
    setSelectedOption(findCountryName);
    setSelectedCode(countryCode);
  }, [selectedFlag]);

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
      className={`custom-dropdown-flag ${isOpen ? 'open' : ''}`}
      ref={dropdownRef}
    >
      <div className="dropdown-header-Flag" onClick={toggleDropdown}>
        <div className="dropdown-header-title">
          <img
            src={selectedFlag}
            alt={selectedFlag}
            width={'40px'}
            height={'40px'}
          />
        </div>
        <div className="partner-form-country-code">
          <p>{selectedCode}</p>
        </div>
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
                <img src={item} alt={item} width={40} height={40} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerFlagDropdown;
