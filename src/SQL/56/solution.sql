SET NOCOUNT ON;

DECLARE @Rows INT = 20
DECLARE @CurrentRows INT = 0

WHILE
    @CurrentRows < @Rows
BEGIN
	PRINT REPLICATE('* ', @Rows - @CurrentRows);
	SET @CurrentRows += 1;
END

GO
