package main

func CountIsolatedCommunicationGroups(links [][]int32, n int32) int32 {
	components := n

	parent := make([]int32, n)
	for i := range n {
		parent[i] = i
	}

	var find func(i int32) int32
	find = func(i int32) int32 {
		if parent[i] == i {
			return i
		}

		parent[i] = find(parent[i])

		return parent[i]
	}

	for _, link := range links {
		rootA := find(link[0])
		rootB := find(link[1])

		if rootA != rootB {
			parent[rootB] = rootA
			components--
		}
	}

	return components
}
