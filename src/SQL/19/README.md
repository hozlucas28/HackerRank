# Challenge 19 - Higher than 75 marks

Query the Name of any student in **STUDENTS** who scored higher than $`75`$ Marks. Order your output by the last three characters of each name. If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.

The **STUDENTS** table is described as follows:

| Field | Type    |
| :---- | :------ |
| ID    | Integer |
| Name  | String  |
| Marks | Integer |

> The Name column only contains uppercase (`A`-`Z`) and lowercase (`a`-`z`) letters.

### Solutions

- [Microsoft SQL Server](solution.sql)
