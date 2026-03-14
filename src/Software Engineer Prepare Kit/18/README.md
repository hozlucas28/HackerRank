# Challenge 18 - Place N cameras without conflict on blocked grid

Given an NxN grid where `0` is empty and `1` is blocked, return true if `N` cameras can be placed on empty cells such that no two share the same row, column, or diagonal.

```typescript
canPlaceSecurityCameras(4, [
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0]
])
// We need to place 4 cameras so that no two share a row, column, or diagonal. One valid arrangement is:
// Row 0 → column 1
// Row 1 → column 3
// Row 2 → column 0
// Row 3 → column 2
// Each row has exactly one camera, no two are in the same column, and no two lie on the same diagonal. Thus the function returns true.

canPlaceSecurityCameras(4, [
	[0, 1, 0, 0],
	[0, 0, 0, 1],
	[1, 0, 0, 0],
	[0, 0, 1, 0]
])
// Some cells are blocked by skylights (marked 1).
// We still need 4 cameras. One possible placement:
// Row 0 → column 2 (cell [0][2] is empty)
// Row 1 → column 0 (cell [1][0] is empty, no conflict with row 0)
// Row 2 → column 3 (cell [2][3] is empty, no conflicts)
// Row 3 → column 1 (cell [3][1] is empty, no conflicts)
// All cameras are on empty cells, and none share a row, column, or diagonal.
// The function returns true.

canPlaceSecurityCameras(5, [
	[1, 0, 0, 1],
	[0, 1, 1, 0],
	[1, 0, 1, 0]
]) // true

canPlaceSecurityCameras(1, [[0]]) // true

canPlaceSecurityCameras(2, [
	[0, 1],
	[1, 0]
]) // false
```

**Constraints:**

- `1 <= N <= 15`
- `grid.length == N`
- For all `0 <= i < N`, `grid[i].length == N`
- For all `0 <= i`, `j < N`, `grid[i][j]` ∈ `{0, 1}`

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
