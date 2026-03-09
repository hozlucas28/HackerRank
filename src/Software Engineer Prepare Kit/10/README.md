# Challenge 10 - One-pass removal of k-th node from end

Given the head of a singly linked list and an integer `k`, remove the k-th node from the end in one traversal and return the new head. If `k` is invalid, return the original list.

```typescript
RemoveKthNodeFromEnd([5, 6, 7, 8], 3)
// The list has 4 nodes.
// The k-th node from the end with k=3 is the 4th node from the end (value 5), which is the head. Removing it yields [6, 7, 8].

RemoveKthNodeFromEnd([5], 1) // [5]
RemoveKthNodeFromEnd([1, 2], 0) // [1]
```

**Constraints:**

- `0 <= number of nodes in head <= 1000`
- `-10^9 <= value of each node <= 10^9`
- `0 <= k <= 10^9`

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
