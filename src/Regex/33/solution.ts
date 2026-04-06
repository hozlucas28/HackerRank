export default function regex(lines: string[]): string {
	const regex = new RegExp(/(?<=https?:\/\/(?:www\.)?)(?!www\.)(?:[a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+/, "g")
	const uniqueDomains = new Set<string>()

	for (const line of lines) {
		const domains = line.match(regex)
		if (!domains) continue

		for (const domain of domains) {
			uniqueDomains.add(domain)
		}
	}

	return Array.from(uniqueDomains).sort().join(";")
}
