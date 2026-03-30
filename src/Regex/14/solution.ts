export default function regex(str: string) {
	const matches = str.match(/^[a-zA-Z]*s$/)
	return !!matches
}
