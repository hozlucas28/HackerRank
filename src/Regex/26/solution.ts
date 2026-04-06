export default function regex(lines: string[]): string[] {
	const regex = new RegExp(/<\s*a\s+.*?href\s*=\s*["'](?<link>.*?)".*?>(?:\s|<(?:.|\s)*?>)*(?<text>(?:.|\s)*?)</, "g")
	const results: string[] = []

	for (const line of lines) {
		const matches = line.matchAll(regex)

		for (const match of Array.from(matches)) {
			const { link = "", text = "" } = match.groups ?? {}
			results.push(`${link},${text}`)
		}
	}

	return results
}
