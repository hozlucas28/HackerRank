export default function regex(str: string) {
	const matches = str.match(/^[a-z][1-9][^a-z][^A-Z][A-Z]/)
	return !!matches
}
