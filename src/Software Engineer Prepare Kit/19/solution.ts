export default function getAutoSaveInterval(n: number): number {
	if (n === 0) return BigInt(1) as unknown as number
	if (n === 1) return BigInt(2) as unknown as number

	const sequence: [bigint, bigint] = [BigInt(1), BigInt(2)]

	for (let i = 2; i <= n; i++) {
		const sum = sequence[0] + sequence[1]
		sequence[0] = sequence[1]
		sequence[1] = sum
	}

	return sequence[1] as unknown as number
}
