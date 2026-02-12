# Challenge 01 - Count elements greater than previous average

Given an array of positive integers, return the number of elements that are strictly greater than the average of all previous elements. Skip the first element.

```typescript
countResponseTimeRegressions([100, 200, 150, 300])
// 1°) 100 (no previous days, skip)
// 2°) 200 > average(100) = 100 → count = 1
// 3°) 150 > average(100, 200) = 150 → Not greater → count = 1
// 4°) 300 > average(100, 200, 150) = 150 → count = 2
// 5°) Return 2

countResponseTimeRegressions([]) // 0
countResponseTimeRegressions([1, 100]) // 0
```

**Constraints:**

- `1 <= responseTimes[i] <= 10^9`
- `0 <= responseTimes.length <= 1000`

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
