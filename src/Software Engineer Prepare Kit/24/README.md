# Challenge 24 - Detect cycle in module dependency graph

Given `n` modules labeled `0` to `n-1` and a list of directed edges dependencies where `[u, v]` means module `u` depends on module `v`, return `1` if there is a cycle in the dependency graph, otherwise return `0`.

```typescript
hasCircularDependency(4, [
	[1, 0],
	[2, 1],
	[3, 2]
])
// We have edges 1 → 0, 2 → 1, 3 → 2.
// This forms a simple chain and no module depends (directly or indirectly) back on itself.
// There is no cycle in the directed graph, so the function returns 0.

hasCircularDependency(4, [
	[1, 0],
	[2, 1],
	[0, 2]
]) // 1
hasCircularDependency(1, []) // 0
hasCircularDependency(1, [[0, 0]]) // 1
```

**Constraints:**

- `1 <= n <= 1000`
- `0 <= dependencies.length <= n * (n - 1)`
- For each `i`, `dependencies[i].length == 2`
- For each `i`, `0 <= dependencies[i][0] < n`
- For each `i`, `0 <= dependencies[i][1] < n`
- Dependencies may contain duplicate pairs
- Self-dependencies (`u == v`) are allowed and count as cycles

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
