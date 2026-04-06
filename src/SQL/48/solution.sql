
WITH
	VaritasClasificadas
	AS
	(
		SELECT
			w.id,
			wp.age,
			w.coins_needed,
			w.power,
			ROW_NUMBER() OVER(
            	PARTITION BY wp.age, w.power
            	ORDER BY w.coins_needed ASC
        	) AS RankingPrecio
		FROM
			Wands w
			INNER JOIN Wands_Property wp ON w.code = wp.code
		WHERE
			wp.is_evil = 0
	)

SELECT
	id,
	age,
	coins_needed,
	power
FROM
	VaritasClasificadas
WHERE
	RankingPrecio = 1
ORDER BY
    power DESC,
    age DESC;

