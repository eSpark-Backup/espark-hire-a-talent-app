import React, { useState, useEffect, useRef, useCallback } from "react";

import Link from "next/link";

import { Inter } from "next/font/google";

import countries from "/constants/countries.json";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const Form = ({ companySize }) => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    company_email: "",
    company_size: "Please Select",
    phone_number: "",
    country: "Please Select",
  });

  const [errorState, setErrorState] = useState({
    first_name: false,
    last_name: false,
    company_email: false,
    company_size: false,
    phone_number: false,
    country: false,
  });

  const handleInputchange = (key, value) => {
    setState((state) => ({ ...state, [key]: value }));
  };

  const onSubmit = () => {
    if (
      state.first_name === "" ||
      state.last_name === "" ||
      state.company_email === "" ||
      state.company_size === "Please Select" ||
      state.phone_number === "" ||
      state.country === "Please Select"
    ) {
      setErrorState({
        first_name: state.first_name === "" ? true : false,
        last_name: state.last_name === "" ? true : false,
        company_email: state.company_email === "" ? true : false,
        company_size: state.company_size === "Please Select" ? true : false,
        phone_number: state.phone_number === "" ? true : false,
        country: state.country === "Please Select" ? true : false,
      });
    } else {
      emailjs
        .send(
          "service_h5qpxbn",
          "template_tpktgz5",
          state,
          "sales@esparktalent.com"
        )
        .then(
          ({ status }) => {
            if (status === 200) {
              window.open(
                "https://calendly.com/esparktalents/60min?month=2023-09",
                "_blank"
              );
            }
          },
          (err) => {
            // eslint-disable-next-line no-console
            console.log(err);
          }
        );
    }
  };

  return (
    <div className="landing-form">
      <form>
        <div className="row">
          <h3 className="landing-form-heading">Get Started</h3>

          <div className="col-lg-6 col-md-6 col-sm-12 pr-0">
            <div className="form-group">
              <label className="landing-form-label">
                First Name<span>*</span>
              </label>

              <input
                type="text"
                className={`form-control ${inter.className} ${
                  errorState.first_name ? "error" : ""
                }`}
                placeholder="First Name"
                value={state.first_name}
                onChange={(e) =>
                  handleInputchange("first_name", e.target.value)
                }
              />
              {errorState.first_name ? (
                <p className="error-para">Please enter First Name</p>
              ) : null}
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 pr-0">
            <div className="form-group">
              <label className="landing-form-label">
                Last Name<span>*</span>
              </label>

              <input
                type="text"
                className={`form-control ${inter.className} ${
                  errorState.last_name ? "error" : ""
                }`}
                placeholder="Last Name"
                value={state.last_name}
                onChange={(e) => handleInputchange("last_name", e.target.value)}
              />
              {errorState.last_name ? (
                <p className="error-para">Please enter Last Name</p>
              ) : null}
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 pr-0">
            <div className="form-group">
              <label className="landing-form-label">
                Company Email<span>*</span>
              </label>

              <input
                type="email"
                className={`form-control ${inter.className} ${
                  errorState.last_name ? "error" : ""
                }`}
                placeholder="Company Email"
                value={state.company_email}
                onChange={(e) =>
                  handleInputchange("company_email", e.target.value)
                }
              />
              {errorState.company_email ? (
                <p className="error-para">Please enter Company Email</p>
              ) : null}
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 pr-0">
            <div className="form-group">
              <label className="landing-form-label">
                Company Size<span>*</span>
              </label>

              <CustomDropdown
                data={companySize}
                value={state.company_size}
                setCompany={(value) =>
                  setState((state) => ({ ...state, company_size: value }))
                }
                error={errorState.company_size ? "error" : ""}
                errorState={errorState}
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 pr-0">
            <div className="form-group">
              <label className="landing-form-label">
                Phone Number<span>*</span>
              </label>

              <input
                type="tel"
                className={`form-control ${inter.className} ${
                  errorState.phone_number ? "error" : ""
                }`}
                placeholder="+92 00000000"
                value={state.phone_number}
                onChange={(e) =>
                  handleInputchange("phone_number", e.target.value)
                }
              />
              {errorState.phone_number ? (
                <p className="error-para">Please enter Phone Number</p>
              ) : null}
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 pr-0">
            <div className="form-group">
              <label className="landing-form-label">
                Which country are you located in?<span>*</span>
              </label>

              <CustomDropdown
                data={countries}
                value={state.country}
                setCountry={(value) =>
                  setState((state) => ({ ...state, country: value }))
                }
                country
                error={errorState.country ? "error" : ""}
                errorState={errorState}
              />
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <p className="terms-tag">
              We respect your data. By submitting this form, you agree that we
              will contact you in relation to our products and services, in
              accordance with our <Link href="/">Privacy Policy</Link> and{" "}
              <Link href="/">Terms of Service</Link>.
            </p>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <button
              type="button"
              className="book-demo"
              onClick={() => onSubmit()}
            >
              Book a Demo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const CustomDropdown = ({
  data,
  value,
  setCompany,
  setCountry,
  country,
  error,
  errorState,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [flag, setFlag] = useState("");

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDocumentClick = useCallback(
    (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        // Clicked outside the dropdown, close it
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
        className={`dropdown-header ${inter.className} ${error}`}
        onClick={toggleDropdown}
      >
        <span className="country-span">
          {country && flag ? (
            <div className="country-flag" style={{ marginRight: "10px" }}>
              <img src={flag} />
            </div>
          ) : null}
          {value}
        </span>
        <div className="custom-arrow">
          <img src="/images/book-a-meeting/icons/down-arrow.png" />
        </div>
      </div>

      {errorState.company_size || errorState.country ? (
        <p className="error-para">
          Please select {errorState.company_size ? "Company Size" : "Country"}
        </p>
      ) : null}

      <div className="dropdown-options">
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
                    setFlag(opt.flag);
                    setIsOpen(false);
                  }}
                >
                  <div className="country-name">{opt.option}</div>
                  <div className="country-flag">
                    <img src={opt.flag} />
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

export default Form;
