SET NOCOUNT ON;

SELECT
	TOP 1
	(months * salary),
	COUNT(employee_id)
FROM
	Employee
GROUP BY (months * salary)
ORDER BY (months * salary) DESC;

GO
