export default function regex(str: string) {
	const matches = str.match(/(?:ok){3}/)
	return !!matches
}
