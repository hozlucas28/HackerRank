export default function regex(pans: string[]) {
	const regex = new RegExp(/^[A-Z]{5}\d{4}[A-Z]$/)
	const results: string[] = []

	for (const pan of pans) {
		results.push(regex.test(pan) ? "YES" : "NO")
	}

	return results
}
