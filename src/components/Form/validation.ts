import { ObjectSchema, mixed, number, object, string } from 'yup'

const emailRegExp =
	/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
const phoneRegExp = /^[\+]{0,1}380([0-9]{9})$/

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
	email: string().required('Email is required').matches(emailRegExp, 'Email is invalid'),
	phone: string()
		.required('Phone number is required')
		.matches(phoneRegExp, 'Phone number is not valid'),
	position: number().positive().required('Position is required'),
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
