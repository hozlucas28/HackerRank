export default function regex(html: string): string[] {
	const results: string[] = []

	const regex = new RegExp(
		/<\s*a.+?href="\/questions\/(?<id>\d+)\/.*?>\s*(?<text>.*?)\s*<\s*\/a\s*>(?:.|\s)*?<\s*span\s*.*?class\s*=\s*"relativetime".*?>\s*(?<relativeTime>.*?)\s*<\s*\/span\s*>/,
		"g"
	)
	const matches = html.matchAll(regex)

	for (const match of Array.from(matches)) {
		const { id, text, relativeTime } = match.groups!
		results.push(`${id};${text};${relativeTime}`)
	}

	return results
}
