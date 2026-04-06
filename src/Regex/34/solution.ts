export default function fn(sourceCode: string): string {
	const results: string[] = []

	const regex = new RegExp(/\/{2}.*\S|\/(\*+)(?:.|\s)+?\1\//, "g")
	const matches = sourceCode.matchAll(regex)

	for (const match of Array.from(matches)) {
		if (match[0].startsWith("/*")) {
			for (const line of match[0].split("\n")) {
				results.push(line.trim())
			}
		} else {
			results.push(match[0])
		}
	}

	return results.join("\n")
}
