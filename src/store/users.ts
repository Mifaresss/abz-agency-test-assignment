import { apiBaseUrl } from '@/api'
import { User } from '@/types/User'
import { create } from 'zustand'

type State = {
	users: User[]
	error: unknown | null
}
type Actions = {
	getUsers: (path?: string) => Promise<void>
}

export const useUsersStore = create<State & Actions>(set => ({
	users: [],
	error: null,
	getUsers: async () => {
		try {
			const response = await fetch(`${apiBaseUrl}/users/?page=1&count=6`)
			const { users } = await response.json()
			set({ users })
		} catch (error) {
			set({ error })
		}
	},
}))
