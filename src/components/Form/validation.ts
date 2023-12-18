import { string, object } from 'yup'

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const authValidationSchema = object({
	name: string()
		.trim()
		.min(2, 'Minimum 2 symbols')
		.max(20, 'Maximum 20 symbols')
		.required('Name is required'),
	email: string().email('Email is invalid').required('Email is required'),
	phone: string().matches(phoneRegExp, 'Phone number is not valid'),
}).required()
