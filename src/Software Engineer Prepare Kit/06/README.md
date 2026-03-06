# Challenge 06 - Find first occurrence

Given a sorted array of integers that may contain duplicates, return the index of the first occurrence of a target value or -1 if not found.

```typescript
findFirstOccurrence([1, 2, 3, 4, 5], 3)
// We perform binary search on [1, 2, 3, 4, 5].
// low=0, high=4 → mid=2 → nums[2]=3 equals target. Record result=2, then search left half.
// Update high=mid-1=1. Now low=0, high=1 → mid=0 → nums[0]=1 < target, so move low to mid+1=1.
// low=1, high=1 → mid=1 → nums[1]=2 < target, so move low to mid+1=2.

findFirstOccurrence([], 5) // -1
findFirstOccurrence([3], 3) // 0
```

**Constraints:**

- `0 <= nums.length <= 1000`
- `-10^9 <= target <= 10^9`
- `-10^9 <= nums[i] <= 10^9` for all `0 <= i < nums.length`
- For all `0 <= i < nums.length - 1`, `nums[i] <= nums[i+1]` (array is non-decreasingly sorted)

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
