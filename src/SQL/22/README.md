# Challenge 22 - Type of triangle

Write a query identifying the type of each record in the **TRIANGLES** table using its three side lengths. Output one of the following statements for each record in the table:

- **Equilateral:** It's a triangle with $`3`$ sides of equal length.
- **Isosceles:** It's a triangle with $`2`$ sides of equal length.
- **Scalene:** It's a triangle with $`3`$ sides of differing lengths.
- **Not A Triangle:** The given values of A, B, and C don't form a triangle.

The **TRIANGLES** table is described as follows:

| Field | Type    |
| :---- | :------ |
| A     | Integer |
| B     | Integer |
| C     | Integer |

> Each row in the table denotes the lengths of each of a triangle's three sides.

### Solutions

- [Microsoft SQL Server](solution.sql)
