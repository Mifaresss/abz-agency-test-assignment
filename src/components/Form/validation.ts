import { ObjectSchema, mixed, number, object, string } from 'yup'

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

export interface FormState {
	name: string
	email: string
	phone: string
	position: number
	photo: FileList
}

const MAX_FILE_SIZE = 5 * 1024 * 1024 //  5MB

// @ts-ignore TODO: Solve the file typing problem
export const validationShema: ObjectSchema<FormState> = object({
	name: string()
		.trim()
		.required('Name is required')
		.min(2, 'Minimum 2 symbols')
		.max(20, 'Maximum 20 symbols'),
	email: string().email('Email is invalid').required('Email is required'),
	phone: string()
		.required('Phone number is required')
		.matches(phoneRegExp, 'Phone number is not valid'),
	position: number().required('Position is required'),
	photo: mixed()
		.required()
		.test('required', 'Please select a file', value => {
			const files = value as FileList
			return files?.length > 0
		})
		.test('is-valid-size', 'Max allowed size is 5MB', value => {
			const files = value as FileList
			return files[0]?.size <= MAX_FILE_SIZE
		}),
}).required()
