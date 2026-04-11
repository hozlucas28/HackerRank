export default function hasCircularDependency(n: number, dependencies: number[][]): boolean {
	const adjList: number[][] = Array.from({ length: n }, () => [])
	const inDegree: number[] = Array.from({ length: n }, () => 0)

	for (const [u, v] of dependencies) {
		if (u === v) return true

		adjList[v].push(u)
		inDegree[u]++
	}

	const queue: number[] = []
	for (let i = 0; i < n; i++) {
		if (inDegree[i] === 0) queue.push(i)
	}

	let head = 0
	let visitedCount = 0

	while (head < queue.length) {
		const node = queue[head++]
		visitedCount++

		for (const neighbor of adjList[node]) {
			inDegree[neighbor]--
			if (inDegree[neighbor] === 0) queue.push(neighbor)
		}
	}

	return visitedCount !== n
}
