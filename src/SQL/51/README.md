# Challenge 51 - SQL project planning

You are given a table, Projects, containing three columns: Task_ID, Start_Date and End_Date. It is guaranteed that the difference between the End_Date and the Start_Date is equal to 1 day for each row in the table.

The **Projects** table is described as follows:

| Column     | Type    |
| :--------- | :------ |
| Task_ID    | Integer |
| Start_Date | Date    |
| End_Date   | Date    |

If the End_Date of the tasks are consecutive, then they are part of the same project. Samantha is interested in finding the total number of different projects completed.

Write a query to output the start and end dates of projects listed by the number of days it took to complete the project in ascending order. If there is more than one project that have the same number of completion days, then order by the start date of the project.

### Solutions

- [Microsoft SQL Server](solution.sql)
