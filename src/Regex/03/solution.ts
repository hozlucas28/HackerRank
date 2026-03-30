export default function regex(str: string) {
	const matches = str.match(/^\d{2}\D\d{2}\D\d{4,}$/)
	return !!matches
}
