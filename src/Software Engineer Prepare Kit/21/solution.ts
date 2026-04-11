export default function countIsolatedCommunicationGroups(links: number[][], n: number): number {
	let components: number = n

	const parent: number[] = Array.from({ length: n }, (_, i) => i)

	const find = (i: number): number => {
		if (parent[i] === i) {
			return i
		}

		parent[i] = find(parent[i]!)

		return parent[i]
	}

	for (const link of links) {
		const rootA = find(link[0]!)
		const rootB = find(link[1]!)

		if (rootA !== rootB) {
			parent[rootB] = rootA
			components--
		}
	}

	return components
}
