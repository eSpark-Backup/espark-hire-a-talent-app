// import { validation } from '@/utils/validation';
// import * as Yup from 'yup';
// console.log(validation(), 'validationxx');
// export const profileValidationSchema = Yup.object({
//   first_name: Yup.string()
//     .min(3, 'First name must be at least 3 characters')
//     .max(25, 'First name must be at most 25 characters')
//     .required('First Name is required'),
//   last_name: Yup.string()
//     .min(3, 'Last name must be at least 3 characters')
//     .max(25, 'Last name must be at most 25 characters')
//     .required('Last Name is required'),
//   email: Yup.string()
//     .email('Invalid email')
//     .matches(
//       /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//       'Invalid email address format'
//     )
//     .required('Email is required'),
//   phone_number: Yup.string().min(0).required('Phone Number is required'),
//   // .max(validation(), 'not'),
//   // .matches(
//   //   /^\+?[0-9\s()/.]{8,}$/,
//   //   'Phone number must be at least characters'
//   // ),
//   linkedin_profile_link: Yup.string()
//     .required('LinkedIn Profile is required')
//     .matches(
//       /^([a-zA-Z]+:\/\/|www\.)[^\s/$.?#].[^\s]*$/,
//       'Invalid LinkedIn Profile URL'
//     ),
// });
