package main

func HasCircularDependency(n int32, dependencies [][]int32) bool {
	numNodes := int(n)

	adjList := make([][]int, numNodes)
	inDegree := make([]int, numNodes)

	for _, dep := range dependencies {
		u, v := int(dep[0]), int(dep[1])
		if u == v {
			return true
		}

		adjList[v] = append(adjList[v], u)
		inDegree[u]++
	}

	queue := make([]int, 0)
	for i := 0; i < numNodes; i++ {
		if inDegree[i] == 0 {
			queue = append(queue, i)
		}
	}

	visitedCount := 0

	for len(queue) > 0 {
		node := queue[0]
		queue = queue[1:]
		visitedCount++

		for _, neighbor := range adjList[node] {
			inDegree[neighbor]--
			if inDegree[neighbor] == 0 {
				queue = append(queue, neighbor)
			}
		}
	}

	return visitedCount != numNodes
}
