# Challenge 50 - Contest leaderboard

You did such a great job helping Julia with her last coding contest challenge that she wants you to work on this one, too!

The total score of a hacker is the sum of their maximum scores for all of the challenges. Write a query to print the hacker_id, name, and total score of the hackers ordered by the descending score. If more than one hacker achieved the same total score, then sort the result by ascending hacker_id. Exclude all hackers with a total score of $`0`$ from your result.

The **Hackers** table is described as follows:

| Column    | Type    |
| :-------- | :------ |
| hacker_id | Integer |
| name      | String  |

> The `hacker_id` is the id of the hacker, and `name` is the name of the hacker.

The **Submissions** table is described as follows:

| Column        | Type    |
| :------------ | :------ |
| submission_id | Integer |
| hacker_id     | Integer |
| challenge_id  | Integer |
| score         | Integer |

> The `submission_id` is the id of the submission, `hacker_id` is the id of the hacker who made the submission, `challenge_id` is the id of the challenge for which the submission belongs to, and `score` is the score of the submission.

### Solutions

- [Microsoft SQL Server](solution.sql)
