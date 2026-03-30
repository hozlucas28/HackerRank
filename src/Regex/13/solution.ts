export default function regex(str: string) {
	const matches = str.match(/^\d+[A-Z]+[a-z]+$/)
	return !!matches
}
