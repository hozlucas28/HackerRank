export default function regex(lines: string[]): string[] {
	const results: string[] = []

	const regex = new RegExp(
		/^(?:(?:-|\+)?(?:90(?:\.0+)?|[1-8]\d(?:\.\d+)?|\d(?:\.\d+)?)|\((?:-|\+)?(?:90(?:\.0+)?|[1-8]\d(?:\.\d+)?|\d(?:\.\d+)?), (?:-|\+)?(?:180(?:\.0+)?|1[0-7]\d(?:\.\d+)?|\d{1,2}(?:\.\d+)?)\))$/
	)

	for (const line of lines) {
		results.push(regex.test(line) ? "Valid" : "Invalid")
	}

	return results
}
