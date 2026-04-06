export default function regex(text: string, words: string[]): number[] {
	const results: number[] = []

	for (const word of words) {
		const regex = new RegExp(`(?<!\\w)${word}(?!\\w)`, "g")
		const matches = text.match(regex)

		results.push(matches?.length ?? 0)
	}

	return results
}
