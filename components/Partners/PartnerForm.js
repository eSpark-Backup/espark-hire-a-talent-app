import React from 'react';
import PartnerSelect from './PartnerSelect';
import { countries } from 'constants/partnersConstants';
import { useFormik } from 'formik';
import { profileValidationSchema } from './Schema/partnerFormSchema';

const PartnerForm = () => {
  const PartnerFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: '',
    socialLink: '',
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: PartnerFormData,
    validationSchema: profileValidationSchema,
    onSubmit: (values, action) => {
      console.log(values, 'values');
      console.log(errors, 'errors');
      action.resetForm();
    },
  });
  return (
    <div>
      <div className="partner-form">
        <form className="">
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
                name="firstName"
                value={values?.firstName}
                onChange={handleChange}
              />
              {touched?.firstName && errors?.firstName && (
                <span className="error-message">{errors?.firstName}</span>
              )}
            </div>
            <div className="partner-form-lastname">
              <label htmlFor="" className="label">
                Last Name<span className="starick">*</span>
              </label>
              <input
                type="text"
                className="input"
                name="lastName"
                value={values?.lastName}
                onChange={handleChange}
              />
              {touched?.lastName && errors?.lastName && (
                <span className="error-message">{errors?.lastName}</span>
              )}
            </div>
          </div>
          <div className="partner-form-your-email-adress">
            <label htmlFor="" className="label">
              Your Email adress<span className="starick">*</span>
            </label>
            <input
              type="email"
              className="input"
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
            <input
              type="number"
              className="input"
              name="phoneNumber"
              value={values?.phoneNumber}
              placeholder="+00 00000000"
              onChange={handleChange}
            />
            {touched?.phoneNumber && errors?.phoneNumber && (
              <span className="error-message">{errors?.phoneNumber}</span>
            )}
          </div>
          <div className="partner-form-Country">
            <label htmlFor="" className="label">
              Which Country are you Located in?
            </label>
            <PartnerSelect
              option={countries}
              name={'country'}
              value={values?.country}
              onChange={handleChange}
            />
            {touched?.country && errors?.country && (
              <span className="error-message">{errors?.country}</span>
            )}
          </div>
          <div className="partner-form-LinkedIn-Profile">
            <label htmlFor="" className="label">
              Your LinkedIn Profile <span className="starick">*</span>
            </label>
            <input
              type="text"
              className="input"
              name="socialLink"
              value={values?.socialLink}
              placeholder="necessary"
              onChange={handleChange}
            />
            {touched?.socialLink && errors?.socialLink && (
              <span className="error-message">{errors?.socialLink}</span>
            )}
          </div>
          <div className="partner-form-button">
            <button onClick={handleSubmit} className="">
              Schedule a Meeting
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PartnerForm;
