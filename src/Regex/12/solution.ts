export default function regex(str: string) {
	const matches = str.match(/^\d{2,}[a-z]*[A-Z]*$/)
	return !!matches
}
