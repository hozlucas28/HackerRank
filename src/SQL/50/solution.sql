
WITH
	HackersMaxScorePerChallenges
	AS
	(
		SELECT
			hacker_id,
			challenge_id,
			MAX(score) AS max_score
		FROM
			Submissions
		GROUP BY
        	hacker_id,
        	challenge_id
	),
	HackersScores
	AS
	(
		SELECT
			h.hacker_id,
			h.name,
			SUM(m.max_score) AS total_score
		FROM
			Hackers h
			INNER JOIN HackersMaxScorePerChallenges m ON m.hacker_id = h.hacker_id
		GROUP BY
        	h.hacker_id,
        	h.name
	)

SELECT
	hacker_id,
	name,
	total_score
FROM
	HackersScores
WHERE
    total_score > 0
ORDER BY
    total_score DESC,
    hacker_id ASC

