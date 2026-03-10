# Challenge 19 - Custom Fibonacci sequence

Given n (0-based indexing), return the n-th Fibonacci number where `F(0) = 1`, `F(1) = 2`, and `F(n) = F(n-1) + F(n-2)`.

```typescript
getAutoSaveInterval(3)
// Compute intervals step by step: interval[0] = 1, interval[1] = 2.
// Then interval[2] = 1 + 2 = 3, interval[3] = 2 + 3 = 5.
// So for n = 3, the function returns 5.

getAutoSaveInterval(10)
// List the first 11 intervals: [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144].
// Each interval is the sum of the two previous ones.
// The 10th index (0-based) is 144.

getAutoSaveInterval(0) // 1
getAutoSaveInterval(1) // 2
```

**Constraints:**

- `0 <= n <= 92`
- `n` is an integer

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
