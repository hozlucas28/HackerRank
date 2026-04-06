# Challenge 31 - Find a word

We define a word as a non-empty maximum sequence of characters that can contain only lowercase letters, uppercase letters, digits and underscores '\_' (ASCII value 95). Maximum sequence means that the word has to be immediately preceded by a character not allowed to occur in a word or by the left boundary of the sentence, and it has to be immediately followed by a character not allowed to occur in a word or by the right boundary of the sentence.

Given $`N`$ sentences and $`T`$ words, for each of these words, find the number of its occurrences in all the $`N`$ sentences.

**Constraints:**

- $`1 \leq N \leq 100`$
- $`1 \leq T \leq 10`$

### Solutions

- [TypeScript](solution.ts)
