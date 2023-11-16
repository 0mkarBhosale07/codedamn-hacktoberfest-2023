//query.sql file code

WITH RankedInvoices AS (
    SELECT 
        "Total",
        ROW_NUMBER() OVER (ORDER BY "Total" DESC) AS "RowNum"
    FROM 
        "Invoice"
)

SELECT 
    "Total" AS "ThirdHighestTotal"
FROM 
    RankedInvoices
WHERE 
    "RowNum" = 3;
