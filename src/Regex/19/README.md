# Challenge 19 - Backreferences to failed groups

You have a test string $`S`$.

Your task is to write a regex which will match $`S`$, with following condition(s):

- $`S`$ consists of 8 digits.
- $`S`$ may have "$`-`$" separator such that string $`S`$ gets divided in $`4`$ parts, with each part having exactly two digits. (Eg. 12-34-56-78)

### Valid $`S`$:

```plaintext
12345678
12-34-56-87
```

### Invalid $`S`$:

```plaintext
1-234-56-78
12-45-7810
```

### Solutions

- [TypeScript](solution.ts)
