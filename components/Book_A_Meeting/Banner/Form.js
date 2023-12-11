import React, { useState, useEffect, useRef, useCallback } from "react";

import emailjs from "@emailjs/browser";

import Link from "next/link";

import { Inter } from "next/font/google";

import countries from "/constants/countries.json";
import CustomDropdown from "./CustomDropdown";
import PartnerFlagDropdown from "./CountryCode";

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
  const [flag, setFlag] = useState("");

  const [errorState, setErrorState] = useState({
    first_name: false,
    last_name: false,
    company_email: false,
    company_size: false,
    phone_number: false,
    country: false,
  });
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [phoneLength, setPhoneLength] = useState();
  const [numberCode, setNumberCode] = useState();
  const [selectedFlag, setSelectedFlag] = useState();
  const [currentPhoneLength, setCurrentPhoneLength] = useState();

  useEffect(() => {
    const detail = countries?.find((item) => item?.option === "Pakistan");

    setNumberCode(detail.phone[0]);
    setSelectedFlag(detail.image);
    setPhoneLength(detail.phoneLength);
    setCurrentPhoneLength(detail.phoneLength);
  }, [countries]);

  const handleInputchange = (key, value) => {
    if (key === "phone_number") {
      if (value.length > phoneLength || value.length < phoneLength) {
        setNumberError("Invalid number");
      } else if (value.length === phoneLength) {
        setNumberError("");
      }
    }

    setState((state) => ({ ...state, [key]: value }));
  };

  const redirectToCalendly = () => {
    window.open("https://calendly.com/esparktalents/60min", "_blank");
  };

  const onSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(state.company_email) && state.company_email !== "") {
      setEmailError("Invalid email address");
      setErrorState((errorState) => ({ ...errorState, company_email: true }));
    } else {
      setEmailError("");
      setErrorState((errorState) => ({ ...errorState, company_email: false }));
    }

    if (
      currentPhoneLength > +state.phone_number.length ||
      currentPhoneLength < +state.phone_number.length
    ) {
      setNumberError("Invalid number");
      setErrorState((errorState) => ({ ...errorState, phone_number: true }));
    } else {
      setNumberError("");
      setErrorState((errorState) => ({ ...errorState, phone_number: false }));
    }

    if (
      state.first_name === "" ||
      state.last_name === "" ||
      state.company_email === "" ||
      emailError !== "" ||
      state.company_size === "Please Select" ||
      state.phone_number === "" ||
      numberError !== "" ||
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
      const combineNumber = `${numberCode}${state.phone_number}`;
      emailjs.init("i97Hmgobdw1yJilSn");

      try {
        emailjs
          .send("service_h5qpxbn", "template_tpktgz5", {
            first_name: state.first_name,
            last_name: state.last_name,
            company_size: state.company_size,
            company_email: state.company_email,
            phone_number: combineNumber,
            country: state.country,
            company_name: "eSpark",
          })
          .then(({ status }) => {
            if (status === 200) {
              setState({
                first_name: "",
                last_name: "",
                company_email: "",
                company_size: "Please Select",
                phone_number: "",
                country: "Please Select",
              });

              setErrorState({
                first_name: false,
                last_name: false,
                company_email: false,
                company_size: false,
                phone_number: false,
                country: false,
              });

              setFlag("");
              redirectToCalendly();
            } else {
              redirectToCalendly();
            }
          })
          .catch((err) => {
            console.log(err);
            redirectToCalendly();
          });
      } catch (error) {
        console.error("Error submitting the form:", error);
        redirectToCalendly();
      }
    }
  };

  function createZeros(length) {
    const zerosArray = Array(length).fill(0);

    const zerosString = zerosArray.join("");

    return zerosString;
  }

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
                  errorState.company_email || emailError !== "" ? "error" : ""
                }`}
                placeholder="Company Email"
                value={state.company_email}
                onChange={(e) =>
                  handleInputchange("company_email", e.target.value)
                }
              />
              {errorState.company_email || emailError !== "" ? (
                <p className="error-para">
                  {emailError !== ""
                    ? emailError
                    : "Please enter Company Email"}
                </p>
              ) : null}
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 pr-0">
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
                inter={inter}
              />
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 pr-0">
            <div className="form-group">
              <label className="landing-form-label">
                Phone Number<span>*</span>
              </label>

              <div className="landing-form-phone-number-input-box">
                <PartnerFlagDropdown
                  data={countries}
                  error={
                    errorState.phone_number || numberError !== "" ? "error" : ""
                  }
                  errorState={errorState}
                  inter={inter}
                  numberCode={numberCode}
                  selectedFlag={selectedFlag}
                  setNumberCode={setNumberCode}
                  setSelectedFlag={setSelectedFlag}
                  setCurrentPhoneLength={setCurrentPhoneLength}
                />

                <input
                  type="number"
                  className={`form-control ${inter.className} ${
                    errorState.phone_number || numberError !== "" ? "error" : ""
                  }`}
                  placeholder={`${numberCode} ${createZeros(
                    currentPhoneLength
                  )}`}
                  value={state.phone_number}
                  onChange={(e) =>
                    handleInputchange("phone_number", e.target.value)
                  }
                />
              </div>

              {errorState.phone_number || numberError !== "" ? (
                <p className="error-para">
                  {numberError !== ""
                    ? numberError
                    : "Please enter Phone Number"}
                </p>
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
                flag={flag}
                setFlag={setFlag}
                inter={inter}
              />
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <p className="terms-tag">
              We respect your data. By submitting this form, you agree that we
              will contact you in relation to our products and services, in
              accordance with our{" "}
              <Link legacyBehavior href="/privacy-policy">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link legacyBehavior href="/terms-conditions">
                Terms of Service
              </Link>
              .
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

export default Form;
