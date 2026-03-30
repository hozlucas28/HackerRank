export default function regex(str: string) {
	const matches = str.match(/^\d\w{4}\.$/)
	return !!matches
}
