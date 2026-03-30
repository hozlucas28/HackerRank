export default function regex(str: string) {
	const matches = str.match(/(.)(?!\1)/g)
	return matches?.length ?? 0
}
