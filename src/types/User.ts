import { PositionName } from './Positions'

export type User = {
	id: number
	name: string
	email: string
	phone: string
	position: PositionName
	position_id: number
	registration_timestamp: number
	photo: File
}
