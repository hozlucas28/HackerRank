const PHONE_DIGITS = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"] as const

export default function minTasksToCancelForNoConflict(digits: string): string[] {
	if (!digits.length) return []

	const combinations: string[] = []

	const backtrack = (index: number, path: string[]) => {
		if (index === digits.length) {
			combinations.push(path.join(""))
			return
		}

		const digit = parseInt(digits[index]!)
		const letters = PHONE_DIGITS[digit]!

		for (const letter of letters) {
			path.push(letter)
			backtrack(index + 1, path)
			path.pop()
		}
	}

	backtrack(0, [])

	return combinations
}
