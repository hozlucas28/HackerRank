# Challenge 14 - Remove elements within K distance

Given a non-decreasing array of integers and an integer `K`, remove in-place any element that is within `K` of the previous kept element and return the new length. Use constant extra space and single pass with two pointers.

```typescript
debounceTimestamps([1, 2, 3, 8, 10], 3)
// We start by keeping the first timestamp 1.
// Next, 2 − 1 = 1 < 3, so 2 is removed.
// Next, 3 − 1 = 2 < 3, so 3 is removed.
// Next, 8 − 1 = 7 ≥ 3, so we keep 8.
// Finally, 10 − 8 = 2 < 3, so 10 is removed.
// The remaining timestamps are [1, 8], so the new length is 2.

debounceTimestamps([], 10) // 0
debounceTimestamps([5], 0) // 1
```

**Constraints:**

- `0 <= timestamps.length <= 1000`
- `0 <= timestamps[i] <= 10^9` for all `0 <= i < timestamps.length`
- `timestamps[i] <= timestamps[i+1]` for all `0 <= i < timestamps.length - 1`
- `0 <= K <= 10^9`

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
