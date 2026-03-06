# Challenge 05 - Target index search

Given a sorted array of distinct integers and a target value, return the index of the target or `-1` if not found.

```typescript
binarySearch([2, 4, 6, 8, 10, 12, 14, 16], 16)
// Start with low = 0, high = 7. mid = (0 + 7) → 2 = 3, nums[3] = 8 < 16, so set low = 4.
// Now mid = (4 + 7) → 2 = 5, nums[5] = 12 < 16, so low = 6.
// Next mid = (6 + 7) → 2 = 6, nums[6] = 14 < 16, so low = 7.
// Finally mid = (7 + 7) → 2 = 7, nums[7] = 16 equals target, return 7.

binarySearch([], 5) // -1
binarySearch([10], 10) // 0
```

**Constraints:**

- `-10^9 <= target <= 10^9`
- `0 <= nums.length <= 10^6`
- `-10^9 <= nums[i] <= 10^9` for each valid `i`
- For all `0 <= i < nums.length - 1`, `nums[i] < nums[i + 1]`

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
