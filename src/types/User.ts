import { PositionName } from './Positions'

export type User = {
	id: number
	name: string
	email: string
	phone: number
	position: PositionName
	position_id: number
	registration_timestamp: number
	photo: string
}
