'use client';
import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import emailjs from '@emailjs/browser';

import { CountryCode } from 'constants/CountryCodes';

import PartnersModal from './PartnersModal';
import PartnerCountrySelect from './PartnerCountrySelect';
import {} from 'react-phone-number-input';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';

import { configDotenv } from 'dotenv';

const userid = process.env.NEXT_PUBLIC_PARTNERS_EMAILJS_USER_ID;
const templeteid = process.env.NEXT_PUBLIC_PARTNERS_EMAILJS_TEMPLATE_ID;
const serviceid = process.env.NEXT_PUBLIC_PARTNERS_EMAILJS_SERVICE_ID;

const PartnerForm = () => {
  const [selectedOption, setSelectedOption] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState(false);
  const [PhoneError, setPhoneError] = React.useState();

  const PartnerFormData = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    country: '',
    linkedin_profile_link: '',
  };

  emailjs.init(userid);

  const options = CountryCode?.map((opt) => opt?.name);

  const profileValidationSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(3, 'First name must be at least 3 characters')
      .max(25, 'First name must be at most 25 characters')
      .required('First Name is required'),
    last_name: Yup.string()
      .min(3, 'Last name must be at least 3 characters')
      .max(25, 'Last name must be at most 25 characters')
      .required('Last Name is required'),
    email: Yup.string()
      .email('Invalid email')
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        'Invalid email address format'
      )
      .required('Email is required'),
    linkedin_profile_link: Yup.string()
      .required('LinkedIn Profile is required')
      .matches(
        /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/,
        'Invalid LinkedIn Profile URL: Must be a valid URL and contain "linkedin.com"'
      ),
    phone_number: Yup.string()
      .test('phone', 'Invalid phone number', (value) =>
        value ? isValidPhoneNumber(value) : true
      )
      .required('Phone number is required'),
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldError,
    setFieldValue,
  } = useFormik({
    initialValues: PartnerFormData,
    validationSchema: profileValidationSchema,
    onSubmit: async (values, action) => {
      console.log(values, 'values');

      try {
        values.country = selectedOption;

        const emailResult = await emailjs.send(serviceid, templeteid, {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          phone_number: values.phone_number,
          country: values.country,
          linkedin_profile_link: values.linkedin_profile_link,
        });

        if (emailResult.status === 200) {
          action.resetForm();
          values.phone_number = '';
          setTimeout(() => {
            setShowModal(!showModal);
            setModalTitle('Your data has been successfully submitted');
            setTimeout(() => {
              window.open('https://calendly.com/esparktalents/', 'blank');
              setShowModal(showModal);
            }, 2000);
          }, 2000);
        }
      } catch (error) {
        action.resetForm();
        setTimeout(() => {
          setShowModal(!showModal);
          setModalTitle('Unfortunately, your data could not be submitted');
          setTimeout(() => {
            window.open('https://calendly.com/esparktalents/', 'blank');
            setShowModal(showModal);
          }, 2000);
        }, 2000);

        console.error('Error submitting the form:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handlePhoneChange = (event) => {
    console.log(event, 'eventss');
    setFieldValue((values.phone_number = event));
  };

  return (
    <div>
      <div className="partner-form">
        <form>
          <div className="partner-form-title">
            <h1>Join Our Program Today</h1>
          </div>
          <div className="partner-form-full-name">
            <div className="partner-form-firstname">
              <label htmlFor="" className="label">
                First Name<span className="starick">*</span>
              </label>
              <input
                type="text"
                className="input"
                name="first_name"
                placeholder="First Name"
                value={values?.first_name}
                onChange={handleChange}
              />
              {touched?.first_name && errors?.first_name && (
                <span className="error-message">{errors?.first_name}</span>
              )}
            </div>
            <div className="partner-form-lastname">
              <label htmlFor="" className="label">
                Last Name<span className="starick">*</span>
              </label>
              <input
                type="text"
                className="input"
                placeholder="Last Name"
                name="last_name"
                value={values?.last_name}
                onChange={handleChange}
              />
              {touched?.last_name && errors?.last_name && (
                <span className="error-message">{errors?.last_name}</span>
              )}
            </div>
          </div>
          <div className="partner-form-your-email-adress">
            <label htmlFor="" className="label">
              Your Email Address<span className="starick">*</span>
            </label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              value={values?.email}
              onChange={handleChange}
            />
            {touched?.email && errors?.email && (
              <span className="error-message">{errors?.email}</span>
            )}
          </div>
          <div className="partner-form-phone-number">
            <label htmlFor="" className="label">
              Phone Number<span className="starick">*</span>
            </label>
            <div className="partner-form-phone-number-input-box">
              <div className="input-box-phone-number">
                <PhoneInput
                  placeholder="Enter phone number"
                  value={values.phone_number}
                  id={'phone_number'}
                  defaultCountry={'PK'}
                  onChange={handlePhoneChange}
                />
                {/* {values?.phone_number ? (
                  isValidPhoneNumber(values?.phone_number) ? undefined : (
                    <span className="error-message">Invalid phone number</span>
                  )
                ) : null} */}

                {touched?.phone_number && errors?.phone_number && (
                  <span className="error-message">{errors?.phone_number}</span>
                )}
              </div>
            </div>
          </div>
          <div className="partner-form-Country">
            <label htmlFor="" className="label">
              Which Country are you Located in?
            </label>
            <PartnerCountrySelect
              options={options}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
          <div className="partner-form-LinkedIn-Profile">
            <label htmlFor="" className="label">
              Your LinkedIn Profile <span className="starick">*</span>
            </label>
            <input
              type="text"
              className="input"
              name="linkedin_profile_link"
              value={values?.linkedin_profile_link}
              placeholder="linkedin.com"
              onChange={handleChange}
            />
            {touched?.linkedin_profile_link &&
              errors?.linkedin_profile_link && (
                <span className="error-message">
                  {errors?.linkedin_profile_link}
                </span>
              )}
          </div>
          <div className="partner-form-button">
            <button onClick={handleSubmit} type="button">
              Schedule a Meeting
            </button>
          </div>
        </form>
        <PartnersModal
          title={modalTitle}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default PartnerForm;
