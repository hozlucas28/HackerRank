
WITH
	HackerCounts
	AS
	(
		SELECT
			h.hacker_id,
			h.name,
			COUNT(c.challenge_id) AS total_challenges
		FROM
			Hackers h
			INNER JOIN Challenges c ON h.hacker_id = c.hacker_id
		GROUP BY
        	h.hacker_id,
        	h.name
	),

	Metrics
	AS
	(
		SELECT
			hacker_id,
			name,
			total_challenges,
			MAX(total_challenges) OVER() AS max_challenges,
			COUNT(hacker_id) OVER(PARTITION BY total_challenges) AS frequency
		FROM
			HackerCounts
	)

SELECT
	hacker_id,
	name,
	total_challenges
FROM
	Metrics
WHERE
    frequency = 1 OR total_challenges = max_challenges
ORDER BY
    total_challenges DESC,
    hacker_id ASC

