import { apiBaseUrl } from '@/api'
import { User } from '@/types/User'
import { sortUsersByRegistrationDate } from '@/utils/sortUsersByRegistrationDate'
import { create } from 'zustand'

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
}))
