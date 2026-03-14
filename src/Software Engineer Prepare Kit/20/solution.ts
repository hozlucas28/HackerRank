export default function countInstallationSequences(n: number): string {
	if (!n || n === 1) return "1"

	const resultStore: [bigint, bigint] = [BigInt(1), BigInt(1)]

	for (let i = 2; i < n; i++) {
		const aux = resultStore[0] + resultStore[1]
		resultStore[0] = resultStore[1]
		resultStore[1] = aux
	}

	return `${resultStore[0] + resultStore[1]}`
}
