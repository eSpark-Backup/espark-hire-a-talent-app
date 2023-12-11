'use client';
import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';
import PartnerCustomDropdown from './PartnerCustomDropdown';
import { CountryCode } from 'constants/CountryCodes';
import PartnerFlagDropdown from './PartnerFlagDropdown';
import { validation } from '@/utils/validation';
import PartnersModal from './PartnersModal';

const PartnerForm = () => {
  const [selectedOption, setSelectedOption] = React.useState('Please Select');
  const [currentLength, setCurrentLength] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState(false);
  const [selectedFlag, setSelectedFlag] = React.useState(null);
  const router = useRouter();

  const PartnerFormData = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    country: '',
    linkedin_profile_link: '',
  };

  emailjs.init('hyXwjEdPoM5uV-RK8');

  React.useEffect(() => {
    const pakistanFlag = CountryCode?.filter(
      (item) => item?.name === 'Pakistan'
    )[0].image;
    setSelectedFlag(pakistanFlag);
  }, []);

  const options = CountryCode?.map((opt) => opt?.name);

  const flags = CountryCode?.map((flags) => flags?.image);

  const GetPhoneNumberLength = CountryCode?.filter(
    (item) => item?.image === selectedFlag
  )[0];

  const findCountryName = GetPhoneNumberLength?.name;
  const PhoneNumberCode = GetPhoneNumberLength?.phone[0];
  const PhoneLength = GetPhoneNumberLength?.phoneLength;

  const handlePhoneChange = (event) => {
    handleChange(event);
    setCurrentLength(event?.target?.value);
  };
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
        /^([a-zA-Z]+:\/\/|www\.)[^\s/$.?#].[^\s]*$/,
        'Invalid LinkedIn Profile URL'
      ),
    phone_number: Yup.string().test(
      'phone-number',
      'Invalid phone number',
      function (value) {
        const { phoneLength } = GetPhoneNumberLength;
        if (phoneLength) {
          return validatePhoneNumber(value, phoneLength);
        }
      }
    ),
  });
  const validatePhoneNumber = (phoneNumber, phoneLength) => {
    return phoneNumber && phoneNumber.length === phoneLength;
  };

  const isValid = validation(currentLength?.length, PhoneLength);

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: PartnerFormData,
    validationSchema: profileValidationSchema,
    onSubmit: async (values, action) => {
      try {
        const isValidPhoneNumber = validatePhoneNumber(
          currentLength,
          PhoneLength
        );

        if (!isValidPhoneNumber) {
          return;
        }

        values.country = selectedOption;
        values.phone_number = `${PhoneNumberCode} ${currentLength}`;
        const emailResult = await emailjs.send(
          'service_ac1wtgm',
          'template_6y49v0k',
          {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            phone_number: values.phone_number,
            country: values.country,
            linkedin_profile_link: values.linkedin_profile_link,
          }
        );

        if (emailResult.status === 200) {
          action.resetForm();
          setTimeout(() => {
            setShowModal(true);
            setModalTitle('Your data has been successfully submitted');
            setTimeout(() => {
              router.push('https://calendly.com/esparktalents/');
            }, 2000);
          }, 2000);
        }
      } catch (error) {
        action.resetForm();
        setTimeout(() => {
          setShowModal(true);
          setModalTitle('Unfortunately, your data could not be submitted');
          setTimeout(() => {
            router.push('https://calendly.com/esparktalents/');
          }, 2000);
        }, 2000);

        console.error('Error submitting the form:', error);
      } finally {
        setSubmitting(false);
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
            <div className="partner-form-phone-number-input-box">
              <PartnerFlagDropdown
                option={flags}
                findCountryName={findCountryName}
                selectedFlag={selectedFlag}
                setSelectedFlag={setSelectedFlag}
                setSelectedOption={setSelectedOption}
              />
              <div className="input-box-phone-number">
                <input
                  id="phone_number"
                  type="number"
                  className="input"
                  name="phone_number"
                  value={values?.phone_number}
                  placeholder="Phone Number"
                  onChange={handlePhoneChange}
                />

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
