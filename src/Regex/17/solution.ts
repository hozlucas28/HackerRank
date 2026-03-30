export default function regex(str: string) {
	const matches = str.match(/^(?:Mr|Mrs|Ms|Dr|Er)\.[a-zA-Z]+$/)
	return !!matches
}
