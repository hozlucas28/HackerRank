
SELECT
	hackers.hacker_id,
	hackers.name
FROM
	Hackers hackers
	INNER JOIN Submissions submissions ON hackers.hacker_id = submissions.hacker_id
	INNER JOIN Challenges challenges ON submissions.challenge_id = challenges.challenge_id
	INNER JOIN difficulty difficulties ON challenges.difficulty_level = difficulties.difficulty_level
WHERE
    submissions.score = difficulties.score
GROUP BY
    hackers.hacker_id,
    hackers.name
HAVING
    COUNT(submissions.challenge_id) > 1
ORDER BY
    COUNT(submissions.challenge_id) DESC,
    hackers.hacker_id ASC

