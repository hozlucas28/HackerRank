export default function regex(lines: string[]): string[] {
	const results: string[] = []
	const regex = new RegExp(/^[a-z]{0,3}\d{2,8}[A-Z]{3,}$/)

	for (const line of lines) {
		results.push(regex.test(line) ? "VALID" : "INVALID")
	}

	return results
}
