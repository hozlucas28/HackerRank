export default function regex(lines: string[]) {
	const regex = new RegExp(/^[hH][iI]\s[^dD]/)
	const results: string[] = []

	for (const line of lines) {
		if (regex.test(line)) results.push(line)
	}

	return results
}
