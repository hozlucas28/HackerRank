
SELECT
	co.Continent,
	FLOOR(AVG(ci.Population))
FROM
	CITY ci
	INNER JOIN COUNTRY co ON ci.CountryCode = co.Code
GROUP BY
	co.Continent


