export default function regex(str: string) {
	const matches = str.match(/\b[aeiouAEIOU][a-zA-Z]*\b/)
	return !!matches
}
