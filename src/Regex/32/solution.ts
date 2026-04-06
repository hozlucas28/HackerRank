export default function regex(lines: string[]): string {
	const regex = new RegExp(/[\w\.]+@[\w\.]+\.\w+/, "g")
	const uniqueEmails = new Set<string>()

	for (const line of lines) {
		const emails = line.match(regex)
		if (!emails) continue

		for (const email of emails) {
			uniqueEmails.add(email)
		}
	}

	return Array.from(uniqueEmails).sort().join(";")
}
