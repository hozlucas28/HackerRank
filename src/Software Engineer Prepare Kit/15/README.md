# Challenge 15 - Two sum

Given an array of positive integers and a target integer, return the indices of two elements that sum to the target or `[-1, -1]` if no such pair exists.

```typescript
findTaskPairForSlot([2, 7, 11, 15], 9)
// We look for two durations that sum to the slotLength.
// Starting with index 0 (2), we need 7 (9-2).
// At index 1, duration is 7.
// Thus indices [0, 1] sum to 9.

findTaskPairForSlot([1, 2, 3, 4], 8) // [-1, -1]
// No two durations in the list sum to 8.
// All pairs are: 1+2=3, 1+3=4, 1+4=5, 2+3=5, 2+4=6, and 3+4=7
// None match 8, return [-1, -1].

findTaskPairForSlot([], 10) // [-1, -1]
findTaskPairForSlot([5], 5) // [-1, -1]
```

**Constraints:**

- Let `n = taskDurations.length`
- `0 <= n <= 1000`
- `1 <= taskDurations[i] <= 1000000` for all `0 <= i < n`
- `1 <= slotLength <= 2000000`
- Indices are 0-based
- If a solution exists, return two distinct indices `i`, `j` such that `0 <= i < j < n` and `taskDurations[i] + taskDurations[j] = slotLength`
- If no valid pair exists, return `[-1, -1]`

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
