# Challenge 55 - 15 days of learning SQL

Julia conducted a $`15`$ days of learning SQL contest. The start date of the contest was March 01, 2016 and the end date was March 15, 2016.

Write a query to print total number of unique hackers who made at least $`1`$ submission each day (starting on the first day of the contest), and find the hacker_id and name of the hacker who made maximum number of submissions each day. If more than one such hacker has a maximum number of submissions, print the lowest hacker_id. The query should print this information for each day of the contest, sorted by the date.

The **Hackers** table is described as follows:

| Column    | Type    |
| :-------- | :------ |
| hacker_id | Integer |
| name      | String  |

> The `hacker_id` is the id of the hacker, and `name` is the name of the hacker.

The **Submissions** table is described as follows:

| Column          | Type    |
| :-------------- | :------ |
| submission_date | Date    |
| submission_id   | Integer |
| hacker_id       | Integer |
| score           | Integer |

> The `submission_date` is the date of the submission, `submission_id` is the id of the submission, `hacker_id` is the id of the hacker who made the submission, and `score` is the score of the submission.

### Solutions

- [Microsoft SQL Server](solution.sql)
