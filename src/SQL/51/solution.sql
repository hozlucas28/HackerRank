
WITH
	Islands
	AS
	(
		SELECT
			Start_Date,
			End_Date,
			DATEADD(day, -ROW_NUMBER() OVER (ORDER BY Start_Date ASC), Start_Date) AS VirtualGroup
		FROM
			Projects
	)

SELECT
	MIN(Start_Date) AS Project_Start,
	MAX(End_Date) AS Project_End
FROM
	Islands
GROUP BY
	VirtualGroup
ORDER BY
    COUNT(VirtualGroup) ASC,
    MIN(Start_Date) ASC;

