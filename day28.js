//query.sql file code


// -- Running Total of Invoices per Customer

WITH InvoiceJoin AS (
    SELECT 
        i1."CustomerId",
        i1."InvoiceDate",
        SUM(i2."Total") AS "RunningTotal"
    FROM "Invoice" i1
    JOIN "Invoice" i2 ON i1."CustomerId" = i2."CustomerId" 
        AND i2."InvoiceDate" <= i1."InvoiceDate"
    GROUP BY i1."CustomerId", i1."InvoiceDate"
)

SELECT 
    "CustomerId", 
    "InvoiceDate", 
    "RunningTotal"
FROM InvoiceJoin
ORDER BY "CustomerId", "InvoiceDate";
