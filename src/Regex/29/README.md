# Challenge 29 - Valid PAN format

The equivalent of SSN in India is a PAN number, which is unique to each of its citizens. In any of the country's official documents, the PAN number is listed as follows

<char><char><char><char><char><digit><digit><digit><digit><char>
Your task is to figure out if the PAN number is valid or not. A valid PAN number will have all its letters in uppercase and digits in the same order as listed above.

**Constraints:**

- $`1 \le N \le 10`$
- Each char is an uppercase letter, i.e., $`char\in['A','Z']`$.
- Each digit lies between 0 and 9, i.e., $`digit\in[0,9]`$.
- The length of the PAN number is always 10, i.e., $`length(PAN)=10`$.
- Every character in PAN is either char or digit satisfying the above constraints.

### Solutions

- [TypeScript](solution.ts)
