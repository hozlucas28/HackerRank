export default function regex(lines: string[]) {
	const starts = new RegExp(/^hackerrank/)
	const ends = new RegExp(/hackerrank$/)

	const results: string[] = []

	for (const line of lines) {
		if (starts.test(line) && ends.test(line)) {
			results.push("0")
		} else if (starts.test(line)) {
			results.push("1")
		} else if (ends.test(line)) {
			results.push("2")
		} else {
			results.push("-1")
		}
	}

	return results
}
