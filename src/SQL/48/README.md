# Challenge 48 - Ollivander's inventory

Harry Potter and his friends are at Ollivander's with Ron, finally replacing Charlie's old broken wand.

Hermione decides the best way to choose is by determining the minimum number of gold galleons needed to buy each non-evil wand of high power and age. Write a query to print the id, age, coins_needed, and power of the wands that Ron's interested in, sorted in order of descending power. If more than one wand has same power, sort the result in order of descending age.

The following tables contain data on the wands in Ollivander's inventory...

The **Wands** table is described as follows:

| Column       | Type    |
| :----------- | :------ |
| id           | Integer |
| code         | Integer |
| coins_needed | Integer |
| power        | Integer |

> The `id` is the id of the wand, `code` is the code of the wand, `coins_needed` is the total number of gold galleons needed to buy the wand, and `power` denotes the quality of the wand (the higher the power, the better the wand is).

The **Wands_Property** table is described as follows:

| Column  | Type    |
| :------ | :------ |
| code    | Integer |
| age     | Integer |
| is_evil | Integer |

> The `code` is the code of the wand, age is the age of the wand, and `is_evil` denotes whether the wand is good for the dark arts. If the value of `is_evil` is `0`, it means that the wand is not evil. The mapping between `code` and `age` is one-one, meaning that if there are two pairs, $`(code_1,age_1)`$ and $`(code_2,age_2)`$, then $`code_1 \ne code_2`$ and $`age_1 \ne age_2`$.

### Solutions

- [Microsoft SQL Server](solution.sql)
