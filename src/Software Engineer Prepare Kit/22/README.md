# Challenge 22 - Height of binary search tree

Given the root of a binary search tree, return the height of the tree. Height is the number of nodes along the longest path from root to leaf.

```typescript
getBinarySearchTreeHeight([4, 2, 6, 1, 3, 5, 7], [1, 3, 5, -1, -1, -1, -1], [2, 4, 6, -1, -1, -1, -1])
// The tree is perfectly balanced with three levels:
// - Level 1: Node 4 (root)
// - Level 2: Nodes 2 and 6
// - Level 3: Leaves 1, 3, 5, 7 The longest path from root to any leaf has 3 nodes, so the height is 3.

getBinarySearchTreeHeight([10], [-1], [-1]) // 1
getBinarySearchTreeHeight([5, 3], [1, -1], [-1, -1]) // 2
```

**Constraints:**

- `0 <= n <= 1000`
- `values.length == n`
- `leftChild.length == n`
- `rightChild.length == n`
- For all `0 <= i < n`: `-10^9 <= values[i] <= 10^9`
- All `values[i]` are unique
- For all `0 <= i < n`: `leftChild[i] == -1` or (`0 <= leftChild[i] < n`)
- For all `0 <= i < n`: `rightChild[i] == -1` or (`0 <= rightChild[i] < n`)
- For all `0 <= i < n`: if `leftChild[i] != -1` then `values[leftChild[i]] < values[i]`
- For all `0 <= i < n`: if `rightChild[i] != -1` then `values[rightChild[i]] > values[i]`
- The set of edges defined by `(i, leftChild[i])` and `(i, rightChild[i])` forms a single connected acyclic graph (a tree)

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
