# Challenge 31 - Next Greater Element with Position Offset

Given an integer array readings, return an array result where `result[i] = [value, distance]`, with value being the next greater element to the right of `readings[i]` and distance being the index difference. If no greater element exists, return `[-1, -1]`.

```typescript
const received = findNextGreaterElementsWithDistance([2, 1, 2, 4, 3])
// For each index i in readings:
// - i=0, value=2. The next greater element to its right is 4 at index 3, so distance = 3 - 0 = 3 ⇒ [4, 3].
// - i=1, value=1. The next greater element is 2 at index 2, distance = 2 - 1 = 1 ⇒ [2, 1].
// - i=2, value=2. The next greater element is 4 at index 3, distance = 3 - 2 = 1 ⇒ [4, 1].
// - i=3, value=4. There is no greater element to the right ⇒ [-1, -1].
// - i=4, value=3. There is no greater element to the right ⇒ [-1, -1].
// Final result: [[4, 3], [2, 1], [4, 1], [-1, -1], [-1, -1]]

const received = findNextGreaterElementsWithDistance([5]) // [[-1, -1]]
```

**Constraints:**

- `0 <= readings.length <= 100000`
- `-1000000000 <= readings[i] <= 1000000000`

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
