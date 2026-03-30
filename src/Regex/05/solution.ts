export default function regex(str: string) {
	const matches = str.match(/\w{3}\W\w{10}\W\w{3}/)

	return !!matches
}
