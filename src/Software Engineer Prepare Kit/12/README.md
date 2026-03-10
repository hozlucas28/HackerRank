# Challenge 11 - Remove consecutive duplicates from sorted linked list

Write a function `deleteDuplicates` that removes consecutive duplicate nodes in-place, retaining only the first node of each code. Return the head of the resulting list.

```typescript
deleteDuplicates([1, 2, 2, 2, 3, 4, 4, 5])
// - Given 1 → 2 → 2 → 2 → 3 → 4 → 4 → 5.
// - Start at 1 (next is 2, no skip).
// - Move to 2; skip all consecutive 2's so that 2 links directly to 3 (removing two extra 2 nodes).
// - Now list is 1 → 2 → 3 → 4 → 4 → 5.
// - Move to 3 (next is 4, no skip).
// - At 4, skip the duplicate 4 so it links to 5.
// - The resulting list is [1, 2, 3, 4, 5].

deleteDuplicates([]) // []
deleteDuplicates([1]) // [1]
```

**Constraints:**

- `0 <= n <= 1000`, where `n` is the number of nodes in the linked list
- `-10^5 <= Node.val <= 10^5` for each node in the list
- The linked list is sorted in non-decreasing order: for each node `u` with successor `v`, `u.val <= v.val`.

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
