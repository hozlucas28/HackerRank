# Challenge 08 - Validate properly nested brackets

Given a string, check if all brackets (`'()'`, `'{}'`, or `'[]'`) are properly matched and nested. Return `1` if valid, otherwise return `0`.

```typescript
areBracketsProperlyMatched("if (a[0] > b[1]) { doSomething(); }")
// All brackets are properly matched: '(' with ')', '[' with ']', and '{' with '}'. No mismatches or improper nesting.
// Returns true

areBracketsProperlyMatched("int x = 42; // no brackets here") // true
areBracketsProperlyMatched("() {} []") // true
```

**Constraints:**

- `0 <= code_snippet.length <= 1000`
- `code_snippet` may be empty
- `code_snippet` consists of printable ASCII characters (character codes 32 to 126 inclusive)
- `code_snippet` may contain any combination of `'('`, `')'`, `'{'`, `'}'`, `'['`, `']'`, letters, digits, symbols, and whitespace

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
