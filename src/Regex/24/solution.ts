export default function regex(str: string) {
	const matches = str.match(/(?<=1|3|5|7|9)\d/g)
	return matches?.length ?? 0
}
