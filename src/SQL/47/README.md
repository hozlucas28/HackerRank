# Challenge 47 - Top competitors

Julia just finished conducting a coding contest, and she needs your help assembling the leaderboard! Write a query to print the respective hacker_id and name of hackers who achieved full scores for more than one challenge. Order your output in descending order by the total number of challenges in which the hacker earned a full score. If more than one hacker received full scores in same number of challenges, then sort them by ascending hacker_id.

The **Hackers** table is described as follows:

| Column    | Type    |
| :-------- | :------ |
| hacker_id | Integer |
| name      | String  |

> The `hacker_id` is the id of the hacker, and `name` is the name of the hacker.

The **Difficulty** table is described as follows:

| Column           | Type    |
| :--------------- | :------ |
| difficulty_level | Integer |
| score            | Integer |

> The `difficulty_level` is the level of difficulty of the challenge, and `score` is the maximum score that can be achieved for a challenge at that difficulty level.

The **Challenges** table is described as follows:

| Column           | Type    |
| :--------------- | :------ |
| challenge_id     | Integer |
| hacker_id        | Integer |
| difficulty_level | Integer |

> The `challenge_id` is the id of the challenge, the `hacker_id` is the id of the hacker who created the challenge, and `difficulty_level` is the level of difficulty of the challenge.

The **Submissions** table is described as follows:

| Column        | Type    |
| :------------ | :------ |
| submission_id | Integer |
| hacker_id     | Integer |
| challenge_id  | Integer |
| score         | Integer |

> The `submission_id` is the id of the submission, `hacker_id` is the id of the hacker who made the submission, `challenge_id` is the id of the challenge that the submission belongs to, and `score` is the score of the submission.

### Solutions

- [Microsoft SQL Server](solution.sql)
