export default function regex(text: string[]) {
	const matches = new Set<string>()

	for (const line of text) {
		const match = line.match(/(?<=<)[^/ >]+/g)
		if (!match) continue

		for (const tag of match) {
			matches.add(tag)
		}
	}

	const _matches = Array.from(matches.values())
	_matches.sort()

	return _matches.join(";")
}
