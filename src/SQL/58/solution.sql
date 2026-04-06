SET NOCOUNT ON;

DECLARE @Number INT = 2
DECLARE @PrimeNumbers VARCHAR(MAX) = N'';

WHILE @Number <= 1000
BEGIN
	IF @Number >= 2
    BEGIN
		DECLARE @I INT = 2

		WHILE @I < @Number
        BEGIN
			IF @Number % @I = 0 BREAK
			SET @I += 1
		END

		IF (@I >= @Number) SET @PrimeNumbers += CONCAT(@Number, '&')
	END

	SET @Number += 1
END

PRINT TRIM(TRAILING '&' FROM @PrimeNumbers)

GO
