
SELECT
	ci.NAME
FROM
	CITY ci
	INNER JOIN COUNTRY co ON ci.CountryCode = co.Code
WHERE
	co.CONTINENT = 'Africa'

