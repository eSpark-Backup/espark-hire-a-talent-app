import * as Yup from 'yup';

export const profileValidationSchema = Yup.object({
  first_name: Yup.string().min(3).max(25).required('First Name is required'),
  last_name: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone_number: Yup.number().required('Phone Number is required'),
  linkedin_profile_link: Yup.string().required('LinkedIn Profile is required'),
});
