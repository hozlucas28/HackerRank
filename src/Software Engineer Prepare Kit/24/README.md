# Challenge 24 - Merge and sort intervals

Given an array of intervals `[startTime, endTime]`, merge all overlapping intervals and return a sorted array of non-overlapping intervals.

```typescript
mergeHighDefinitionIntervals([
	[1, 3],
	[2, 6],
	[8, 10],
	[15, 18]
])
// 1°) Initialize merged list with first interval [1, 3].
// 3°) Compare [2, 6] with last merged [1, 3]. They overlap (2 ≤ 3), so merge into [1, 6].
// 4°) Compare [8, 10] with last merged [1, 6]. No overlap (8 > 6), append [8, 10].
// 5°) Compare [15, 18] with last merged [8, 10]. No overlap (15 > 10), append [15, 18].
// 6°) Return [[1, 6], [8, 10], [15, 18]].
```

**Constraints:**

- `0 <= intervals.length <= 100000`
- `intervals[i].length == 2`
- `0 <= intervals[i][0] < intervals[i][1] <= 10^9`

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
