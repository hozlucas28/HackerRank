# Challenge 07 - Maximum number of non-overlapping intervals

Given an array of intervals where each interval has a start and end time, return the maximum number of non-overlapping intervals.

```typescript
maximizeNonOverlappingMeetings([
	[1, 2],
	[2, 3],
	[3, 4],
	[1, 3]
])
// Step 1: Sort meetings by end time → [[1, 2], [2, 3], [1, 3], [3, 4]].
// Step 2: Select [1, 2] (count=1, last_end=2).
// Step 3: [2, 3] has start 2 ≥ 2, select (count=2, last_end=3).
// Step 4: [1, 3] start 1 < 3, skip.
// Step 5: [3, 4] start 3 ≥ 3, select (count=3). Result = 3.

maximizeNonOverlappingMeetings([
	[0, 5],
	[0, 1],
	[1, 2],
	[2, 3],
	[3, 5],
	[4, 6]
]) // 4

maximizeNonOverlappingMeetings([
	[1, 2],
	[3, 4],
	[0, 6],
	[5, 7],
	[8, 9],
	[5, 9]
]) // 4

maximizeNonOverlappingMeetings([[5, 10]]) // 1

maximizeNonOverlappingMeetings([
	[1, 2],
	[2, 3],
	[3, 4]
]) // 3
```

**Constraints:**

- `XXX`

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
