export default function regex(str: string) {
	const matches = str.match(/hackerrank/g)?.length ?? 0
	return matches
}
