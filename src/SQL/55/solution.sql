SET NOCOUNT ON;

WITH
	DailyHackers
	AS
	(
		SELECT
			DISTINCT
			submission_date,
			hacker_id
		FROM
			Submissions
	),
	StreakTrack
	AS
	(
		SELECT
			submission_date,
			hacker_id,
			DENSE_RANK() OVER(PARTITION BY hacker_id ORDER BY submission_date) AS participation_day
		FROM
			DailyHackers
	),
	StreakCounts
	AS
	(
		SELECT
			submission_date,
			COUNT(hacker_id) AS unique_hackers
		FROM
			StreakTrack
		WHERE
        participation_day = DAY(submission_date)
		GROUP BY
        submission_date
	),
	DailySubmissions
	AS
	(
		SELECT
			submission_date,
			hacker_id,
			COUNT(submission_id) AS total_subs
		FROM
			Submissions
		GROUP BY
        submission_date,
        hacker_id
	),
	TopHackerDaily
	AS
	(
		SELECT
			submission_date,
			hacker_id,
			ROW_NUMBER() OVER(PARTITION BY submission_date ORDER BY total_subs DESC, hacker_id ASC) AS rank_pos
		FROM
			DailySubmissions
	)

SELECT
	s.submission_date,
	s.unique_hackers,
	t.hacker_id,
	h.name
FROM
	StreakCounts s
	INNER JOIN TopHackerDaily t ON s.submission_date = t.submission_date AND t.rank_pos = 1
	INNER JOIN Hackers h ON t.hacker_id = h.hacker_id
ORDER BY
    s.submission_date ASC;

GO
