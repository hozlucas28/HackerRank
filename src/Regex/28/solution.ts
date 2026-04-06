export default function regex(text: string, sequences: string[]) {
	const results: number[] = []

	for (const sequence of sequences) {
		const regex = new RegExp(`(?<=\\w)${sequence}(?=\\w)`, "g")
		const matches = text.match(regex)

		results.push(matches?.length ?? 0)
	}

	return results
}
