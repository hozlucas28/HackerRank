export default function regex(text: string): number {
	const regex = new RegExp(/hackerrank/, "gi")
	return text.match(regex)?.length ?? 0
}
