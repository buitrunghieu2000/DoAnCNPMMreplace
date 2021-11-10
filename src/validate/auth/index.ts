import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
	email: yup.string().email().required('Please enter the required field'),
	name: yup.string().required('Please enter the required field'),
	password: yup
		.string()
		.required('Please enter the required field')
		.min(6, 'Password must have at least 6 character'),
	confirmPassword: yup
		.string()
		.required('Please enter the required field')
		.oneOf([yup.ref('password'), null], 'Password must be the same'),
	phone: yup
		.string()
		.required('Please enter the required field')
		.matches(/(84|0[1|2|3|4|5|6|7|8|9])+([0-9]{8})\b/),
});

export const signInSchema = yup.object().shape({
	email: yup.string().email().required('Please enter the required field'),
	password: yup
		.string()
		.required('Please enter the required field')
		.min(6, 'Password must have at least 6 character'),
});
