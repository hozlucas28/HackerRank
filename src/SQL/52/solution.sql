
WITH
	StudentsSalaries
	AS
	(
		SELECT
			s.ID,
			s.Name,
			p.Salary AS salary
		FROM
			Students s
			INNER JOIN Packages p ON p.ID = s.ID
	),
	StudentsBFFSalaries
	AS
	(
		SELECT
			s.ID,
			s.Name,
			s.Salary,
			(SELECT
				Salary
			FROM
				StudentsSalaries
			WHERE
				ID = f.Friend_ID
			) AS Friend_Salary
		FROM
			StudentsSalaries s
			INNER JOIN Friends f ON f.ID = s.ID
	)

SELECT
	name
FROM
	StudentsBFFSalaries
WHERE
    Salary < Friend_Salary
ORDER BY
    Friend_Salary

