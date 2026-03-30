export default function regex(str: string) {
	const matches = str.match(/^(?:(?:\d{2}-){3}|\d{6})\d{2}$/)
	return !!matches
}
