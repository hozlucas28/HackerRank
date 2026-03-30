# Challenge 23 - Negative lookahead

You have a test String $`S`$.

Write a regex which can match all characters which are not immediately followed by that same character.

### Example

If $`S`$ = **goooo**, then regex should match `g`**ooo**`o`. Because the first `g` is not followed by g and the last `o` is not followed by o.

### Solutions

- [TypeScript](solution.ts)
