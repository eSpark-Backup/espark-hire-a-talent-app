import * as Yup from 'yup';

export const profileValidationSchema = Yup.object({
  firstName: Yup.string().min(3).max(25).required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.number().required('Phone Number is required'),
  socialLink: Yup.string().required('LinkedIn Profile is required'),
});
