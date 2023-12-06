import React from 'react';
import { countries } from 'constants/partnersConstants';
import { useFormik } from 'formik';
import { profileValidationSchema } from './Schema/partnerFormSchema';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';
import PartnerCustomDropdown from './PartnerCustomDropdown';

const PartnerForm = () => {
  const [selectedOption, setSelectedOption] = React.useState('Please Select');
  const options = countries?.map((opt) => opt?.option);

  const router = useRouter();
  emailjs.init('hyXwjEdPoM5uV-RK8');

  const PartnerFormData = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    country: '',
    linkedin_profile_link: '',
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: PartnerFormData,
    validationSchema: profileValidationSchema,
    onSubmit: (values, action) => {
      values.country = selectedOption;
      try {
        emailjs
          .send('service_ac1wtgm', 'template_6y49v0k', {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            phone_number: values.phone_number,
            country: values.country,
            linkedin_profile_link: values.linkedin_profile_link,
          })
          .then(({ status }) => {
            if (status == 200) {
              action.resetForm();
              router.push('https://calendly.com/esparktalents/');
            } else {
              router.push('https://calendly.com/esparktalents/');
            }
          }),
          (error) => {
            console.log(error);
            router.push('https://calendly.com/esparktalents/');
          };
      } catch (error) {
        console.error('Error submitting the form:', error);
      }
    },
  });

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
              name="phone_number"
              value={values?.phone_number}
              placeholder="+0000000000"
              onChange={handleChange}
            />
            {touched?.phone_number && errors?.phone_number && (
              <span className="error-message">{errors?.phone_number}</span>
            )}
          </div>
          <div className="partner-form-Country">
            <label htmlFor="" className="label">
              Which Country are you Located in?
            </label>
            <PartnerCustomDropdown
              option={options}
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
              placeholder="necessary"
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
      </div>
    </div>
  );
};

export default PartnerForm;
