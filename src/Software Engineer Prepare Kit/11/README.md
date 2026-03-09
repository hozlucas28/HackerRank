# Challenge 11 - Count number pairs

Given a sorted array of positive integers and a target value, count the number of pairs (`i`, `j`) where `i` < `j` and `array[i] + array[j] <= target`.

```typescript
countAffordablePairs([1, 2, 3, 4, 5], 7)
// We need pairs (i, j) with i < j and prices[i] + prices[j] ≤ 7. List all pairs:
// (1, 2) = 3 ≤ 7
// (1, 3) = 4 ≤ 7
// (1, 4) = 5 ≤ 7
// (1, 5) = 6 ≤ 7
// (2, 3) = 5 ≤ 7
// (2, 4) = 6 ≤ 7
// (2, 5) = 7 ≤ 7
// (3, 4) = 7 ≤ 7
// Pairs like (3, 5)=8, (4, 5)=9 exceed the budget.
// Total valid pairs = 8.

countAffordablePairs([], 100) // 0
countAffordablePairs([5], 5) // 0
```

**Constraints:**

- `0 ≤ prices.length ≤ 1000`
- `1 ≤ prices[i] ≤ 10^9` for all `0 ≤ i < prices.length`
- Prices is sorted in non-decreasing order
- `1 ≤ budget ≤ 10^9`
- All inputs are integers

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
