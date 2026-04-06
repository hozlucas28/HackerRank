# Challenge 49 - Challenges

Julia asked her students to create some coding challenges. Write a query to print the hacker_id, name, and the total number of challenges created by each student. Sort your results by the total number of challenges in descending order. If more than one student created the same number of challenges, then sort the result by hacker_id. If more than one student created the same number of challenges and the count is less than the maximum number of challenges created, then exclude those students from the result.

The **Hackers** table is described as follows:

| Column    | Type    |
| :-------- | :------ |
| hacker_id | Integer |
| name      | String  |

> The `hacker_id` is the id of the hacker, and `name` is the name of the hacker.

The **Challenges** table is described as follows:

| Column       | Type    |
| :----------- | :------ |
| challenge_id | Integer |
| hacker_id    | Integer |

> The `challenge_id` is the id of the challenge, and `hacker_id` is the id of the student who created the challenge.

### Solutions

- [Microsoft SQL Server](solution.sql)
