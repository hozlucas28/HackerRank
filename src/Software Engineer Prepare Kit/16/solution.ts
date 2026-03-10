export default function isAnagram(s: string, t: string): number {
	if (s.length !== t.length) return 0

	const sChars = new Map<string, number>()
	const tChars = new Map<string, number>()

	for (let i = 0; i < s.length; i++) {
		const sChar = s[i]!
		const tChar = t[i]!

		sChars.set(sChar, (sChars.get(sChar) ?? 0) + 1)
		tChars.set(tChar, (tChars.get(tChar) ?? 0) + 1)
	}

	if (sChars.size !== tChars.size) return 0

	for (const [char, amount] of sChars) {
		if (amount !== tChars.get(char)) return 0
	}

	return 1
}
