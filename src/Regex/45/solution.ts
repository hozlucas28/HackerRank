export default function regex(html: string): string[] {
	const tagsRegex = new RegExp(/(?<=<\s*)(?<tag>\w+)\s*.*?(?=\s*>)/, "g")
	const attrsRegex = new RegExp(/(?<=\s*)\w+(?=\s*=\s*(?:"|'))/, "g")

	const attrsPerTag = new Map<string, Set<string>>()

	const matchedTags = html.matchAll(tagsRegex)

	for (const matchedTag of Array.from(matchedTags)) {
		const { tag } = matchedTag.groups!
		if (!attrsPerTag.has(tag!)) attrsPerTag.set(tag!, new Set())

		const matchedAttrs = matchedTag[0].matchAll(attrsRegex)

		for (const matchedAttr of Array.from(matchedAttrs)) {
			attrsPerTag.get(tag!)!.add(matchedAttr[0])
		}
	}

	const output = Array.from(
		attrsPerTag.entries(),
		([tag, attrs]) => `${tag}:${Array.from(attrs).sort().join(",")}`
	).sort()

	return output
}
