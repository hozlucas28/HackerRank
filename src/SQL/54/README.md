# Challenge 54 - Interviews

Samantha interviews many candidates from different colleges using coding challenges and contests. Write a query to print the contest_id, hacker_id, name, and the sums of total_submissions, total_accepted_submissions, total_views, and total_unique_views for each contest sorted by contest_id. Exclude the contest from the result if all four sums are $`0`$.

> [!Note]
> A specific contest can be used to screen candidates at more than one college, but each college only holds $`1`$ screening contest.

The **Contests** table is described as follows:

| Column     | Type    |
| :--------- | :------ |
| contest_id | Integer |
| hacker_id  | Integer |
| name       | String  |

> The `contest_id` is the id of the contest, `hacker_id` is the id of the hacker who created the contest, and `name` is the name of the hacker.

The **Colleges** table is described as follows:

| Column     | Type    |
| :--------- | :------ |
| college_id | Integer |
| contest_id | Integer |

> The `college_id` is the id of the college, and `contest_id` is the id of the contest that Samantha used to screen the candidates.

The **Challenges** table is described as follows:

| Column       | Type    |
| :----------- | :------ |
| challenge_id | Integer |
| college_id   | Integer |

> The `challenge_id` is the id of the challenge that belongs to one of the contests whose `contest_id` Samantha forgot, and `college_id` is the id of the college where the challenge was given to candidates.

The **View_Stats** table is described as follows:

| Column             | Type    |
| :----------------- | :------ |
| challenge_id       | Integer |
| total_views        | Integer |
| total_unique_views | Integer |

> The `challenge_id` is the id of the challenge, `total_views` is the number of times the challenge was viewed by candidates, and `total_unique_views` is the number of times the challenge was viewed by unique candidates.

The **Submission_Stats** table is described as follows:

| Column                     | Type    |
| :------------------------- | :------ |
| challenge_id               | Integer |
| total_submissions          | Integer |
| total_accepted_submissions | Integer |

> The `challenge_id` is the id of the challenge, `total_submissions` is the number of submissions for the challenge, and `total_accepted_submission` is the number of submissions that achieved full scores.

### Solutions

- [Microsoft SQL Server](solution.sql)
