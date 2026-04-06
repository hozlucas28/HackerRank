export default function fn(text: string, words: string[]): number[] {
	const results: number[] = []

	for (const word of words) {
		let regex = new RegExp(`(?<=\\b)${word}(?=\\b)`, "g")
		if (word.endsWith("ze") || word.endsWith("se")) {
			regex = new RegExp(`(?<=\\b)${word.slice(0, -2)}[zs]e(?=\\b)`, "g")
		}

		const matches = text.match(regex)
		results.push(matches?.length ?? 0)
	}

	return results
}
