export default function generateAngleBracketSequences(n: number): string[] {
	if (n <= 0) return []

	const results: string[] = []

	const backtrack = (currentSequence: string, openCount: number, closeCount: number): void => {
		if (currentSequence.length === 2 * n) {
			results.push(currentSequence)
			return
		}

		if (openCount < n) {
			backtrack(currentSequence + "<", openCount + 1, closeCount)
		}

		if (closeCount < openCount) {
			backtrack(currentSequence + ">", openCount, closeCount + 1)
		}
	}

	backtrack("", 0, 0)

	return results
}
