# Challenge 23 - Compare BSTs for equal values but different structure

Given two binary search trees `root1` and `root2`, return true if they contain the same multiset of values but have different structures, otherwise return false.

```typescript
verifySameMultisetDifferentStructure([4, 2, 5, 1, 3, 100001, 100001], [3, 1, 5, 100001, 2, 4, 100001])
// - First, collect the values of each tree (ignoring the sentinel `100001` for nulls).
// - `Tree1` has values [4, 2, 5, 1, 3], and `Tree2` has [3, 1, 5, 2, 4].
// - Sorting both gives [1, 2, 3, 4, 5] in each, so the multisets match.
// - Next, compare structures: Tree1's root is `4` with children `2` (which itself has children `1` and `3`)
//   and `5`; Tree2's root is `3` with children `1` (right child `2`) and `5` (left child `4`).
// - The shapes differ, so the function returns true.

verifySameMultisetDifferentStructure([1], [1]) // false
verifySameMultisetDifferentStructure([2, 1], [1, 100001, 2]) // true
```

**Constraints:**

- `0 <= root1.length <= 1000`
- `0 <= root2.length <= 1000`
- BST property holds: for every node, `all values in its left subtree <= node.value <= all values in its right subtree`
- Trees may contain duplicate values

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
