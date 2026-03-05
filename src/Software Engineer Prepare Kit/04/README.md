# Challenge 04 - Check for non-identical string rotation

Given two strings `s1` and `s2`, return `1` if `s2` is a rotation of `s1` but not identical to `s1`, otherwise return `0`.

```typescript
isNonTrivialRotation("abcde", "cdeab")
// - `s2` ("cdeab") is a non-trivial rotation of `s1` ("abcde").
// - If you rotate "abcde" left by 2 positions, you get "cdeab".
// - Since `s2` is not equal to `s1` and is a rotation, the output is `true`.

isNonTrivialRotation("a", "a") // false
isNonTrivialRotation("a", "b") // false
```

**Constraints:**

- `|s1| = |s2|`
- `1 <= |s1| <= 1000`
- `1 <= |s2| <= 1000`
- `s1` and `s2` both consists of lowercase English letters (`'a'` - `'z'`) only

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
