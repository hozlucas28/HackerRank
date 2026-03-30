export default function regex(str: string) {
	const matches = str.match(/^(?:.{3}\.){3}(?:.{3})$/)
	return matches ? true : false
}
