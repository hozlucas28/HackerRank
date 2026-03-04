# Challenge 02 - Find the smallest missing positive integer

Given an unsorted array of integers, find the smallest positive integer not present in the array in O(n) time and O(1) extra space.

```typescript
findSmallestMissingPositive([3, 4, -1, 1])
// Start with [3, 4, -1, 1]

// 1°) i=0: value 3 ⇒ Swap with index 2 ⇒ [-1, 4, 3, 1].
// 2°) i=0: value -1 is out of range ⇒ Move on.
// 3°) i=1: value 4 ⇒ Swap with index 3 ⇒ [-1, 1, 3, 4].
// 4°) i=1: value 1 ⇒ Swap with index 0 ⇒ [1, -1, 3, 4].
// Now 1 at index 0, 3 at 2, 4 at 3; -1 remains at index 1.

// Scan from index 0:
// index 0 has 1 (correct), index 1 has -1 (not 2) ⇒ Missing positive is 2.

findSmallestMissingPositive([]) // 1
findSmallestMissingPositive([1]) // 2
```

**Constraints:**

- `0 <= orderNumbers.length <= 1000`
- Duplicates are allowed in `orderNumbers`
- Negative numbers and zero are allowed in `orderNumbers`

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
