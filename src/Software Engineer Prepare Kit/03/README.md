# Challenge 03 - Check palindrome by filtering non-letters

Given a string containing letters, digits, and symbols, determine if it reads the same forwards and backwards when considering only alphabetic characters (case-insensitive).

```typescript
isAlphabeticPalindrome("A1b2B!a")
// 1°) Extract only letters → ['A', 'b', 'B', 'a']
// 2°) Convert to lowercase → ['a', 'b', 'b', 'a']
// 3°) Compare sequence forward and backward: 'abba' == 'abba'
// 4°) Return true

isAlphabeticPalindrome("Z") // true
isAlphabeticPalindrome("abc123cba") // true
```

**Constraints:**

- `0 <= code.length <= 1000`
- For all `0 <= i < code.length`: `33 <= ASCII(code[i]) <= 126`
- Code contains only printable ASCII characters (letters, digits, and symbols)

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
