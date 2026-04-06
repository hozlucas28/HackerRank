export default function regex(text: string, words: string[]): number[] {
	const results: number[] = []

	for (const word of words) {
		let regex = new RegExp(`(?<=\\b)${word}(?=\\b)`, "g")
		if (word.includes("or") || word.includes("our")) {
			regex = new RegExp(`(?<=\\b)${word.replace(/or|our/, "ou?r")}(?=\\b)`, "g")
		}

		const matches = text.match(regex)
		results.push(matches?.length ?? 0)
	}

	return results
}
