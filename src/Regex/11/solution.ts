export default function regex(str: string) {
	const matches = str.match(/^\d{1,2}[a-zA-Z]{3,}\.{0,3}$/)
	return !!matches
}
