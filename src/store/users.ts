import { apiBaseUrl } from '@/api'
import { User } from '@/types/User'
import { sortUsersByRegistrationDate } from '@/utils/sortUsersByRegistrationDate'
import { create } from 'zustand'
import { TokenState } from './token'

export type UsersState = {
	users: User[]
	links: {
		nextUrl: string | null
		prevUrl: string | null
	}
	totalPages: number
	totalUsers: number
	error: Error | null
	isLoading: boolean
}
type Actions = {
	fetchUsers: () => Promise<void>
	setState: (state: Partial<UsersState>) => void
	createUser: (
		token: TokenState['token'],
		newUser: Omit<User, 'id' | 'position' | 'registration_timestamp'>,
	) => Promise<void>
}

export function usersDataFromResponse(data: any): Omit<UsersState, 'isLoading'> {
	return {
		users: data.users.sort(sortUsersByRegistrationDate),
		links: {
			nextUrl: data.links.next_url,
			prevUrl: data.links.prev_url,
		},
		totalPages: data.total_pages,
		totalUsers: data.total_users,
		error: data.error ?? null,
	}
}

export const useUsersStore = create<UsersState & Actions>(set => ({
	users: [],
	error: null,
	isLoading: false,
	links: {
		nextUrl: null,
		prevUrl: null,
	},
	totalPages: 0,
	totalUsers: 0,
	fetchUsers: async () => {
		set({ isLoading: true })
		try {
			const response = await fetch(`${apiBaseUrl}/users/?page=1&count=6`)
			const data = await response.json()
			set(usersDataFromResponse(data))
		} catch (error) {
			set({ error: error as Error })
		} finally {
			set({ isLoading: false })
		}
	},
	setState: data => {
		set(data)
	},
	createUser: async (token, newUser) => {
		const headers: HeadersInit = new Headers()
		if (token) {
			headers.set('Token', token)
		}

		const formData = new FormData()
		formData.append('name', newUser.name)
		formData.append('email', newUser.email)
		formData.append('phone', newUser.phone)
		formData.append('position_id', String(newUser.position_id))
		formData.append('photo', newUser.photo)

		try {
			const res = await fetch(`${apiBaseUrl}/users/`, {
				method: 'POST',
				body: formData,
				headers,
			})
			const data = await res.json()
			console.log('res from create user:', data)
		} catch (error) {
			console.error(error)
		}
	},
}))
