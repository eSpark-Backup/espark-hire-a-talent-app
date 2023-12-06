import * as Yup from 'yup';

export const profileValidationSchema = Yup.object({
  first_name: Yup.string().min(3).max(25).required('First Name is required'),
  last_name: Yup.string().min(3).max(25).required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Invalid email address format'
    )
    .required('Email is required'),
  phone_number: Yup.string()
    .required('Phone Number is required')
    .matches(/^(\+)?0?\d{11}$/, 'Phone number must be at least 11 characters'),
  linkedin_profile_link: Yup.string()
    .required('LinkedIn Profile is required')
    .matches(
      /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
      'Invalid LinkedIn Profile URL'
    ),
});
