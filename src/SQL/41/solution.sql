
WITH
	Points
	AS
	(
		SELECT
			MIN(LAT_N) AS a,
			MAX(LAT_N) AS c,
			MIN(LONG_W) AS b,
			MAX(LONG_W) AS d
		FROM
			STATION
	)

SELECT
	CAST(
        ROUND(
            SQRT(POWER(c-a, 2) + POWER(d-B, 2)),
            4
        ) AS DECIMAL(10, 4)
    )
FROM
	Points

