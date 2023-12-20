export enum PositionName {
	DESIGNER = 'Designer',
	SECURITY = 'Security',
	CONTENT_MANAGER = 'Content manager',
	LAWYER = 'Lawyer',
}

export type Position = {
	id: number
	name: PositionName
}
