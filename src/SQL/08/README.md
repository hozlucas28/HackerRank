# Challenge 08 - Weather observation station 2

Query the following two values from the **STATION** table:

1. The sum of all values in LAT_N rounded to a scale of $`2`$ decimal places.
2. The sum of all values in LONG_W rounded to a scale of $`2`$ decimal places.

The **STATION** table is described as follows:

| Field  | Type         |
| :----- | :----------- |
| ID     | NUMBER       |
| CITY   | VARCHAR2(21) |
| STATE  | VARCHAR2(2)  |
| LAT_N  | NUMBER       |
| LONG_W | NUMBER       |

> Where **LAT_N** is the northern latitude and **LONG_W** is the western longitude.

**Your results must be in the form:**

```plaintext
lat lon
```

> Where $`lat`$ is the sum of all values in LAT_N and $`lon`$ is the sum of all values in LONG_W. Both results must be rounded to a scale of $`2`$ decimal places.

### Solutions

- [Microsoft SQL Server](solution.sql)
