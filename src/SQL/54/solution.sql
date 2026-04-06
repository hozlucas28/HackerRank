
WITH
	SubmissionGroups
	AS
	(
		SELECT
			challenge_id,
			SUM(total_submissions) AS total_submissions,
			SUM(total_accepted_submissions) AS total_accepted_submissions
		FROM
			Submission_Stats
		GROUP BY
        	challenge_id
	),
	ViewGroups
	AS
	(
		SELECT
			challenge_id,
			SUM(total_views) AS total_views,
			SUM(total_unique_views) AS total_unique_views
		FROM
			View_Stats
		GROUP BY
        	challenge_id
	)

SELECT
	con.contest_id,
	con.hacker_id,
	con.name,
	SUM(ISNULL(ae.total_submissions, 0)) AS total_submissions,
	SUM(ISNULL(ae.total_accepted_submissions, 0)) AS total_accepted_submissions,
	SUM(ISNULL(av.total_views, 0)) AS total_views,
	SUM(ISNULL(av.total_unique_views, 0)) AS total_unique_views
FROM
	Contests con
	INNER JOIN Colleges col ON con.contest_id = col.contest_id
	INNER JOIN Challenges cha ON col.college_id = cha.college_id
	LEFT JOIN SubmissionGroups ae ON cha.challenge_id = ae.challenge_id
	LEFT JOIN ViewGroups av ON cha.challenge_id = av.challenge_id
GROUP BY
    con.contest_id,
    con.hacker_id,
    con.name
HAVING
    (
        SUM(ISNULL(ae.total_submissions, 0)) +
        SUM(ISNULL(ae.total_accepted_submissions, 0)) +
        SUM(ISNULL(av.total_views, 0)) +
        SUM(ISNULL(av.total_unique_views, 0))
    ) > 0
ORDER BY
    con.contest_id ASC

