//query.sql file code

SELECT
    c."CustomerId",
    MAX(i."InvoiceDate") AS "MaxInvoiceDate"
FROM 
    "Customer" c
JOIN
    "Invoice" i
ON 
    c."CustomerId" = i."CustomerId"
GROUP BY 
    c."CustomerId"
ORDER BY 
    c."CustomerId" ASC;
