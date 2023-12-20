import { apiBaseUrl } from '@/api'
import { Position } from '@/types/Positions'
import { create } from 'zustand'

export type PositionsState = {
	positions: Position[]
	isLoading: boolean
	error: Error | null
}
type Actions = {
	fetchPositions: () => Promise<void>
}

export const usePositionsStore = create<PositionsState & Actions>(set => ({
	positions: [],
	isLoading: false,
	error: null,
	fetchPositions: async () => {
		set({ isLoading: true })
		try {
			const response = await fetch(`${apiBaseUrl}/positions`)
			const data = await response.json()
			set({ positions: data.positions })
		} catch (error) {
			set({ error: error as Error })
		} finally {
			set({ isLoading: false })
		}
	},
}))
