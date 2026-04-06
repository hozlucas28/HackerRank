# Challenge 46 - The British and American style of spelling

American English and British English differ in several aspects which are reflected in their spelling. One difference frequently observed, is that words written in American English, which have a suffix **ze** often end in **se** in British English. Given the American-English spelling of a word which ends in **ze** your task is to find the total count of all its British and American variants in all the given sequences of words. i.e. you need to account for the cases where the word occurs as it is given to you (i.e. the version ending in -ze) and you also need to find the occurrences of its British-English counterparts (i.e, the version ending in -se).

**Constraints:**

- `1 <= N <= 10`
- Each line doesn't contain more than 10 words (`W`).
- Each character of `W` and `W'` is a lowercase alphabet.
- If `C` is the count of the number of characters of `W` or `W'`, then
  - `1 <= C <= 20`
  - `1 <= T <= 10`
  - `W'` ends with **ze** ( US version of the word).

### Solutions

- [TypeScript](solution.ts)
