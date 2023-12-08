import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const PartnerFlagDropdown = ({ option, selectedFlag, setSelectedFlag }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedFlag(option);
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
      className={`custom-dropdown-flag ${isOpen ? 'open' : ''}`}
      ref={dropdownRef}
    >
      <div className="dropdown-header-Flag" onClick={toggleDropdown}>
        <div className="dropdown-header-title">
          <img src={selectedFlag} alt={selectedFlag} width={40} height={40} />
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
            {option?.map((item) => (
              <div className="opt" onClick={() => handleOptionClick(item)}>
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
