# Challenge 16 - Check valid anagram

Given two strings `s` and `t`, return `1` if `t` is an anagram of `s`, otherwise return `0`.

```typescript
isAnagram("listen", "silent")
// Both strings have length 6.
// Build a frequency map for 'listen': {l:1, i:1, s:1, t:1, e:1, n:1}.
// Iterate over 'silent': s → count 1 → 0, i → 1 → 0, l → 1 → 0, e → 1 → 0, n → 1 → 0, and t → 1 → 0.
// All counts return to zero and no mismatches occur, so they are anagrams.

isAnagram("hello", "bellow")
// The strings have different lengths (5 vs 6). Since lengths differ,
// we can immediately conclude they are not anagrams and return 0.

isAnagram("a", "a") // 1
isAnagram("ab", "ba") // 1
```

**Constraints:**

- `0 ≤ s.length ≤ 1000`
- `0 ≤ t.length ≤ 1000`
- For all `i` with `0 ≤ i < s.length`, `'a' ≤ s[i] ≤ 'z'`
- For all `i` with `0 ≤ i < t.length`, `'a' ≤ t[i] ≤ 'z'`

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
