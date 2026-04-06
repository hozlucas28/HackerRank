SET NOCOUNT ON;

DECLARE @Rows INT = 20
DECLARE @CurrentRows INT = 0

WHILE
    @CurrentRows < @Rows
BEGIN
	SET @CurrentRows += 1;
	PRINT REPLICATE('* ', @CurrentRows);
END

GO
