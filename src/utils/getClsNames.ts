export function getClsNames(
	cls: string,
	additional: (string | undefined)[] = [],
	mods: Record<string, boolean> = {},
): string {
	return [
		cls,
		...additional.filter(Boolean),
		Object.entries(mods)
			.filter(([, v]) => v)
			.map(([cls]) => cls),
	]
		.join(' ')
		.trim()
}
