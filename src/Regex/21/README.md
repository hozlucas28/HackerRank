# Challenge 21 - Forward references

You have a test string $`S`$.

Your task is to write a regex which will match $`S`$, with following condition(s):

- $`S`$ consists of `tic` or `tac`.
- `tic` should not be immediate neighbour of itself.
- The first `tic` must occur only when `tac` has appeared at least twice before.

### Valid $`S`$

```plaintext
tactactic
tactactictactic
```

### Invalid $`S`$

```plaintext
tactactictactictictac
tactictac
```

### Solutions

- [TypeScript](solution.ts)
