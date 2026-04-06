# Challenge 41 - Weather observation station 19

Consider $`P_1(a,c)`$ and $`P_2(b,d)`$ to be two points on a 2D plane where $`(a,b)`$ are the respective minimum and maximum values of Northern Latitude (LAT_N) and $`(c,d)`$ are the respective minimum and maximum values of Western Longitude (LONG_W) in **STATION**.

Query the [Euclidean Distance](https://en.wikipedia.org/wiki/Euclidean_distance) between points $`P_1`$ and $`P_2`$ and format your answer to display $`4`$ decimal digits.

The **STATION** table is described as follows:

| Field  | Type         |
| :----- | :----------- |
| ID     | NUMBER       |
| CITY   | VARCHAR2(21) |
| STATE  | VARCHAR2(2)  |
| LAT_N  | NUMBER       |
| LONG_W | NUMBER       |

> Where **LAT_N** is the northern latitude and **LONG_W** is the western longitude.

### Solutions

- [Microsoft SQL Server](solution.sql)
