export enum PositionName {
	DESIGNER = 'Designer',
	SECURITY = 'Security',
	CONTENT_MANAGER = 'Content manager',
	LAWYER = 'Lawyer',
}

export type Positions = {
	id: number
	position: PositionName
}
