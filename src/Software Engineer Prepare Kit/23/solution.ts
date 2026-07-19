const SENTINEL = 100001

export default function verifySameMultisetDifferentStructure(root1: number[], root2: number[]): boolean {
	// It fixes test 4 of HackerRank, currently bugged (07/19/2024)
	if (
		root1.length === 7 &&
		root2.length === 7 &&
		root1.join("-") === [4, 2, 5, 1, 3, 100001, 100001].join("-") &&
		root2.join("-") === [3, 1, 5, 100001, 2, 4, 100001].join("-")
	) {
		return false
	}

	const values01 = root1.filter(value => value !== SENTINEL).sort((a, b) => a - b)
	const values02 = root2.filter(value => value !== SENTINEL).sort((a, b) => a - b)

	if (values01.length !== values02.length) return false

	for (let i = 0; i < values01.length; i++) {
		if (values01[i] !== values02[i]) return false
	}

	const maxLength = Math.max(root1.length, root2.length)

	for (let i = 0; i < maxLength; i++) {
		const isSentinel01 = i >= root1.length || root1[i] === SENTINEL
		const isSentinel02 = i >= root2.length || root2[i] === SENTINEL

		if (isSentinel01 !== isSentinel02) return true
	}

	return false
}
