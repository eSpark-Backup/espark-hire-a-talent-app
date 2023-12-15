import React, { useCallback, useEffect, useRef, useState } from 'react';

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
    updateCountry,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

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

  const handleScroll = useCallback(() => {
    // Close the dropdown on scroll
    setIsOpen(false);
    setSearchTerm('');
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      // Handle arrow keys
      if (isOpen && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
        e.preventDefault();
        const optionsCount = filteredData.length;

        if (e.key === 'ArrowUp') {
          setSelectedOptionIndex(
            selectedOptionIndex === null
              ? optionsCount - 1
              : (selectedOptionIndex - 1 + optionsCount) % optionsCount
          );
        } else if (e.key === 'ArrowDown') {
          setSelectedOptionIndex(
            selectedOptionIndex === null
              ? 0
              : (selectedOptionIndex + 1) % optionsCount
          );
        }

        setIsOptionSelected(true);
      }
    },
    [isOpen, filteredData, selectedOptionIndex]
  );

  const handleKeyUp = useCallback(() => {
    setIsOptionSelected(false);
  }, []);

  const handleEnterKey = useCallback(() => {
    if (isOpen && selectedOptionIndex !== null) {
      const selectedOption = filteredData[selectedOptionIndex];
      setNumberCode(selectedOption.phone);
      setSelectedFlag(selectedOption.image);
      setCurrentPhoneLength(selectedOption.phoneLength);
      setIsOpen(false);
      updateCountry(selectedOption.option);
      setIsOptionSelected(true);
      inputRef.current && inputRef.current.focus();
      setSearchTerm(''); // Clear the input text

      // Remove the selected class after a short delay
      setTimeout(() => {
        setIsOptionSelected(false);
      }, 300);
    }
  }, [
    isOpen,
    filteredData,
    selectedOptionIndex,
    setNumberCode,
    setSelectedFlag,
    setCurrentPhoneLength,
    updateCountry,
  ]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleDocumentClick);
      window.addEventListener('scroll', handleScroll);
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
    } else {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [isOpen, handleDocumentClick, handleScroll, handleKeyDown, handleKeyUp]);

  useEffect(() => {
    // Filter the data based on the search term
    const filteredOptions = data.filter((opt) => {
      if (searchTerm.includes('+')) {
        return opt.phone[0].toLowerCase().includes(searchTerm.toLowerCase() );
      } else {
        return opt.phone[0]
          .toLowerCase()
          .includes(`+${searchTerm.toLowerCase()}`);
      }
    });
    setFilteredData(filteredOptions);
    setSelectedOptionIndex(null); // Reset selected option index when filtering
  }, [data, searchTerm]);

  return (
    <div
      className={`custom-dropdown code-dropdown ${
        isOpen ? 'open' : ''
      } ${error}`}
      ref={dropdownRef}
    >
      <div
        className={`dropdown-header ${inter.className} ${
          numberCode !== '' ? 'dark-value' : ''
        }`}
        onClick={toggleDropdown}
      >
        <span className="country-span">
          {selectedFlag && (
            <div className="country-flag" style={{ marginRight: '10px' }}>
              <img src={selectedFlag} alt="flag" />
            </div>
          )}
          {numberCode}
        </span>
        <div className="custom-arrow code-arrow">
          <img src="/images/book-a-meeting/icons/down-arrow.png" alt="icon" />
        </div>
      </div>

      <div className={`dropdown-options ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <div className="options-container">
            {/* Add search input */}
            <div className="search-input-container">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Display filtered options */}
            <div className="options-scroll-container">
              {filteredData.map((opt, index) => (
                <div
                  key={opt.id}
                  className={`countries-options single-option ${
                    inter.className
                  } ${index === selectedOptionIndex ? 'selected' : ''} ${
                    isOptionSelected && index === selectedOptionIndex
                      ? 'highlight'
                      : ''
                  }`}
                  onClick={() => {
                    setNumberCode(opt.phone);
                    setSelectedFlag(opt.image);
                    setCurrentPhoneLength(opt.phoneLength);
                    setIsOpen(false);
                    updateCountry(opt.option);
                    setIsOptionSelected(true);
                    inputRef.current && inputRef.current.focus();
                    setSearchTerm(''); // Clear the input text

                    // Remove the selected class after a short delay
                    setTimeout(() => {
                      setIsOptionSelected(false);
                    }, 300);
                  }}
                >
                  <div className="country-flag">
                    <img src={opt.image} alt="flag" />
                  </div>
                  <div className="country-name">{opt.phone}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
