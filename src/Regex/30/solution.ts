export default function regex(lines: string[]): string[] {
	const results: string[] = []

	for (const line of lines) {
		if (
			line.match(
				/^(?:(?:(?:0?[0-9]{1,2})|(?:1[0-9]{2})|(?:2[0-5]{2}))\.){3}(?:(?:(?:0?[0-9]{1,2})|(?:1[0-9]{2})|(?:2[0-5]{2})))$/
			)
		) {
			results.push("IPv4")
		} else if (line.match(/^(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}$/)) {
			results.push("IPv6")
		} else {
			results.push("Neither")
		}
	}

	return results
}
