# Challenge 20 - Ways to fill slots with single or double coverage

Given `n` slots numbered `0` to `n`-`1`, return the number of ways to fill all slots where each operation covers either 1 slot or 2 adjacent slots.

```typescript
countInstallationSequences(3)
// We want the number of ways to install panels in `3` slots with operations of size 1 or 2.
// Let `dp[i]` be the number of ways to fill `i` slots.
//
// Base cases: dp[0] = 1 (do nothing), dp[1] = 1 (only one 1-panel install).
// For each i ≥ 2: dp[i] = dp[i-1] + dp[i-2].
//   dp[2] = dp[1] + dp[0] = 1 + 1 = 2 (sequences: [1, 1], [2])
//   dp[3] = dp[2] + dp[1] = 2 + 1 = 3 (sequences: [1, 1, 1], [1, 2], [2, 1])
//
// Therefore, the answer for `n=3` is `"3"`.

countInstallationSequences(5)
// Explanation: Compute dp up to `5`:
//
// dp[0] = 1, dp[1] = 1
// dp[2] = dp[1] + dp[0] = 1 + 1 = 2 ([1, 1], [2])
// dp[3] = dp[2] + dp[1] = 2 + 1 = 3 ([1, 1, 1], [1, 2], [2, 1])
// dp[4] = dp[3] + dp[2] = 3 + 2 = 5 ([1, 1, 1, 1], [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 2])
// dp[5] = dp[4] + dp[3] = 5 + 3 = 8 (eight distinct sequences)
// Hence for `n=5` the function returns `"8"`.

countInstallationSequences(2) // "2"
countInstallationSequences(3) // "3"
```

**Constraints:**

- `0 <= n <= 1000`

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
