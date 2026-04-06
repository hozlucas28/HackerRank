
SELECT
	students.Name Name,
	grades.Grade Grade,
	students.Marks Marks
FROM
	Students students
	INNER JOIN Grades grades ON students.Marks BETWEEN grades.Min_Mark AND Max_Mark
WHERE
    grades.Grade >= 8
ORDER BY
	grades.Grade DESC,
	students.Name ASC;

SELECT
	NULL Name,
	grades.Grade Grade,
	students.Marks Marks
FROM
	Students students
	INNER JOIN Grades grades ON students.Marks BETWEEN grades.Min_Mark AND Max_Mark
WHERE
    grades.Grade < 8
ORDER BY
	grades.Grade DESC,
	students.Marks ASC;

