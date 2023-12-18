import { User } from '@/types/User'

export function sortUsersByRegistrationDate(a: User, b: User) {
	return b.registration_timestamp - a.registration_timestamp
}
