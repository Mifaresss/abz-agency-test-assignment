import { apiBaseUrl } from '@/api'
import { create } from 'zustand'

export type TokenState = {
	token: string | null
	error: Error | null
}
type Actions = {
	fetchToken: () => Promise<TokenState['token']>
}

export const useTokenStore = create<TokenState & Actions>(set => ({
	token: null,
	error: null,
	fetchToken: async () => {
		try {
			const response = await fetch(`${apiBaseUrl}/token`)
			const data = await response.json()
			set({ token: data.token })

			return data.token
		} catch (error) {
			set({ error: error as Error })
		}
	},
}))
