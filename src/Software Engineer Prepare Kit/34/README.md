# Challenge 34 - Reverse even-indexed nodes and append

Given a singly linked list, extract all even-indexed nodes, reverse their order, and append them to the end of the list in one traversal. Return the head of the modified list.

```typescript
extractAndAppendSponsoredNodes([10, 20, 30, 40, 50, 60])
// - Step 1: Extract sponsored nodes at even positions 0, 2, 4 → [10, 30, 50].
// - Step 2: Remaining non-sponsored nodes are [20, 40, 60].
// - Step 3: Reverse the extracted sponsored list → [50, 30, 10].
// - Step 4: Append the reversed list to [20, 40, 60], yielding [20, 40, 60, 50, 30, 10].

extractAndAppendSponsoredNodes([42]) // [42]
extractAndAppendSponsoredNodes([1, 2]) // [2, 1]
```

**Constraints:**

- Let `n` be the number of nodes in the list
- `0 <= n <= 100000`
- `-10^9 <= value of each node <= 10^9`
- Sponsored nodes are those at even indices: `0`, `2`, `4`, ...
- The list may be empty (`n = 0`)

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
