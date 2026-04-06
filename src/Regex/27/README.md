# Challenge 27 - Detect HTML tags

Given $`N`$ lines of HTML, find the tag names (ignore any attributes) and print them as a single line of lexicographically ordered semicolon-separated values (e.g.: $`tag1;tag2;tag3`$).

**Constraints:**

- $`1 \le N \le 100`$
- Each fragment contains $`\lt 10000`$ ASCII characters.
- The fragments are chosen from Wikipedia, so analyzing and observing their markup structure may help.
- Leading and trailing spaces/indentation have been trimmed from the HTML fragments.

### Solutions

- [TypeScript](solution.ts)
