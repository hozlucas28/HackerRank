# Challenge 09 - Min-tracking stack implementation

Implement a stack that supports `push`, `pop`, `top`, and `getMin` operations in `O(1)` time, where `getMin` returns the minimum element.

```typescript
processCouponStackOperations([
	"push 2",
	"push 0",
	"push 3",
	"push 0",
	"getMin",
	"pop",
	"getMin",
	"pop",
	"top",
	"getMin"
])
// - "push 2" → stack = [2], min = 2 2.
// - "push 0" → stack = [2, 0], min = 0 3.
// - "push 3" → stack = [2, 0, 3], min = 0 4.
// - "push 0" → stack = [2, 0, 3, 0], min = 0 5.
// - "getMin" → returns 0 6.
// - "pop" → removes 0, stack = [2, 0, 3], min = 0 7.
// - "getMin" → returns 0 8.
// - "pop" → removes 3, stack = [2, 0], min = 0 9.
// - "top" → returns 0 10. getMin → returns 0
// Final return [0, 0, 0, 0]

processCouponStackOperations(["push 5"]) // [5]
processCouponStackOperations(["push 0"]) // [0]
```

**Constraints:**

- For each `"push x"` operation, `0 <= x <= 100` and `x` is an integer
- Each entry in operations must match the pattern `^(push \d+|pop|top|getMin)$`
- `pop`, `top`, and `getMin` operations are only invoked when the stack is non-empty
- Total number of `push` operations `<= n` where `n` is the length of operations array

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
