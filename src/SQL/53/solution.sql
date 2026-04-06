
	SELECT
		f1.X,
		f1.Y
	FROM
		Functions f1
		INNER JOIN Functions f2 ON f1.X = f2.Y AND f1.Y = f2.X
	WHERE
		f1.X < f1.Y

UNION

	SELECT
		X,
		Y
	FROM
		Functions
	WHERE
    	X = Y
	GROUP BY
    	X,
    	Y
	HAVING
    	COUNT(*) > 1

ORDER BY
    X ASC

